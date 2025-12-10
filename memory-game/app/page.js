// import MemoryGame from '@/components/MemoryGame'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <MemoryGame />
//     </div>
//   )
// }

// export default page

"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center bg-gray-100">
      
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 
                     text-transparent bg-clip-text drop-shadow-lg tracking-wide">
        Memory Game
      </h1>

      <Link href="/lobby">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition
                           text-white text-lg rounded-xl shadow-lg">
          Play Multiplayer
        </button>
      </Link>
      
    </div>
  );
}

