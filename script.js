function studyAI() {
  document.getElementById("output").innerHTML =
    "📚 Study AI: Ask questions and learn any subject step-by-step!";
}

function generateImage() {
  let prompt = document.getElementById("prompt").value;

  if (!prompt) {
    alert("Please enter an idea first!");
    return;
  }

  document.getElementById("output").innerHTML =
    "🎨 Generating image idea for: <b>" + prompt + "</b><br><br>" +
    "👉 Connect AI API (Hugging Face / OpenAI) for real images";

  // Placeholder image (until API is connected)
  document.getElementById("resultImage").src =
    "https://via.placeholder.com/600x300?text=AI+Image+Output";
}

function generateMovie() {
  let prompt = document.getElementById("prompt").value;

  if (!prompt) {
    alert("Please enter a movie idea!");
    return;
  }

  document.getElementById("output").innerHTML =
    "🎬 Cinematic Story for: <b>" + prompt + "</b><br><br>" +
    "Scene 1: Introduction<br>" +
    "Scene 2: Conflict begins<br>" +
    "Scene 3: Rising action<br>" +
    "Scene 4: Climax<br>" +
    "Scene 5: Ending resolution";
}