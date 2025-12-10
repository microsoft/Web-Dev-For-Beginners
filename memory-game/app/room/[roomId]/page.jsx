// "use client";
// import { useParams } from "next/navigation";
// import MemoryGameMultiplayer from "../../../components/MemoryGameMultiplayer";

// export default function RoomPage() {
//   const { roomId } = useParams();

//   return <MemoryGameMultiplayer roomId={roomId} />;
// }

// app/room/[roomId]/page.jsx
"use client";
import { useParams } from "next/navigation";
import MemoryGameMultiplayer from "../../../components/MemoryGameMultiplayer";

export default function RoomPage() {
  const { roomId } = useParams();
  return <MemoryGameMultiplayer roomId={roomId} />;
}

