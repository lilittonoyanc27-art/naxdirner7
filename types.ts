/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'theory' | 'exercises' | 'maze' | 'prepositions';

export interface TheoryPoint {
  title: string;
  explanation: string;
  example: string;
  translation: string;
}

export interface ExerciseEntry {
  id: number;
  armenian: string;
  spanish: string;
  imagePrompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface PrepositionQuestion {
  id: number;
  sentence: string; // "El gato está ___ la mesa"
  options: string[]; // ["en", "de", "a"]
  correctIndex: number;
}
