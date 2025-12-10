// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// // Fisher-Yates shuffle for unbiased randomization
// function fisherYatesShuffle(array) {
//   const arr = array.slice();
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }
// const MemoryGame = () => {
//   const [gridSize, setGridSize] = useState(2);
//   const [array, setArray] = useState([]);
//   const [flipped, setFlipped] = useState([]);
//   const [selectedPairs, setSelectedPairs] = useState([]);
//   const [disabled, setDisabled] = useState(false);
//   const [error, setError] = useState("");
//   const [won, setWon] = useState(false);
//   const handleGridSize = (e) => {
//     const size = parseInt(e.target.value);
//     if (2 <= size && size <= 10 && (size % 2 === 0)) {
//       setGridSize(size);
//       setError(""); 
//     } else {
//       setError("Please enter a grid size where size is even (e.g., 2, 4, 6, 8, 10)");
//     }
//   };
//   const initializeGame = useCallback(() => {
//     const totalCards = gridSize * gridSize;
//     const pairCount = totalCards / 2;
//     const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
//     const cardNumbers = [...numbers, ...numbers];
//     const shuffledCardNumbers = fisherYatesShuffle(cardNumbers);
//     const shuffledCards = shuffledCardNumbers.map((number, index) => ({
//       id: index,
//       number,
//     }));
//     setArray(shuffledCards);
//     setFlipped([]);
//     setSelectedPairs([]);
//     setDisabled(false);
//     setWon(false);
//   }, [gridSize]);
//   useEffect(() => {
//     initializeGame();
//   }, [initializeGame]);
//   const handleMatch = (secondId) => {
//   const [firstId] = flipped;
//     if (array[firstId].number === array[secondId].number) {
//       setSelectedPairs([...selectedPairs, firstId, secondId]);
//       setFlipped([]);
//       setDisabled(false);
//     } else {
//       setTimeout(() => {
//         setDisabled(false);
//         setFlipped([]);
//       }, 1000);
//     }
//   };
//   const handleClick = (id) => {
//     if (disabled || won) return;

//     if (flipped.length === 0) {
//       setFlipped([id]);
//       return;
//     }

//     if (flipped.length === 1) {
//       setDisabled(true);
//       if (id !== flipped[0]) {
//         setFlipped([...flipped, id]);
//         handleMatch(id);
//       } else {
//         setFlipped([]);
//         setDisabled(false);
//       }
//     }
//   };
//   const isFlipped = (id) => flipped.includes(id) || selectedPairs.includes(id);
//   const isSelectedPairs = (id) => selectedPairs.includes(id);
//   useEffect(() => {
//     if (selectedPairs.length === array.length && array.length > 0) {
//       setWon(true);
//     }
//   }, [selectedPairs, array]);
//   return (
//     <div className="h-screen flex flex-col justify-center items-center p-4 bg-gray-100 ">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-6">Memory Game</h1>
//       {/* Grid Size */}
//       <div className="mb-4">
//         <label htmlFor="gridSize">Grid Size: (max 10)</label>
//         <input
//           type="number"
//           className="w-[50px] ml-3 rounded border-2 px-1.5 py-1"
//           min="2"
//           max="10"
//           value={gridSize}
//           onChange={handleGridSize}
//         />
//         {error && (
//           <div className="text-sm text-red-500 mt-2">{error}</div>
//         )}
//       </div>
//       {/* Cards */}
//       <div
//         className="grid gap-2 mb-4"
//         style={{
//           gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
//           width: `min(100%,${gridSize * 5.5}rem)`,
//         }}
//       >
//         {array.map((card) => (
//           <div
//             key={card.id}
//             onClick={() => handleClick(card.id)}
//             className={`aspect-square flex items-center justify-center text-xl transition-all duration-300 font-bold rounded-lg cursor-pointer ${
//               isFlipped(card.id)
//                 ? isSelectedPairs(card.id)
//                   ? "bg-green-500 text-white"
//                   : "bg-blue-500 text-white"
//                 : "bg-gray-300 text-gray-400"
//             }`}
//           >
//             {isFlipped(card.id) ? card.number : "?"}
//           </div>
//         ))}
//       </div>
//       {/* Result */}
//       <div className="text-2xl text-green-500 font-bold">
//         {won ? "You Won!" : ""}
//       </div>

//       {/* Reset Button */}
//       <button
//         className="px-5 py-2 bg-green-500 rounded text-white mt-5"
//         onClick={initializeGame}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };
// export default MemoryGame;

// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// // Fisher-Yates Shuffle
// function fisherYatesShuffle(array) {
//   const arr = array.slice();
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }
// const MemoryGame = () => {
//   const [gridSize, setGridSize] = useState(4);
//   const [inputSize, setInputSize] = useState("4"); // FIXED input handling
//   const [cards, setCards] = useState([]);
//   const [flipped, setFlipped] = useState([]);
//   const [matched, setMatched] = useState([]);
//   const [disabled, setDisabled] = useState(false);
//   const [error, setError] = useState("");
//   const [won, setWon] = useState(false);
//   // Handle user typing
//   const handleGridSizeInput = (e) => {
//     const value = e.target.value;
//     setInputSize(value);
//     const size = Number(value);
//     if (size >= 2 && size <= 10 && size % 2 === 0) {
//       setGridSize(size);
//       setError("");
//     } else {
//       setError("Even numbers only (2,4,6,8,10)");
//     }
//   };
//   // Initialize game
//   const initializeGame = useCallback(() => {
//     const total = gridSize * gridSize;
//     const pairCount = total / 2;
//     const nums = [...Array(pairCount).keys()].map((n) => n + 1);
//     const shuffled = fisherYatesShuffle([...nums, ...nums]).map(
//       (num, index) => ({
//         id: index,
//         number: num,
//       })
//     );
//     setCards(shuffled);
//     setFlipped([]);
//     setMatched([]);
//     setDisabled(false);
//     setWon(false);
//   }, [gridSize]);
//   useEffect(() => initializeGame(), [initializeGame]);
//   // Card click logic
//   const handleClick = (id) => {
//     if (disabled || flipped.includes(id) || matched.includes(id)) return;
//     const newFlipped = [...flipped, id];
//     setFlipped(newFlipped);
//     if (newFlipped.length === 2) {
//       setDisabled(true);
//       const [a, b] = newFlipped;
//       if (cards[a].number === cards[b].number) {
//         setMatched((prev) => [...prev, a, b]);
//         setFlipped([]);
//         setDisabled(false);
//       } else {
//         setTimeout(() => {
//           setFlipped([]);
//           setDisabled(false);
//         }, 800);
//       }
//     }
//   };
//   // Win checker
//   useEffect(() => {
//     if (matched.length === cards.length && cards.length !== 0) {
//       setWon(true);
//     }
//   }, [matched, cards]);
//   return (
//     <div className="min-h-screen flex flex-col items-center py-10 bg-gradient-to-br from-gray-100 to-gray-300">
//       <h1 className="text-4xl font-extrabold mb-6 text-slate-800 tracking-wide">
//         Memory Match
//       </h1>
//       {/* Grid Size Input */}
//       <div className="mb-4 text-lg">
//         <label className="font-semibold text-slate-700">Grid Size:</label>
//         <input
//           type="number"
//           value={inputSize}
//           onChange={handleGridSizeInput}
//           min="2"
//           max="10"
//           className="ml-3 w-20 px-3 py-1 border rounded-lg shadow bg-white"
//         />
//         {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
//       </div>
//       {/* Game Grid */}
//       <div
//         className="grid gap-3 mx-auto transition-all duration-300"
//         style={{
//           gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
//           width: `${gridSize * 4.2}rem`,
//           maxWidth: "95vw",
//         }}
//       >
//         {cards.map((card) => {
//           const open = flipped.includes(card.id) || matched.includes(card.id);
//           return (
//             <div
//               key={card.id}
//               onClick={() => handleClick(card.id)}
//               className={`
//                 aspect-square flex items-center justify-center rounded-xl 
//                 text-xl font-bold shadow-md cursor-pointer transition-all
//                 ${
//                   matched.includes(card.id)
//                     ? "bg-emerald-500 text-white scale-105"
//                     : open
//                     ? "bg-blue-600 text-white"
//                     : "bg-slate-300 text-slate-500 hover:bg-slate-400"
//                 }
//               `}
//             >
//               {open ? card.number : "?"}
//             </div>
//           );
//         })}
//       </div>
//       {/* Win message */}
//       {won && (
//         <p className="text-3xl mt-6 font-bold text-emerald-600 animate-bounce">
//           🎉 You Won! 🎉
//         </p>
//       )}
//       {/* Reset */}
//       <button
//         onClick={initializeGame}
//         className="mt-6 px-6 py-2 text-lg bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
//       >
//         Reset Game
//       </button>
//     </div>
//   );
// };

// export default MemoryGame;

// "use client";
// import React, { useEffect, useState, useCallback } from "react";

// // Fisher-Yates shuffle
// function fisherYatesShuffle(array) {
//   const arr = array.slice();
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// const MemoryGame = () => {
//   const [gridSize, setGridSize] = useState(4);
//   const [inputSize, setInputSize] = useState("4");
//   const [cards, setCards] = useState([]);
//   const [flipped, setFlipped] = useState([]);
//   const [matched, setMatched] = useState([]);
//   const [disabled, setDisabled] = useState(false);
//   const [error, setError] = useState("");
//   const [won, setWon] = useState(false);

//   // 🔹 NEW: multiplayer state
//   const [currentPlayer, setCurrentPlayer] = useState(1); // 1 or 2
//   const [scores, setScores] = useState({ 1: 0, 2: 0 });
//   const [winnerText, setWinnerText] = useState("");

//   // Handle grid size input (same as before, but stored separately)
//   const handleGridSizeInput = (e) => {
//     const value = e.target.value;
//     setInputSize(value);

//     const size = Number(value);
//     if (size >= 2 && size <= 10 && size % 2 === 0) {
//       setGridSize(size);
//       setError("");
//     } else {
//       setError("Even numbers only (2,4,6,8,10)");
//     }
//   };

//   // Initialize / reset game
//   const initializeGame = useCallback(() => {
//     const total = gridSize * gridSize;
//     const pairCount = total / 2;

//     const nums = [...Array(pairCount).keys()].map((n) => n + 1);
//     const shuffled = fisherYatesShuffle([...nums, ...nums]).map(
//       (num, index) => ({
//         id: index,
//         number: num,
//       })
//     );

//     setCards(shuffled);
//     setFlipped([]);
//     setMatched([]);
//     setDisabled(false);
//     setWon(false);

//     // reset multiplayer stuff
//     setCurrentPlayer(1);
//     setScores({ 1: 0, 2: 0 });
//     setWinnerText("");
//   }, [gridSize]);

//   useEffect(() => {
//     initializeGame();
//   }, [initializeGame]);

//   // Handle card click
//   const handleClick = (id) => {
//     if (disabled) return;
//     if (flipped.includes(id) || matched.includes(id)) return;

//     const newFlipped = [...flipped, id];
//     setFlipped(newFlipped);

//     if (newFlipped.length === 2) {
//       setDisabled(true);
//       const [a, b] = newFlipped;
//       const isMatch = cards[a].number === cards[b].number;

//       if (isMatch) {
//         // Add to matched
//         setMatched((prev) => {
//           const updated = [...prev, a, b];

//           // update score for current player
//           setScores((prevScores) => ({
//             ...prevScores,
//             [currentPlayer]: prevScores[currentPlayer] + 1,
//           }));

//           return updated;
//         });

//         // Clear flipped and allow same player to continue
//         setTimeout(() => {
//           setFlipped([]);
//           setDisabled(false);
//         }, 500);
//       } else {
//         // No match: switch to other player after small delay
//         setTimeout(() => {
//           setFlipped([]);
//           setDisabled(false);
//           setCurrentPlayer((p) => (p === 1 ? 2 : 1));
//         }, 800);
//       }
//     }
//   };

//   // Win + winner calculation
//   useEffect(() => {
//     if (matched.length === cards.length && cards.length !== 0) {
//       setWon(true);
//       if (scores[1] > scores[2]) {
//         setWinnerText("Player 1 Wins! 🎉");
//       } else if (scores[2] > scores[1]) {
//         setWinnerText("Player 2 Wins! 🎉");
//       } else {
//         setWinnerText("It's a Tie! 🤝");
//       }
//     }
//   }, [matched, cards.length, scores]);

//   const isOpen = (id) => flipped.includes(id) || matched.includes(id);

//   return (
//     <div className="min-h-screen flex flex-col items-center py-10 bg-gradient-to-br from-gray-100 to-gray-300">

//       <h1 className="text-4xl font-extrabold mb-4 text-slate-800 tracking-wide">
//         Memory Match – 2 Player
//       </h1>

//       {/* Scores + current player */}
//       <div className="flex gap-6 mb-4 text-lg">
//         <div className={`px-4 py-2 rounded-lg shadow bg-white`}>
//           <span className="font-semibold">Player 1:</span>{" "}
//           <span className="font-bold text-blue-700">{scores[1]}</span>
//         </div>
//         <div className={`px-4 py-2 rounded-lg shadow bg-white`}>
//           <span className="font-semibold">Player 2:</span>{" "}
//           <span className="font-bold text-emerald-700">{scores[2]}</span>
//         </div>
//       </div>

//       <div className="mb-4 text-lg">
//         <span className="font-semibold text-slate-700">Current Turn: </span>
//         <span
//           className={`font-bold ${
//             currentPlayer === 1 ? "text-blue-700" : "text-emerald-700"
//           }`}
//         >
//           Player {currentPlayer}
//         </span>
//       </div>

//       {/* Grid Size Input */}
//       <div className="mb-4 text-lg">
//         <label className="font-semibold text-slate-700">Grid Size:</label>
//         <input
//           type="number"
//           value={inputSize}
//           onChange={handleGridSizeInput}
//           min="2"
//           max="10"
//           className="ml-3 w-20 px-3 py-1 border rounded-lg shadow bg-white"
//         />
//         {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
//       </div>

//       {/* Game Grid */}
//       <div
//         className="grid gap-3 mx-auto transition-all duration-300"
//         style={{
//           gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
//           width: `${gridSize * 4.2}rem`,
//           maxWidth: "95vw",
//         }}
//       >
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             onClick={() => handleClick(card.id)}
//             className={`
//               aspect-square flex items-center justify-center rounded-xl 
//               text-xl font-bold shadow-md cursor-pointer transition-all
//               ${
//                 matched.includes(card.id)
//                   ? "bg-emerald-500 text-white scale-105"
//                   : isOpen(card.id)
//                   ? "bg-blue-600 text-white"
//                   : "bg-slate-300 text-slate-500 hover:bg-slate-400"
//               }
//             `}
//           >
//             {isOpen(card.id) ? card.number : "?"}
//           </div>
//         ))}
//       </div>

//       {/* Win / Result */}
//       {won && (
//         <p className="text-2xl mt-6 font-bold text-emerald-700">
//           {winnerText}
//         </p>
//       )}

//       {/* Reset */}
//       <button
//         onClick={initializeGame}
//         className="mt-6 px-6 py-2 text-lg bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
//       >
//         Reset Game
//       </button>
//     </div>
//   );
// };

// export default MemoryGame;


"use client";
import React, { useEffect, useState, useCallback } from "react";

// Fisher-Yates shuffle
function fisherYatesShuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [inputSize, setInputSize] = useState("4");
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [won, setWon] = useState(false);

  // Multiplayer state
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [winnerText, setWinnerText] = useState("");

  // ⭐ FIX 1: Load player role AND generate grid immediately for both players
  useEffect(() => {
    const role = localStorage.getItem("playerRole");
    if (role === "P1") setCurrentPlayer(1);
    if (role === "P2") setCurrentPlayer(2);

    initializeGame(); // ensure Player 2 always gets grid
  }, []);

  // Handle grid size input
  const handleGridSizeInput = (e) => {
    const value = e.target.value;
    setInputSize(value);

    const size = Number(value);
    if (size >= 2 && size <= 10 && size % 2 === 0) {
      setGridSize(size);
      setError("");
    } else {
      setError("Even numbers only (2,4,6,8,10)");
    }
  };

  // Initialize game
  const initializeGame = useCallback(() => {
    const total = gridSize * gridSize;
    const pairCount = total / 2;

    const nums = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffled = fisherYatesShuffle([...nums, ...nums]).map(
      (num, index) => ({
        id: index,
        number: num,
      })
    );

    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setDisabled(false);
    setWon(false);
    setScores({ 1: 0, 2: 0 });
    setWinnerText("");
  }, [gridSize]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Handle card click
  const handleClick = (id) => {
    if (disabled) return;
    if (flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    // Two cards flipped
    if (newFlipped.length === 2) {
      setDisabled(true);

      // ⭐ FIX 2: Give React time to render second card BEFORE comparing
      setTimeout(() => {
        const [a, b] = newFlipped;
        const isMatch = cards[a].number === cards[b].number;

        if (isMatch) {
          // Matched pair — green
          setMatched((prev) => {
            const updated = [...prev, a, b];

            // Score update
            setScores((prevScores) => ({
              ...prevScores,
              [currentPlayer]: prevScores[currentPlayer] + 1,
            }));

            return updated;
          });

          setTimeout(() => {
            setFlipped([]);
            setDisabled(false);
          }, 500);
        } else {
          // Not matched — switch turn
          setTimeout(() => {
            setFlipped([]);
            setDisabled(false);
            setCurrentPlayer((p) => (p === 1 ? 2 : 1));
          }, 800);
        }
      }, 120); // ⭐ Perfect delay for 2nd card visibility
    }
  };

  // Win detection
  useEffect(() => {
    if (matched.length === cards.length && cards.length !== 0) {
      setWon(true);

      if (scores[1] > scores[2]) setWinnerText("Player 1 Wins! 🎉");
      else if (scores[2] > scores[1]) setWinnerText("Player 2 Wins! 🎉");
      else setWinnerText("It's a Tie! 🤝");
    }
  }, [matched, cards.length, scores]);

  const isOpen = (id) => flipped.includes(id) || matched.includes(id);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 
                    bg-gradient-to-br from-indigo-100 to-blue-100">

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-lg">
        Memory Match – 2 Player
      </h1>

      {/* Scoreboard */}
      <div className="flex gap-8 mb-6 text-lg">
        <div className="px-6 py-3 rounded-2xl shadow bg-white border border-gray-200">
          <span className="font-semibold">Player 1:</span>{" "}
          <span className="font-bold text-blue-700">{scores[1]}</span>
        </div>

        <div className="px-6 py-3 rounded-2xl shadow bg-white border border-gray-200">
          <span className="font-semibold">Player 2:</span>{" "}
          <span className="font-bold text-emerald-700">{scores[2]}</span>
        </div>
      </div>

      {/* Turn indicator */}
      <div className="mb-6 text-xl font-semibold">
        <span className="text-slate-700">Current Turn: </span>
        <span
          className={`px-4 py-1 rounded-xl shadow text-white 
            ${currentPlayer === 1 ? "bg-blue-600" : "bg-emerald-600"}`}
        >
          Player {currentPlayer}
        </span>
      </div>

      {/* Grid size input */}
      <div className="mb-6 text-lg flex items-center gap-4">
        <label className="font-semibold text-slate-700">Grid Size:</label>
        <input
          type="number"
          value={inputSize}
          onChange={handleGridSizeInput}
          min="2"
          max="10"
          className="w-24 px-3 py-2 border rounded-xl shadow bg-white text-center"
        />
      </div>

      {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

      {/* Game grid */}
      <div
        className="grid gap-4 mx-auto transition-all duration-300"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          width: `${gridSize * 5}rem`,
          maxWidth: "95vw",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`
              aspect-square flex items-center justify-center rounded-2xl 
              text-3xl font-extrabold shadow-lg cursor-pointer transition-all
              ${
                matched.includes(card.id)
                  ? "bg-emerald-500 text-white scale-110"
                  : isOpen(card.id)
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-slate-300 text-slate-600 hover:bg-slate-400"
              }
            `}
            style={{
              minWidth: "65px",
              minHeight: "65px",
            }}
          >
            {isOpen(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>

      {/* Winner message */}
      {won && (
        <p className="text-3xl mt-10 font-bold text-emerald-700 drop-shadow-md">
          {winnerText}
        </p>
      )}

      {/* Reset */}
      <button
        onClick={initializeGame}
        className="mt-10 px-8 py-3 text-lg bg-purple-600 text-white 
                   rounded-2xl shadow hover:bg-purple-700 transition"
      >
        Reset Game
      </button>
    </div>
  );
};

export default MemoryGame;
