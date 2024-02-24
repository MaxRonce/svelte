<script>
  let mainJson = {
    quizzes: [],
  };
  import quizData from "../../data/Quiz.json";

  mainJson.quizzes = quizData.quizzes;

  let showDownloadButton = false; // Controla la visibilidad del botón

  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      try {
        const newQuiz = await readFile(file);
        if (newQuiz) {
          mainJson.quizzes.push(newQuiz);
          console.log("update", mainJson);
          showDownloadButton = true; // Muestra el botón una vez cargado el archivo
        }
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(JSON.parse(reader.result));
      reader.onerror = () => reject(new Error("Error reading file"));
      reader.readAsText(file);
    });
  }
  function downloadUpdatedJson() {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(mainJson, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "quiz-updated.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
</script>

<main>
  <h1>Importer un questionnaire</h1>
  <p>Déposer un fichier JSON pour importer un questionnaire</p>
  <input type="file" accept=".json" on:change={handleFileUpload} />
  {#if showDownloadButton}
    <button on:click={downloadUpdatedJson}>Télécharger le fichier modifié</button>
  {/if}
</main>
