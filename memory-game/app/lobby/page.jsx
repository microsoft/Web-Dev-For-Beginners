// "use client";
// import { useState } from "react";
// import { socket } from "../../components/socket";
// import { useRouter } from "next/navigation";

// export default function Lobby() {
//   const [roomId, setRoomId] = useState("");
//   const router = useRouter();

//   const createRoom = () => {
//     const id = Math.floor(1000 + Math.random() * 9000).toString();
//     // mark this browser as Player 1
//     if (typeof window !== "undefined") {
//       window.localStorage.setItem("playerRole", "P1");
//     }
//     socket.emit("create_room", { roomId: id, player: "Player 1" });
//     router.push(`/room/${id}`);
//   };

//   const joinRoom = () => {
//     if (!roomId) return;
//     if (typeof window !== "undefined") {
//       window.localStorage.setItem("playerRole", "P2");
//     }
//     socket.emit("join_room", { roomId, player: "Player 2" });
//     router.push(`/room/${roomId}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Memory Game – Lobby</h1>

//       <button
//         onClick={createRoom}
//         className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow"
//       >
//         Create New Room
//       </button>

//       <div className="flex gap-2 items-center">
//         <input
//           value={roomId}
//           onChange={(e) => setRoomId(e.target.value)}
//           placeholder="Enter room code"
//           className="border rounded px-3 py-2"
//         />
//         <button
//           onClick={joinRoom}
//           className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow"
//         >
//           Join
//         </button>
//       </div>
//     </div>
//   );
// }

// app/lobby/page.jsx
// "use client";
// import { useState } from "react";
// import { socket } from "../../components/socket";
// import { useRouter } from "next/navigation";

// export default function Lobby() {
//   const router = useRouter();
//   const [roomId, setRoomId] = useState("");

//   const createRoom = () => {
//     const id = Math.floor(1000 + Math.random() * 9000).toString();
//     localStorage.setItem("playerRole", "P1");
//     socket.emit("create_room", { roomId: id });
//     router.push(`/room/${id}`);
//   };

//   const joinRoom = () => {
//     if (!roomId) return;
//     localStorage.setItem("playerRole", "P2");
//     socket.emit("join_room", { roomId });
//     router.push(`/room/${roomId}`);
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Memory Game – Lobby</h1>

//       <button
//         onClick={createRoom}
//         className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow"
//       >
//         Create Room
//       </button>

//       <div className="flex gap-2 items-center">
//         <input
//           value={roomId}
//           onChange={(e) => setRoomId(e.target.value)}
//           placeholder="Enter room code"
//           className="border rounded px-3 py-2"
//         />
//         <button
//           onClick={joinRoom}
//           className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow"
//         >
//           Join
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import { socket } from "../../components/socket";
// import { useRouter } from "next/navigation";

// export default function Lobby() {
//   const [roomId, setRoomId] = useState("");
//   const [gridSize, setGridSize] = useState(4);
//   const router = useRouter();

//   const createRoom = () => {
//     const id = Math.floor(1000 + Math.random() * 9000).toString();

//     localStorage.setItem("playerRole", "P1");

//     socket.emit("create_room", { roomId: id, gridSize });

//     router.push(`/room/${id}`);
//   };

//   const joinRoom = () => {
//     if (!roomId) return;

//     localStorage.setItem("playerRole", "P2");

//     socket.emit("join_room", { roomId });

//     router.push(`/room/${roomId}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Memory Game – Lobby</h1>

//       <label className="font-medium">Select Grid Size:</label>
//       <select
//         className="border px-3 py-2 rounded"
//         value={gridSize}
//         onChange={(e) => setGridSize(Number(e.target.value))}
//       >
//         {[2, 4, 6, 8, 10].map((n) => (
//           <option key={n} value={n}>
//             {n} × {n}
//           </option>
//         ))}
//       </select>

//       <button
//         onClick={createRoom}
//         className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow"
//       >
//         Create New Room
//       </button>

//       <div className="flex gap-2 items-center">
//         <input
//           value={roomId}
//           onChange={(e) => setRoomId(e.target.value)}
//           placeholder="Enter room code"
//           className="border rounded px-3 py-2"
//         />
//         <button
//           onClick={joinRoom}
//           className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow"
//         >
//           Join
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { socket } from "../../components/socket";
import { useRouter } from "next/navigation";

export default function Lobby() {
  const [roomId, setRoomId] = useState("");
  const [gridSize, setGridSize] = useState(4);
  const router = useRouter();

  const createRoom = () => {
    const id = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem("playerRole", "P1");
    socket.emit("create_room", { roomId: id, gridSize });
    router.push(`/room/${id}`);
  };

  const joinRoom = () => {
    if (!roomId) return;
    localStorage.setItem("playerRole", "P2");
    socket.emit("join_room", { roomId });
    router.push(`/room/${roomId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center gap-6">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 
                       text-transparent bg-clip-text drop-shadow-lg tracking-wide mb-4">
          Memory Game – Lobby
        </h1>

        {/* Grid Size Select */}
        <div className="w-full">
          <label className="font-semibold text-gray-700">Select Grid Size:</label>
          <select
            className="border mt-1 w-full px-3 py-2 rounded-lg shadow-sm text-black
                       focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
          >
            {[2, 4, 6, 8, 10].map((n) => (
              <option key={n} value={n}>
                {n} × {n}
              </option>
            ))}
          </select>
        </div>

        {/* Create Room Button */}
        <button
          onClick={createRoom}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
                     transition text-white font-semibold shadow-md"
        >
          Create New Room
        </button>

        {/* Join Room Section */}
        <div className="w-full flex gap-3 items-center">
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room code"
            className="border rounded-lg px-3 py-2 w-full shadow-sm text-black
                       placeholder-gray-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
          <button
            onClick={joinRoom}
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 
                       transition text-white font-semibold shadow-md"
          >
            Join
          </button>
        </div>

      </div>
    </div>
  );
}
