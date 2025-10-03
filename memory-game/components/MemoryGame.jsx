"use client";

import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(2);

  const [array, setArray] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [slectedPairs, setSelectedPairs] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [won, setWon] = useState(false);

  const handleGridSize = (e) => {
    const size = parseInt(e.target.value);
    //console.log(size)
    if (2 <= size && size <= 10) {
      setGridSize(size);
    }
  };

  const initalizeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);

    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number, index) => ({
        id: index,
        number,
      }));

    setArray(shuffledCards);
    setFlipped([]);
    setSelectedPairs([]);
    setDisabled(false);
    setWon(false);
  };

  const handleMatch = (secondId) => {
    const [firstId] = flipped;

    if (array[firstId].number == array[secondId].number) {
      setSelectedPairs([...slectedPairs, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setDisabled(false);
        setFlipped([]);
      }, 1000);
    }
  };

  useEffect(() => {
    initalizeGame();
  }, [gridSize]);

  const handleClick = (id) => {
    if (disabled || won) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true); //so we cant choose another one
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        //check match logic
        handleMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || slectedPairs.includes(id);
  const isselectedpairs = (id) => slectedPairs.includes(id);

  useEffect(() => {
    if (slectedPairs.length === array.length && array.length > 0) {
      setWon(true);
    }
  }, [slectedPairs, array]);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center p-4 bg-gray-100 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 ">Memory Game</h1>
      {/* Grid Size */}
      <div className="mb-4">
        <label htmlFor="gridSize">Grid Size:(max 10)</label>
        <input
          type="number"
          className="w-[50px] ml-3 rounded border-2 px-1.5 py-1"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSize}
        />
      </div>
      {/* Cards */}
      <div
        className="grid gap-2 mb-4"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
          width: `min(100%,${gridSize * 5.5}rem)`,
        }}
      >
        {array.map((array) => (
          <div
            key={array.id}
            onClick={() => handleClick(array.id)}
            className={`aspect-square flex items-center justify-center text-xl transition-all duration-300 font-bold rounded-lg  cursor-pointer ${
              isFlipped(array.id)
                ? isselectedpairs(array.id)
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-400 "
            }`}
          >
            {isFlipped(array.id) ? array.number : "?"}
          </div>
        ))}
      </div>
      {/* Result */}
      <div className="text-2xl text-green-500 font-bold">
        {won ? "You Won!" : ""}
      </div>

      {/* Rest Button */}
      <button
        className="px-5 py-2 bg-green-500 rounded text-white mt-5"
        onClick={initalizeGame}
      >
        Reset
      </button>
    </div>
  );
};

export default MemoryGame;