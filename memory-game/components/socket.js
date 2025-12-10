
// components/socket.js
import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", {
  transports: ["websocket"], // force websocket
  autoConnect: true,
});

// Debug logs
socket.on("connect", () => {
  console.log("[SOCKET] connected with id:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("[SOCKET] connect_error:", err.message);
});

socket.on("disconnect", (reason) => {
  console.warn("[SOCKET] disconnected:", reason);
});
