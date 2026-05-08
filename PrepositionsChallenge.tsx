import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PREP_QUESTIONS } from './data';
import { CheckCircle2, AlertCircle, RefreshCcw, Star } from 'lucide-react';

export default function PrepositionsChallenge() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState<'success' | 'fail' | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const question = PREP_QUESTIONS[currentIndex];

  const handleSelect = (index: number) => {
    if (showResult) return;
    
    if (index === question.correctIndex) {
      setShowResult('success');
      setScore(s => s + 1);
      setTimeout(() => {
        if (currentIndex < PREP_QUESTIONS.length - 1) {
          setCurrentIndex(c => c + 1);
          setShowResult(null);
        } else {
          setGameFinished(true);
        }
      }, 1000);
    } else {
      setShowResult('fail');
      setTimeout(() => setShowResult(null), 1000);
    }
  };

  if (gameFinished) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 p-12 bg-white rounded-[40px] shadow-2xl mt-20">
        <div className="flex justify-center">
             {[...Array(3)].map((_, i) => (
                 <Star key={i} className={`w-12 h-12 ${i < score ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`} />
             ))}
        </div>
        <h2 className="text-4xl font-black text-slate-800 uppercase italic">Խաղն ավարտվեց!</h2>
        <p className="text-slate-500 text-xl font-bold">Միավորներ: {score} / {PREP_QUESTIONS.length}</p>
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-6 bg-brand-blue-dark text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-xl"
        >
          <RefreshCcw /> ՆՈՐԻՑ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
         <h2 className="text-5xl font-black text-slate-800 uppercase italic tracking-tighter">EN, DE <span className="text-brand-blue">&</span> A</h2>
         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Ընտրիր ճիշտ նախդիրը</p>
      </div>

      <div className="bg-white p-12 rounded-[50px] shadow-2xl border-4 border-slate-50 relative">
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-brand-blue text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">
          Հարց {currentIndex + 1}
        </div>

        <div className="text-center space-y-12 py-8">
           <div className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
              {question.sentence.split('___')[0]}
              <span className="inline-block mx-4 min-w-[80px] border-b-8 border-brand-blue text-brand-blue animate-pulse">
                ?
              </span>
              {question.sentence.split('___')[1]}
           </div>

           <div className="flex flex-wrap justify-center gap-4">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="w-32 h-32 rounded-3xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-4xl font-black text-slate-700 hover:border-brand-blue hover:bg-brand-ice hover:text-brand-blue-dark transition-all transform hover:scale-110 active:scale-95"
                >
                  {opt}
                </button>
              ))}
           </div>
        </div>

        <AnimatePresence>
            {showResult && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute inset-0 rounded-[50px] flex items-center justify-center z-10 ${
                        showResult === 'success' ? 'bg-emerald-500/90' : 'bg-red-500/90'
                    }`}
                >
                   {showResult === 'success' ? (
                       <CheckCircle2 className="text-white w-32 h-32" />
                   ) : (
                       <AlertCircle className="text-white w-32 h-32" />
                   )}
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2">
         {PREP_QUESTIONS.map((_, i) => (
             <div key={i} className={`h-2 rounded-full transition-all ${i === currentIndex ? 'w-12 bg-brand-blue' : 'w-4 bg-slate-200'}`} />
         ))}
      </div>
    </div>
  );
}
