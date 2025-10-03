"use client";

import React, { useEffect, useState, useCallback } from "react";

// Fisher-Yates shuffle for unbiased randomization
function fisherYatesShuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(2);

  const [array, setArray] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [won, setWon] = useState(false);

  const handleGridSize = (e) => {
    const size = parseInt(e.target.value);
    if (2 <= size && size <= 10 && (size * size) % 2 === 0) {
      setGridSize(size);
    }
  };

  const initializeGame = useCallback(() => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);

    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const cardNumbers = [...numbers, ...numbers];
    const shuffledCardNumbers = fisherYatesShuffle(cardNumbers);
    const shuffledCards = shuffledCardNumbers.map((number, index) => ({
      id: index,
      number,
    }));

    setArray(shuffledCards);
    setFlipped([]);
    setSelectedPairs([]);
    setDisabled(false);
    setWon(false);
  }, [gridSize]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleMatch = (secondId) => {
    const [firstId] = flipped;

    if (array[firstId].number === array[secondId].number) {
      setSelectedPairs([...selectedPairs, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setDisabled(false);
        setFlipped([]);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (disabled || won) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        handleMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || selectedPairs.includes(id);
  const isSelectedPairs = (id) => selectedPairs.includes(id);

  useEffect(() => {
    if (selectedPairs.length === array.length && array.length > 0) {
      setWon(true);
    }
  }, [selectedPairs, array]);

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 bg-gray-100 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>
      {/* Grid Size */}
      <div className="mb-4">
        <label htmlFor="gridSize">Grid Size: (max 10)</label>
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
        {array.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`aspect-square flex items-center justify-center text-xl transition-all duration-300 font-bold rounded-lg cursor-pointer ${
              isFlipped(card.id)
                ? isSelectedPairs(card.id)
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-400"
            }`}
          >
            {isFlipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>
      {/* Result */}
      <div className="text-2xl text-green-500 font-bold">
        {won ? "You Won!" : ""}
      </div>

      {/* Reset Button */}
      <button
        className="px-5 py-2 bg-green-500 rounded text-white mt-5"
        onClick={initializeGame}
      >
        Reset
      </button>
    </div>
  );
};

export default MemoryGame;