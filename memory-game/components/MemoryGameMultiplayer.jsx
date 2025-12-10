// "use client";
// import React, { useEffect, useState } from "react";
// import { socket } from "./socket";

// function shuffle(arr) {
//   const a = [...arr];
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

// export default function MemoryGameMultiplayer({ roomId }) {
//   const [role, setRole] = useState(null);
//   const [cards, setCards] = useState([]);
//   const [gridSize, setGridSize] = useState(4);
//   const [matched, setMatched] = useState([]);
//   const [flipped, setFlipped] = useState([]);
//   const [turn, setTurn] = useState("P1");
//   const [disabled, setDisabled] = useState(false);

//   // Load your role
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setRole(localStorage.getItem("playerRole"));
//     }
//   }, []);

//   // HOST creates board
//  // HOST creates board ONLY AFTER role is loaded
// useEffect(() => {
//   if (role === null) return; // 🚀 WAIT UNTIL ROLE IS LOADED
//   if (role !== "P1") return; // Only player 1 creates board

//   const total = 16;
//   const nums = [...Array(total / 2).keys()].map((n) => n + 1);
//   const deck = shuffle([...nums, ...nums]).map((num, i) => ({
//     id: i,
//     number: num,
//   }));

//   // set local state
//   setCards(deck);

//   // notify server
//   socket.emit("init_board", { roomId, cards: deck, gridSize: 4 });

// }, [role]);


//   // Receive complete state
//   useEffect(() => {
//     socket.on("sync_full_state", ({ cards, gridSize, matched, currentTurn }) => {
//       setCards(cards);
//       setGridSize(gridSize);
//       setMatched(matched);
//       setTurn(currentTurn);
//     });

//     socket.on("opponent_flip", ({ cardId }) => {
//       setFlipped((prev) => [...prev, cardId]);
//     });

//     socket.on("match_update", ({ matched }) => {
//       setMatched(matched);
//       setFlipped([]);
//       setDisabled(false);
//     });

//     socket.on("turn_update", ({ currentTurn }) => {
//       setTurn(currentTurn);
//     });

//     return () => {
//       socket.off("sync_full_state");
//       socket.off("opponent_flip");
//       socket.off("match_update");
//       socket.off("turn_update");
//     };
//   }, []);

//   // Local click
//   const handleClick = (id) => {
//     if (disabled) return;
//     if (turn !== role) return;

//     if (flipped.includes(id) || matched.includes(id)) return;

//     const now = [...flipped, id];
//     setFlipped(now);
//     socket.emit("flip_card", { roomId, cardId: id });

//     if (now.length === 2) {
//       setDisabled(true);

//       const [a, b] = now;
//       const isMatch = cards[a].number === cards[b].number;

//       if (isMatch) {
//         const updated = [...matched, a, b];
//         setMatched(updated);
//         socket.emit("match", { roomId, pair: [a, b] });
//         setFlipped([]);
//         setDisabled(false);
//       } else {
//         const next = role === "P1" ? "P2" : "P1";
//         setTimeout(() => {
//           setFlipped([]);
//           setDisabled(false);
//           socket.emit("switch_turn", { roomId, next });
//         }, 700);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center py-10">
//       <h1 className="text-3xl font-bold">Multiplayer Memory</h1>

//       <p className="mt-2 text-gray-700">
//         Room ID: <b>{roomId}</b>
//       </p>
//       <p className="mt-1">
//         You are:{" "}
//         <b className={role === "P1" ? "text-blue-700" : "text-green-700"}>
//           {role}
//         </b>
//       </p>
//       <p className="text-lg mt-2">
//         Turn:{" "}
//         <span className="font-bold">
//           {turn === "P1" ? "Player 1" : "Player 2"}
//         </span>
//       </p>

//       {/* Game grid */}
//       <div
//         className="grid gap-3 mt-6"
//         style={{
//           gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
//           width: `${gridSize * 4.2}rem`,
//         }}
//       >
//         {cards.map((c) => {
//           const open = flipped.includes(c.id) || matched.includes(c.id);

//           return (
//             <div
//               key={c.id}
//               onClick={() => handleClick(c.id)}
//               className={`aspect-square flex items-center justify-center rounded-lg
//                 text-xl font-bold cursor-pointer shadow 
//                 ${
//                   matched.includes(c.id)
//                     ? "bg-emerald-500 text-white"
//                     : open
//                     ? "bg-blue-600 text-white"
//                     : "bg-slate-300 text-slate-600"
//                 }`}
//             >
//               {open ? c.number : "?"}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useEffect, useState } from "react";
import { socket } from "./socket";

export default function MemoryGameMultiplayer({ roomId }) {
  const [role, setRole] = useState(null);          // "P1" or "P2"
  const [cards, setCards] = useState([]);          // [{id, number}, ...]
  const [gridSize, setGridSize] = useState(4);     // 4x4
  const [matched, setMatched] = useState([]);      // [ids...]
  const [flipped, setFlipped] = useState([]);      // [ids...]
  const [turn, setTurn] = useState("P1");          // "P1" or "P2"
  const [disabled, setDisabled] = useState(false); // local lock

  const [scores, setScores] = useState({ P1: 0, P2: 0 }); // ✅ scores
  const [winnerText, setWinnerText] = useState("");       // ✅ winner message

  // 1️⃣ Load role from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const r = window.localStorage.getItem("playerRole");
      console.log("[CLIENT] role from localStorage:", r);
      setRole(r);
    }
  }, []);

  // 2️⃣ Listen for full state + opponent actions
  useEffect(() => {
    const handleSyncFullState = (state) => {
      console.log(
        "[CLIENT] sync_full_state on",
        role,
        "room",
        roomId,
        "cards:",
        state.cards?.length,
        "scores:",
        state.scores
      );
      setCards(state.cards || []);
      setGridSize(state.gridSize || 4);
      setMatched(state.matched || []);
      setTurn(state.currentTurn || "P1");
      setScores(state.scores || { P1: 0, P2: 0 });
      setFlipped([]);
      setDisabled(false);
      setWinnerText("");
    };

    const handleOpponentFlip = ({ cardId }) => {
      console.log("[CLIENT] opponent_flip on", role, "cardId:", cardId);
      setFlipped((prev) => [...prev, cardId]);
    };

    const handleMatchUpdate = ({ matched, scores }) => {
      console.log(
        "[CLIENT] match_update on",
        role,
        "matched count:",
        matched?.length,
        "scores:",
        scores
      );
      setMatched(matched || []);
      setScores(scores || { P1: 0, P2: 0 });
      setFlipped([]);
      setDisabled(false);
    };

    const handleTurnUpdate = ({ currentTurn }) => {
      console.log("[CLIENT] turn_update on", role, "turn:", currentTurn);
      setTurn(currentTurn || "P1");
      setFlipped([]);
      setDisabled(false);
    };

    socket.on("sync_full_state", handleSyncFullState);
    socket.on("opponent_flip", handleOpponentFlip);
    socket.on("match_update", handleMatchUpdate);
    socket.on("turn_update", handleTurnUpdate);

    // 🔥 After listeners are set, ask server for current state
    console.log("[CLIENT] emitting get_state for room:", roomId);
    socket.emit("get_state", { roomId });

    return () => {
      socket.off("sync_full_state", handleSyncFullState);
      socket.off("opponent_flip", handleOpponentFlip);
      socket.off("match_update", handleMatchUpdate);
      socket.off("turn_update", handleTurnUpdate);
    };
  }, [roomId, role]);

  // 3️⃣ Local click logic
  const handleClick = (id) => {
    if (!role) return;
    if (disabled) return;
    if (turn !== role) return; // not your turn
    if (flipped.includes(id) || matched.includes(id)) return;

    const now = [...flipped, id];
    setFlipped(now);
    console.log("[CLIENT] local flip on", role, ":", id, "now:", now);

    // notify opponent for flip animation
    socket.emit("flip_card", { roomId, cardId: id });

    if (now.length === 2) {
      setDisabled(true);
      const [a, b] = now;
      const isMatch =
        cards[a] && cards[b] && cards[a].number === cards[b].number;

      if (isMatch) {
        console.log("[CLIENT] match by", role, "pair:", [a, b]);
        const newMatched = [...matched, a, b];
        setMatched(newMatched);
        setFlipped([]);
        setDisabled(false);

        // Tell server who scored
        socket.emit("match", { roomId, pair: [a, b], scorer: role });
        // Same player's turn continues
      } else {
        const next = role === "P1" ? "P2" : "P1";
        console.log("[CLIENT] no match, switching to", next);

        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);

        socket.emit("switch_turn", { roomId, next });
      }
    }
  };

  const isOpen = (id) => flipped.includes(id) || matched.includes(id);
  const allMatched = cards.length > 0 && matched.length === cards.length;

  // 4️⃣ Compute winner when all pairs matched
  useEffect(() => {
    if (!allMatched) return;

    if (scores.P1 > scores.P2) {
      setWinnerText("🏆 Player 1 Wins!");
    } else if (scores.P2 > scores.P1) {
      setWinnerText("🏆 Player 2 Wins!");
    } else {
      setWinnerText("🤝 It's a Tie!");
    }
  }, [allMatched, scores]);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-3xl font-extrabold mb-4 text-slate-800">
        Multiplayer Memory Game
      </h1>

      {/* Scores + role + turn */}
      <div className="flex flex-col items-center gap-2 mb-4 text-sm text-slate-700">
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-white rounded-lg shadow">
            <span className="font-semibold">Player 1:</span>{" "}
            <span className="font-bold text-blue-700">{scores.P1}</span>
          </div>
          <div className="px-4 py-2 bg-white rounded-lg shadow">
            <span className="font-semibold">Player 2:</span>{" "}
            <span className="font-bold text-emerald-700">{scores.P2}</span>
          </div>
        </div>
        <div>
          Room: <span className="font-mono font-semibold">{roomId}</span>
        </div>
        <div>
          You are:{" "}
          <span
            className={`font-semibold ${
              role === "P1" ? "text-blue-700" : "text-emerald-700"
            }`}
          >
            {role || "…"}
          </span>
        </div>
        <div>
          Turn:{" "}
          <span
            className={`font-bold ${
              turn === "P1" ? "text-blue-700" : "text-emerald-700"
            }`}
          >
            {turn === "P1" ? "Player 1" : "Player 2"}
          </span>
        </div>
      </div>

      {/* Grid or loading text */}
      {!cards.length ? (
        <p className="mt-8 text-slate-600">
          {role === "P1"
            ? "Waiting for server to create the board..."
            : "Waiting for game state from server..."}
        </p>
      ) : (
        <div
          className="grid gap-3 mt-4"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            width: `${gridSize * 4.2}rem`,
            maxWidth: "95vw",
          }}
        >
          {cards.map((c) => {
            const open = isOpen(c.id);

            return (
              <div
                key={c.id}
                onClick={() => handleClick(c.id)}
                className={`aspect-square flex items-center justify-center rounded-lg
                  text-xl font-bold cursor-pointer shadow transition-all
                  ${
                    matched.includes(c.id)
                      ? "bg-emerald-500 text-white scale-105"
                      : open
                      ? "bg-blue-600 text-white"
                      : "bg-slate-300 text-slate-600 hover:bg-slate-400"
                  }`}
              >
                {open ? c.number : "?"}
              </div>
            );
          })}
        </div>
      )}

      {/* Winner */}
      {winnerText && (
        <p className="mt-6 text-2xl font-bold text-emerald-700">
          {winnerText}
        </p>
      )}
      <button
  onClick={() => socket.emit("reset_game", { roomId })}
  className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
>
  Reset Match
</button>

    </div>
  );
}
