import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Flag, RefreshCcw } from 'lucide-react';

const MAZE_SIZE = 6;
const MAZE_GRID = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 2], // 2 is goal
];

export default function MazeGame() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [won, setWon] = useState(false);
  const [lastMove, setLastMove] = useState<string | null>(null);

  const move = (dx: number, dy: number, label: string) => {
    if (won) return;
    const newX = pos.x + dx;
    const newY = pos.y + dy;

    if (newX >= 0 && newX < MAZE_SIZE && newY >= 0 && newY < MAZE_SIZE) {
      if (MAZE_GRID[newY][newX] !== 1) {
        setPos({ x: newX, y: newY });
        setLastMove(label);
        if (MAZE_GRID[newY][newX] === 2) setWon(true);
      }
    }
  };

  const reset = () => {
    setPos({ x: 0, y: 0 });
    setWon(false);
    setLastMove(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border-2 border-slate-100">
           <h2 className="text-3xl font-black text-slate-800 uppercase italic mb-4">Ուղղությունների Լաբիրինթոս</h2>
           <p className="text-slate-500 font-medium">Գտիր ճիշտ ճանապարհը՝ օգտագործելով իսպաներեն ուղղությունները:</p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-[300px] mx-auto">
          <div />
          <DirectionBtn icon={<ArrowUp />} label="Adelante" sub="Առաջ" onClick={() => move(0, -1, "Adelante")} />
          <div />
          <DirectionBtn icon={<ArrowLeft />} label="Izquierda" sub="Ձախ" onClick={() => move(-1, 0, "Izquierda")} />
          <DirectionBtn icon={<RefreshCcw />} label="Reset" sub="Նորից" onClick={reset} color="bg-slate-800" />
          <DirectionBtn icon={<ArrowRight />} label="Derecha" sub="Աջ" onClick={() => move(1, 0, "Derecha")} />
          <div />
          <DirectionBtn icon={<ArrowDown />} label="Atrás" sub="Հետ" onClick={() => move(0, 1, "Atrás")} />
          <div />
        </div>

        <AnimatePresence>
            {lastMove && !won && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center bg-brand-blue/10 text-brand-blue-dark py-4 rounded-2xl border border-brand-blue/20 font-black uppercase tracking-widest italic"
                >
                    {lastMove} !
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      <div className="bg-white p-4 rounded-[48px] shadow-2xl border-8 border-white relative overflow-hidden">
        <div className="grid grid-cols-6 gap-2 bg-slate-100 p-2 rounded-[36px]">
          {MAZE_GRID.map((row, y) => row.map((cell, x) => (
            <div 
              key={`${x}-${y}`} 
              className={`aspect-square rounded-xl flex items-center justify-center transition-all ${
                cell === 1 ? 'bg-slate-800 text-white shadow-lg' : 'bg-white shadow-inner'
              } ${pos.x === x && pos.y === y ? 'ring-4 ring-brand-blue ring-offset-2' : ''}`}
            >
              {cell === 2 && <Flag className="text-emerald-500 w-6 h-6 animate-bounce" />}
              {pos.x === x && pos.y === y && (
                <motion.div 
                  layoutId="player"
                  className="text-4xl"
                >
                  🤵
                </motion.div>
              )}
            </div>
          )))}
        </div>

        <AnimatePresence>
          {won && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-emerald-500/90 backdrop-blur-md flex flex-col items-center justify-center text-white text-center p-8 z-20"
            >
              <Trophy className="w-20 h-20 mb-6" />
              <h2 className="text-5xl font-black uppercase italic mb-2">Հաղթանակ!</h2>
              <p className="text-xl font-bold opacity-80 mb-8">Դու ճիշտ գտար ճանապարհը:</p>
              <button 
                onClick={reset}
                className="px-12 py-4 bg-white text-emerald-600 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-transform"
              >
                ԿՐԿՆԵԼ ԽԱՂԸ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function DirectionBtn({ icon, label, sub, onClick, color = "bg-brand-blue" }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-2xl text-white shadow-lg transition-all active:scale-95 hover:brightness-110 ${color}`}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
      <span className="text-[8px] opacity-60 font-bold uppercase">{sub}</span>
    </button>
  );
}

import { Trophy } from 'lucide-react';
