<script>
    import { quizzesStore } from '../../lib/QuizStore';
    import { goto } from '$app/navigation';
  </script>


<h1> Test quiz list</h1>

<ul>
    {#each $quizzesStore as quiz, index}
      <li>
        {quiz.Title}
        <button on:click={() => goto(`/quiz/${index}`)}>Commencer ce quiz</button>
      </li>
    {/each}
  </ul>
  

<style>
  ul {
    padding-left: 0; /* Enlève le padding par défaut pour les listes */
    list-style-type: none; /* Enlève les puces par défaut des éléments de liste */
  }

  li {
    margin-bottom: 15px; /* Ajoute un espace en bas de chaque élément de liste */
    padding: 10px; /* Ajoute du padding autour du contenu de chaque élément de liste */
    background-color: #f8f9fa; /* Couleur de fond pour chaque élément de liste pour les distinguer visuellement (optionnel) */
    border-radius: 5px; /* Coins arrondis pour les éléments de liste (optionnel) */
  }

  button {
    /* Styles pour les boutons ici, par exemple : */
    padding: 10px 20px;
    margin-top: 10px; /* Espace au-dessus des boutons */
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  h1 {
    margin-bottom: 20px; /* Espace en dessous du titre de la page */
  }
</style>

