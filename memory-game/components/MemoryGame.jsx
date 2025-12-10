"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";

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
  const [error, setError] = useState("");

  const [won, setWon] = useState(false);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const [moves, setMoves] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [best, setBest] = useState(null);
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleGridSize = (e) => {
    let size = parseInt(e.target.value);
    if (Number.isNaN(size)) return;
    if (size < 2) size = 2;
    if (size > 10) size = 10;
    if (size % 2 !== 0) {
      if (size < 10) size = size + 1;
      else size = size - 1;
    }
    setGridSize(size);
    setError("");
  };

  const initializeGame = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    startTimeRef.current = null;
    setElapsed(0);
    setMoves(0);
    setRunning(false);
    const totalCards = gridSize * gridSize;
    const pairCount = totalCards / 2;

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
    setPlayers((prev) => {
      if (!prev || prev.length === 0) {
        return [
          { name: "Player 1", score: 0 },
          { name: "Player 2", score: 0 },
        ];
      }
      return prev.map((p) => ({ ...p, score: 0 }));
    });
    setCurrentPlayer(0);
    setWinner(null);
    setShowModal(false);
  }, [gridSize]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleMatch = (firstId, secondId) => {
    if (array[firstId].number === array[secondId].number) {
      setSelectedPairs((prev) => [...prev, firstId, secondId]);
      // award point to current player
      setPlayers((prev) => {
        const next = prev.map((p) => ({ ...p }));
        next[currentPlayer].score += 1;
        return next;
      });
      setFlipped([]);
      setDisabled(false);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setDisabled(false);
        setFlipped([]);
        // switch turn after showing the cards briefly
        setCurrentPlayer((c) => (c === 0 ? 1 : 0));
        timerRef.current = null;
      }, 1000);
    }
  };

  // Start/stop game timer
  const startTimer = () => {
    if (intervalRef.current) return;
    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 200);
    setRunning(true);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRunning(false);
  };

  const handleClick = (id) => {
    if (disabled || won) return;
    // start timer on first meaningful click
    if (!intervalRef.current) startTimer();

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      const first = flipped[0];
      if (id === first) {
        setFlipped([]);
        setDisabled(false);
        return;
      }
      // increment move when a second distinct card is selected
      setMoves((m) => m + 1);
      setDisabled(true);
      setFlipped([first, id]);
      handleMatch(first, id);
    }
  };

  const isFlipped = (id) => flipped.includes(id) || selectedPairs.includes(id);
  const isSelectedPairs = (id) => selectedPairs.includes(id);

  useEffect(() => {
    if (selectedPairs.length === array.length && array.length > 0) {
      setWon(true);
      // determine winner
      const p0 = players[0]?.score ?? 0;
      const p1 = players[1]?.score ?? 0;
      if (p0 > p1) setWinner(players[0].name);
      else if (p1 > p0) setWinner(players[1].name);
      else setWinner("Tie");
      setShowModal(true);
    }
  }, [selectedPairs, array]);

  // When player wins, stop timer and persist bests
  useEffect(() => {
    if (!won) return;
    stopTimer();
    // persist single-player best only when there is no multiplayer (tie or win by one?)
    // we'll persist best as before (time/moves) regardless — optional
    const key = `memory-game-best-${gridSize}`;
    try {
      const prev = JSON.parse(localStorage.getItem(key) || "null");
      const record = { time: elapsed, moves };
      let better = false;
      if (!prev) better = true;
      else if (record.time < prev.time) better = true;
      else if (record.time === prev.time && record.moves < prev.moves) better = true;
      if (better) localStorage.setItem(key, JSON.stringify(record));
      setBest(() => {
        try {
          return JSON.parse(localStorage.getItem(key) || "null");
        } catch (e) {
          return null;
        }
      });
    } catch (e) {
      // ignore localStorage errors
    }
  }, [won]);

  // Load best when gridSize changes
  useEffect(() => {
    const key = `memory-game-best-${gridSize}`;
    try {
      const prev = JSON.parse(localStorage.getItem(key) || "null");
      setBest(prev);
    } catch (e) {
      setBest(null);
    }
  }, [gridSize]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="game-panel">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-extrabold">Memory Game</h1>
            <p className="small-muted">Find all matching pairs — click or press Enter/Space to flip</p>
            <div className="players-row mt-3 flex gap-3 items-center">
                {players.map((p, idx) => (
                  <div
                    key={p.name}
                    className={`px-2 py-1 rounded-md flex items-center gap-2 ${currentPlayer === idx ? 'player-active' : ''}`}
                  >
                    <input
                      value={p.name}
                      onChange={(e) => setPlayers((prev) => prev.map((pl, i) => i === idx ? {...pl, name: e.target.value} : pl))}
                      className="font-semibold bg-transparent border-b border-transparent focus:border-gray-300 focus:outline-none text-sm"
                      style={{width: '6.5rem'}}
                    />
                    <div className="stat small-muted">Score: <span className="font-semibold">{p.score}</span></div>
                  </div>
                ))}
            </div>
          </div>
          <div className="controls-right">
            <div className="controls-left">
              <label htmlFor="gridSize" className="small-muted">Grid</label>
              <input
                id="gridSize"
                type="number"
                className="w-14 ml-2 rounded border px-2 py-1 text-sm"
                min="2"
                max="10"
                step="2"
                value={gridSize}
                onChange={handleGridSize}
                aria-label="Grid size (even numbers only)"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="small-muted">Moves: <span className="font-semibold">{moves}</span></div>
              <div className="small-muted">Time: <span className="font-semibold">{elapsed}s</span></div>
              <button
                type="button"
                onClick={initializeGame}
                className="ml-3 btn-primary"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div
          className="grid gap-3 mb-4"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
            width: `min(100%,${gridSize * 5.5}rem)`,
          }}
        >
          {array.map((card) => {
            const flippedState = isFlipped(card.id);
            const matched = isSelectedPairs(card.id);
            return (
              <div key={card.id} className="card-wrap">
                <button
                  type="button"
                  onClick={() => handleClick(card.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleClick(card.id);
                    }
                  }}
                  aria-pressed={flippedState}
                  aria-label={`Card ${card.id + 1} ${flippedState ? "showing " + card.number : "hidden"}`}
                  className={`card ${flippedState ? "flipped" : ""} ${matched ? 'matched' : ''}`}
                >
                  <div className="card-inner">
                    <div className={`card-face card-front`}>
                      <span className="text-2xl font-bold">{card.number}</span>
                    </div>
                    <div className={`card-face card-back`}>
                      <span className="text-2xl font-extrabold">?</span>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {showModal && (
          <div className="overlay" role="dialog" aria-modal="true">
            <div className="modal">
              <h2>{winner === 'Tie' ? "It's a tie!" : `${winner} wins!`}</h2>
              <p>Final score — {players.map((p) => `${p.name}: ${p.score}`).join(' • ')}</p>
              <div>
                <button onClick={() => { setShowModal(false); initializeGame(); }} className="btn-primary">Play again</button>
                <button onClick={() => setShowModal(false)} className="btn-secondary">Close</button>
              </div>
            </div>
          </div>
        )}

        <div aria-live="polite" className="text-2xl font-semibold winner-text">
          {won ? (winner === "Tie" ? "It's a tie!" : `${winner} wins!`) : ""}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;