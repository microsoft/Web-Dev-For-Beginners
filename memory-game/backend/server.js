import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// In-memory game state
const gameState = {};

// Helper: create a shuffled 4x4 deck
function createDeck(gridSize) {
  const total = gridSize * gridSize;
  const nums = Array.from({ length: total / 2 }, (_, i) => i + 1);
  const doubled = [...nums, ...nums];

  for (let i = doubled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
  }

  return doubled.map((num, i) => ({ id: i, number: num }));
}

io.on("connection", (socket) => {
  console.log("🔌 Client connected:", socket.id);

  // CREATE ROOM → server creates deck and initial scores
 socket.on("create_room", ({ roomId, gridSize }) => {
  socket.join(roomId);

  const deck = createDeck(gridSize);

  gameState[roomId] = {
    cards: deck,
    gridSize,
    matched: [],
    currentTurn: "P1",
    scores: { P1: 0, P2: 0 },
  };

  socket.emit("sync_full_state", gameState[roomId]);
});

  // JOIN ROOM
  socket.on("join_room", ({ roomId }) => {
    console.log("👥 join_room:", roomId);
    const room = gameState[roomId];
    if (!room) {
      console.log("⚠ join_room: room not found", roomId);
      return;
    }

    socket.join(roomId);
    socket.emit("sync_full_state", room);
  });

  // Room page asks for latest state
  socket.on("get_state", ({ roomId }) => {
    const room = gameState[roomId];
    console.log("📨 get_state for", roomId, "room exists?", !!room);
    if (!room) return;
    socket.emit("sync_full_state", room);
  });

  // FLIP CARD → opponent sees the flip
  socket.on("flip_card", ({ roomId, cardId }) => {
    socket.to(roomId).emit("opponent_flip", { cardId });
  });

  // MATCH FOUND → update matched + scores
  socket.on("match", ({ roomId, pair, scorer }) => {
    const room = gameState[roomId];
    if (!room) return;

    room.matched.push(...pair);

    if (!room.scores) {
      room.scores = { P1: 0, P2: 0 };
    }
    if (scorer === "P1" || scorer === "P2") {
      room.scores[scorer] += 1;
    }

    console.log(
      "✅ match in room",
      roomId,
      "matched:",
      room.matched,
      "scores:",
      room.scores
    );

    io.to(roomId).emit("match_update", {
      matched: room.matched,
      scores: room.scores,
    });
  });
  socket.on("reset_game", ({ roomId }) => {
  const room = gameState[roomId];
  if (!room) return;

  const deck = createDeck(room.gridSize);

  gameState[roomId] = {
    cards: deck,
    gridSize: room.gridSize,
    matched: [],
    currentTurn: "P1",
    scores: { P1: 0, P2: 0 },
  };

  io.to(roomId).emit("sync_full_state", gameState[roomId]);
});

  // SWITCH TURN
  socket.on("switch_turn", ({ roomId, next }) => {
    const room = gameState[roomId];
    if (!room) return;

    room.currentTurn = next;
    console.log("🔄 turn_switch in room", roomId, "next:", next);

    io.to(roomId).emit("turn_update", { currentTurn: next });
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("🚀 Socket server running on http://localhost:5000");
});
