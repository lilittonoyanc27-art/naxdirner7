import { TheoryPoint, ExerciseEntry, PrepositionQuestion } from './types';

export const THEORY_POINTS: TheoryPoint[] = [
  {
    title: "EN (Մեջ, Վրա)",
    explanation: "Օգտագործվում է տեղանքի կամ դիրքի համար:",
    example: "El libro está en la mesa.",
    translation: "Գիրքը սեղանի վրա է:"
  },
  {
    title: "DE (Ից, -ի)",
    explanation: "Ցույց է տալիս պատկանելություն կամ ծագում:",
    example: "Soy de Armenia.",
    translation: "Ես Հայաստանից եմ:"
  },
  {
    title: "A (Դեպի, -ին)",
    explanation: "Ցույց է տալիս ուղղություն կամ ժամանակ:",
    example: "Voy a la escuela.",
    translation: "Ես գնում եմ դպրոց:"
  },
  {
    title: "Atrás vs Detrás",
    explanation: "Detrás-ը օգտագործվում է դիրքի համար (ինչ-որ բանի հետևում), իսկ Atrás-ը՝ շարժման (դեպի հետ):",
    example: "Él está detrás de la puerta. / Mira atrás.",
    translation: "Նա դռան հետևում է: / Նայիր հետ:"
  }
];

export const EXERCISES: ExerciseEntry[] = [
  {
    id: 1,
    armenian: "Կատուն տուփի մեջ է:",
    spanish: "El gato está ___ la caja.",
    imagePrompt: "cute cartoon orange cat sitting inside a cardboard box, flat vector illustration, pastel colors, white background",
    options: ["en", "de", "a"],
    correctAnswer: "en",
    explanation: "Կատուն տուփի ՄԵՋ է:"
  },
  {
    id: 2,
    armenian: "Աղջիկը գնում է դեպի լողափ:",
    spanish: "Ella va ___ la playa.",
    imagePrompt: "cute cartoon girl walking towards a sunny beach with a palm tree, flat vector illustration, simple shapes, white background",
    options: ["en", "de", "a"],
    correctAnswer: "a",
    explanation: "Նա գնում է ԴԵՊԻ լողափ:"
  },
  {
    id: 3,
    armenian: "Այս սուրճը Կոլումբիայից է:",
    spanish: "Este café es ___ Colombia.",
    imagePrompt: "cute cartoon coffee cup with a steaming aroma and a small flag of Colombia, flat vector illustration, cheerful colors",
    options: ["en", "de", "a"],
    correctAnswer: "de",
    explanation: "Սուրճը Կոլումբիայից է (ծագում):"
  },
  {
    id: 4,
    armenian: "Գնացքը գնում է դեպի Մադրիդ:",
    spanish: "El tren va ___ Madrid.",
    imagePrompt: "cute toy-like modern train moving along tracks, flat vector illustration, bright colors, minimalist style",
    options: ["en", "de", "a"],
    correctAnswer: "a",
    explanation: "Ուղղություն դեպի Մադրիդ:"
  },
  {
    id: 5,
    armenian: "Խնձորը սեղանի վրա է:",
    spanish: "La manzana está ___ la mesa.",
    imagePrompt: "cute red apple with a smiley face on a wooden table, flat vector illustration, simple and clean",
    options: ["en", "de", "a"],
    correctAnswer: "en",
    explanation: "Խնձորը սեղանի ՎՐԱ է:"
  },
  {
    id: 6,
    armenian: "Սա իմ եղբոր գիրքն է:",
    spanish: "Es el libro ___ mi hermano.",
    imagePrompt: "cute stack of colorful cartoon books with a bookworm, flat vector illustration, friendly style",
    options: ["en", "de", "a"],
    correctAnswer: "de",
    explanation: "Պատկանելություն (Եղբոր գիրքը):"
  },
  {
    id: 7,
    armenian: "Մենք այգում ենք:",
    spanish: "Estamos ___ el parque.",
    imagePrompt: "cartoon illustration of a cozy city park with a bench and a fountain, flat vector style, vibrant green colors",
    options: ["en", "de", "a"],
    correctAnswer: "en",
    explanation: "Մենք այգում ենք (դիրք):"
  },
  {
    id: 8,
    armenian: "Դասը սկսվում է ժամը 8-ին:",
    spanish: "La clase empieza ___ las ocho.",
    imagePrompt: "cute wall clock showing 8 o'clock in a friendly cartoon classroom, flat vector illustration",
    options: ["en", "de", "a"],
    correctAnswer: "a",
    explanation: "Ժամանակի նշում (8-ին):"
  },
  {
    id: 9,
    armenian: "Այս նվերը քեզ համար է:",
    spanish: "Este regalo es ___ ti.",
    imagePrompt: "cute gift box with a big yellow bow, flat vector illustration, colorful and happy",
    options: ["en", "de", "a"],
    correctAnswer: "de",
    explanation: "Նվերի ծագում կամ պատկանելություն:"
  },
  {
    id: 10,
    armenian: "Հեռախոսը իմ պայուսակի մեջ է:",
    spanish: "El teléfono está ___ mi bolso.",
    imagePrompt: "cute cartoon smartphone inside a colorful handbag, flat vector illustration, simple design",
    options: ["en", "de", "a"],
    correctAnswer: "en",
    explanation: "Հեռախոսը պայուսակի մեջ է:"
  },
  {
    id: 11,
    armenian: "Ուղևորություն դեպի Իսպանիա:",
    spanish: "Un viaje ___ España.",
    imagePrompt: "cute cartoon airplane flying over a map with a sun, flat vector illustration, adventure theme",
    options: ["en", "de", "a"],
    correctAnswer: "a",
    explanation: "Ճանապարհորդություն դեպի Իսպանիա:"
  },
  {
    id: 12,
    armenian: "Պանիրը Ֆրանսիայից է:",
    spanish: "El queso es ___ Francia.",
    imagePrompt: "cute piece of cheese with holes and a small French flag, flat vector illustration, appetizing colors",
    options: ["en", "de", "a"],
    correctAnswer: "de",
    explanation: "Պանիրը Ֆրանսիայից է:"
  },
  {
    id: 13,
    armenian: "Գարեջուրը սառնարանում է:",
    spanish: "La cerveza está ___ la nevera.",
    imagePrompt: "cute cartoon refrigerator with a cold drink inside, flat vector illustration, kitchen theme",
    options: ["en", "de", "a"],
    correctAnswer: "en",
    explanation: "Գարեջուրը սառնարանում է:"
  },
  {
    id: 14,
    armenian: "Գնալ ոտքով:",
    spanish: "Ir ___ pie.",
    imagePrompt: "cartoon pair of walking shoes on a path, flat vector illustration, dynamic and simple",
    options: ["en", "de", "a"],
    correctAnswer: "a",
    explanation: "Ոտքով գնալ (դարձվածք):"
  },
  {
    id: 15,
    armenian: "Սա ուսուցչի տունն է:",
    spanish: "Es la casa ___ profesor.",
    imagePrompt: "cute cartoon house with a red roof and a friendly garden, flat vector illustration, cozy home",
    options: ["en", "de", "a"],
    correctAnswer: "de",
    explanation: "Տան պատկանելությունը:"
  }
];

export const PREP_QUESTIONS: PrepositionQuestion[] = [
  { id: 1, sentence: "Vivo ___ Ereván.", options: ["en", "de", "a"], correctIndex: 0 },
  { id: 2, sentence: "Vengo ___ Armenia.", options: ["en", "de", "a"], correctIndex: 1 },
  { id: 3, sentence: "Voy ___ casa.", options: ["en", "de", "a"], correctIndex: 2 }
];
