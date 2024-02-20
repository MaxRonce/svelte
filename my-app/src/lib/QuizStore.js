import { writable, get } from 'svelte/store'; // Importer get
import quizData from '../data/Quiz.json'; // Assurez-vous que le chemin est correct

export const quizzesStore = writable(quizData.quizzes);
export const currentQuiz = writable(null);

export function selectQuiz(index) {
  const quizzes = get(quizzesStore);
  currentQuiz.set(quizzes[parseInt(index, 10)]); // Convertir l'index en un nombre
}
