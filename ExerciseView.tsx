import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXERCISES } from './data';
import { CheckCircle2, AlertCircle, RefreshCcw, ArrowRight, Info, Trophy, Loader2 } from 'lucide-react';

export default function ExerciseView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const exercise = EXERCISES[currentIndex];

  useEffect(() => {
    setIsImageLoading(true);
  }, [currentIndex]);

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(option);
    const correct = option === exercise.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < EXERCISES.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center space-y-8 p-12 bg-white rounded-[40px] shadow-2xl mt-20"
      >
        <div className="w-32 h-32 bg-brand-sky rounded-full flex items-center justify-center mx-auto shadow-lg text-6xl">
          🏆
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-800 uppercase italic">ԱՊՐԵՍ!</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-lg">Ավարտեցիր վարժությունները</p>
          <div className="text-6xl font-black text-brand-blue-dark py-4">{score} / {EXERCISES.length}</div>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-6 bg-brand-blue-dark text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform"
        >
          <RefreshCcw /> ԿՐԿՆԵԼ
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      {/* Progress Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Առաջընթաց</span>
          <span className="text-2xl font-black text-brand-blue-dark italic">{currentIndex + 1} / {EXERCISES.length}</span>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Միավորներ</span>
                <span className="text-2xl font-black text-emerald-500 italic">{score}</span>
            </div>
            <div className="w-12 h-12 bg-emerald-100 text-emerald-500 rounded-2xl flex items-center justify-center shadow-inner">
                <Trophy className="w-6 h-6" />
            </div>
        </div>
      </div>

      {/* Main Exercise Card */}
      <div className="flex flex-col items-center gap-8">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full space-y-6"
        >
            <div className="bg-white p-10 rounded-[48px] shadow-xl border-2 border-slate-50 text-center">
            <div className="inline-block p-2 bg-brand-blue/5 rounded-2xl text-brand-blue font-black text-[10px] uppercase tracking-widest mb-6">
                Թարգմանիր և Լրացրու
            </div>
            
            <div className="space-y-4 mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-400 italic">
                {exercise.armenian}
              </h3>
              <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
                {exercise.spanish}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {exercise.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null}
                  className={`p-8 rounded-[32px] text-3xl font-black uppercase italic transition-all flex flex-col items-center justify-center gap-2 border-b-8 ${
                    selectedOption === option
                      ? option === exercise.correctAnswer
                        ? 'bg-emerald-500 text-white border-emerald-700 shadow-lg shadow-emerald-500/20'
                        : 'bg-red-500 text-white border-red-700 shadow-lg shadow-red-500/20'
                      : selectedOption !== null && option === exercise.correctAnswer
                        ? 'bg-emerald-100 text-emerald-600 border-emerald-500/30'
                        : 'bg-white text-slate-700 border-slate-100 hover:border-brand-blue hover:bg-brand-ice hover:text-brand-blue shadow-sm'
                  }`}
                >
                  {option}
                  <div className="h-6">
                    {selectedOption === option && (
                        option === exercise.correctAnswer ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {selectedOption !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-brand-blue-dark text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Info className="w-6 h-6" />
                   </div>
                   <span className="font-black uppercase tracking-widest text-sm text-white/60">Բացատրություն</span>
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8">{exercise.explanation}</p>
                <button 
                  onClick={handleNext}
                  className="w-full py-5 bg-brand-blue text-white rounded-3xl font-black uppercase italic flex items-center justify-center gap-3 hover:bg-brand-sky hover:text-brand-blue-dark transition-all shadow-lg active:scale-95"
                >
                  Հաջորդը <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
