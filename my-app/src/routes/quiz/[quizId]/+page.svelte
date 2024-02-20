<script>
    import { page } from '$app/stores';
    import { currentQuiz, selectQuiz } from '../../../lib/QuizStore';
    import Quiz from '../../../components/Quiz.svelte';

    // Récupérer l'ID du quiz des paramètres de la page et sélectionner le quiz correspondant
    const quizId = $page.params.quizId;
    selectQuiz(quizId); // Cette fonction va mettre à jour le store `currentQuiz`
</script>

<h1>Quiz {quizId}</h1>
<Quiz />
