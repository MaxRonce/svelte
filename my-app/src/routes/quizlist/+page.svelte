<script>
    import { quizzesStore } from '../../lib/QuizStore';
    import { goto } from '$app/navigation';
  </script>

<ul>
  {#each $quizzesStore as quiz, index}
    <li>
      {quiz.Title}
      <button on:click={() => goto(`/quiz/${index}`)}>Commencer ce quiz</button>
    </li>
  {/each}
</ul>
