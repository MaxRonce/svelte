<script>
    import { currentQuiz } from '../lib/QuizStore';
    import { goto } from '$app/navigation';
    
    let currentQuestionIndex = 0;
    let userResponses = [];
    let quizFinished = false;
    let score = 0;

    // Référence au quiz courant et à la question courante
    $: currentQuestion = $currentQuiz && $currentQuiz.questions ? $currentQuiz.questions[currentQuestionIndex] : null;
    $: nb_question = $currentQuiz ? $currentQuiz.nb_question : 0;

    function handleNext() {
        if (currentQuestionIndex < nb_question - 1) {
            currentQuestionIndex++;
        } else {
            // Logique de fin de quiz
            quizFinished = true;
            calculateScore();
        }
    }

    function handleResponse(response) {
        userResponses[currentQuestionIndex] = response;
        handleNext();
    }

    function calculateScore() {
        score = $currentQuiz.questions.reduce((acc, question, index) => {
            if (question.reponse.toString().toLowerCase() === userResponses[index].toString().toLowerCase()) {
                return acc + 1;
            }
            return acc;
        }, 0);
        console.log(`Score final: ${score}/${nb_question}`);
    }
</script>

{#if !quizFinished}
    {#if currentQuestion}
        <div>
            <p>{currentQuestion.question}</p>
            {#if currentQuestion.type === 'MCQ'}
                {#each currentQuestion.reponses as reponse}
                    <button on:click={() => handleResponse(reponse)}>{reponse}</button>
                {/each}
            {:else if currentQuestion.type === 'Boolean'}
                <button on:click={() => handleResponse('True')}>True</button>
                <button on:click={() => handleResponse('False')}>False</button>
            {:else}
                <input type="text" bind:value={userResponses[currentQuestionIndex]} />
                <button on:click={handleNext}>Suivant</button>
            {/if}
        </div>
    {/if}
{:else}
    <div>
        <p>Le quiz est terminé ! Votre score est de {score} sur {nb_question}.</p>

         <!-- Retry et retour a la liste buttons-->

        <button on:click={() => location.reload()}>Recommencer</button>

        <button on:click={() => goto('/quizlist')}>Retour à la liste</button>

        <!-- Afficher les réponses -->

        <ul>
            {#each $currentQuiz.questions as question, index}
                <li>
                    <p>{question.question}</p>
                    <p>Réponse correcte: {question.reponse}</p>
                    <p>Votre réponse: {userResponses[index]}</p>
                </li>
            {/each}
    </div>
{/if}


<style>
    button {
        padding: 10px 20px;
        margin: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007BFF;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }

    button:active {
        background-color: #004085;
    }

    input[type='text'] {
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    div {
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 10px;
        margin: 10px;
    }

    p {
        margin: 5px 0;
    }
</style>
