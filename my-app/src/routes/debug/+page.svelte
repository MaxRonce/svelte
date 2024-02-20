// routes/debug/+page.svelte

<script context="module">
    import { selectQuiz } from '../../lib/QuizStore';
  
    // Cette fonction est appelée avant le rendu du composant
    // et est utilisée ici pour sélectionner le premier quiz.
    export async function load() {
      selectQuiz(0); // Sélectionne toujours le quiz à l'index 0 (le premier quiz)
      return {};
    }
  </script>
  
  <script>
    // Importez le composant Quiz qui affichera le quiz.
    import Quiz from '../../components/Quiz.svelte';
  </script>
  
  <!-- Rendu du composant Quiz -->
  <Quiz />
  