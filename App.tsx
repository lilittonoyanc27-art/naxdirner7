import React, { useState } from 'react';
import { 
  Trophy, 
  BookOpen, 
  Map, 
  Gamepad2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AppScreen } from './types';

// Placeholder for components to be created
import TheoryView from './TheoryView';
import ExerciseView from './ExerciseView';
import MazeGame from './MazeGame';
import PrepositionsChallenge from './PrepositionsChallenge';

const Navbar = ({ currentScreen, setScreen }: { currentScreen: AppScreen, setScreen: (s: AppScreen) => void }) => (
  <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <button onClick={() => setScreen('menu')} className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-brand-blue-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Sparkles className="text-white w-6 h-6" />
        </div>
        <span className="font-black text-slate-800 tracking-tighter uppercase italic hidden sm:block">
          Իսպաներենի <span className="text-brand-blue">Արկած</span>
        </span>
      </button>
      
      <div className="flex items-center gap-2">
        <NavButton active={currentScreen === 'theory'} icon={<BookOpen className="w-5 h-5"/>} label="Տեսություն" onClick={() => setScreen('theory')} />
        <NavButton active={currentScreen === 'exercises'} icon={<Trophy className="w-5 h-5"/>} label="Վարժություններ" onClick={() => setScreen('exercises')} />
        <NavButton active={currentScreen === 'maze'} icon={<Map className="w-5 h-5"/>} label="Լաբիրինթոս" onClick={() => setScreen('maze')} />
        <NavButton active={currentScreen === 'prepositions'} icon={<Gamepad2 className="w-5 h-5"/>} label="Խաղ" onClick={() => setScreen('prepositions')} />
      </div>
    </div>
  </nav>
);

const NavButton = ({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`p-2 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 transition-all ${
      active 
        ? 'bg-brand-blue text-white shadow-md' 
        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
    }`}
  >
    {icon}
    <span className="hidden md:block font-bold text-[10px] uppercase tracking-widest">{label}</span>
  </button>
);

function MenuCard({ icon, title, description, color, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="group bg-white p-8 rounded-[40px] shadow-sm border-2 border-slate-100 flex items-start gap-6 text-left transition-all hover:scale-[1.02] hover:shadow-xl hover:border-brand-blue"
    >
      <div className={`w-20 h-20 shrink-0 rounded-[24px] ${color} flex items-center justify-center text-white shadow-lg`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-2 group-hover:text-brand-blue">{title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-brand-blue group-hover:text-white transition-colors self-center">
        <ArrowRight className="w-6 h-6" />
      </div>
    </button>
  );
}

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="flex flex-col items-center gap-12 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-black text-slate-800 tracking-tighter uppercase italic leading-none">
          ԻՍՊԱՆԵՐԵՆԻ <span className="text-brand-blue">ԱՐԿԱԾ</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-[0.2em]">
          ՍՈՎՈՐԻՐ ՆԱԽԴԻՐՆԵՐԸ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
        <MenuCard 
          icon={<BookOpen className="w-10 h-10" />}
          title="Տեսություն"
          description="Սովորիր EN, DE և A նախդիրների կանոնները"
          color="bg-blue-500"
          onClick={() => setScreen('theory')}
        />
        <MenuCard 
          icon={<Trophy className="w-10 h-10" />}
          title="15 Վարժություն"
          description="Ամրապնդիր գիտելիքներդ նկարներով"
          color="bg-emerald-500"
          onClick={() => setScreen('exercises')}
        />
        <MenuCard 
          icon={<Map className="w-10 h-10" />}
          title="Լաբիրինթոս"
          description="Գտիր ճիշտ ուղղությունը՝ Ձախ, Աջ, Առաջ, Հետ"
          color="bg-amber-500"
          onClick={() => setScreen('maze')}
        />
        <MenuCard 
          icon={<Gamepad2 className="w-10 h-10" />}
          title="Նախդիրների Խաղ"
          description="Արագ գուշակիր բաց թողնված նախդիրները"
          color="bg-indigo-500"
          onClick={() => setScreen('prepositions')}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12 font-sans overflow-x-hidden">
      <Navbar currentScreen={screen} setScreen={setScreen} />

      <main className="max-w-7xl mx-auto px-4 min-h-[80vh]">
        {screen === 'menu' && <MainMenu setScreen={setScreen} />}
        {screen === 'theory' && <TheoryView />}
        {screen === 'exercises' && <ExerciseView />}
        {screen === 'maze' && <MazeGame />}
        {screen === 'prepositions' && <PrepositionsChallenge />}
      </main>

      <footer className="mt-20 border-t border-slate-200 pt-12 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
               &copy; 2024 ԻՍՊԱՆԵՐԵՆԻ ԱԿԱԴԵՄԻԱ
            </p>
        </div>
      </footer>
    </div>
  );
}


