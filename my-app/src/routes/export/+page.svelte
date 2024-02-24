<script>
  import quizData from "../../data/Quiz.json";

  let mainJson = quizData;
  let selectedQuizzes = Array(mainJson.quizzes.length).fill(false); 

  function toggleSelectAll() {
  const allSelected = selectedQuizzes.every(val => val);
  selectedQuizzes = selectedQuizzes.map(() => !allSelected);
}


function downloadSelectedQuizzes() {
  const isAnyQuizSelected = selectedQuizzes.some(selected => selected);

  if (!isAnyQuizSelected) {
    alert("Veuillez sélectionner au moins un questionnaire à télécharger.");
    return; 
  }

  const selectedData = {
    quizzes: mainJson.quizzes.filter((_, index) => selectedQuizzes[index]),
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedData, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "quizzes-selected.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click(); 
  downloadAnchorNode.remove(); 
}

</script>

<main>
  <h1>Exporter des questionnaires</h1>
  <button on:click={toggleSelectAll}>Sélectionner / désélectionner tout</button>
  {#each mainJson.quizzes as quiz, index}
    <div>
      <input type="checkbox" bind:checked={selectedQuizzes[index]} />
      {quiz.Title}
    </div>
  {/each}
  <button on:click={downloadSelectedQuizzes}>Télécharger sélectionnés</button>
</main>
