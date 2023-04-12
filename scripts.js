let biaNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomico: " + biaNumber)
const guessInput = document.querySelector("#guessClient");
const guessMensage = document.querySelector("#guessMensage");
const guessTry = document.querySelector("#guessTry");
let guessCount = 0;

function mostrarPalpite(event) {
  if (event.keyCode === 13) {
    const guess = parseInt(guessInput.value);
    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      guessCount++;
      guessTry.textContent += guess + " ";
      if (guess === biaNumber) {
        guessMensage.textContent = "Parabéns! Você acertou em " + guessCount + " tentativas.";
        guessInput.disabled = true;
      } else if (guess < biaNumber) {
        guessMensage.textContent = "Seu palpite foi baixo. Tente novamente.";
      } else {
        guessMensage.textContent = "Seu palpite foi alto. Tente novamente.";
      }
      guessInput.value = "";
      if(guessCount >= 3 && guess != biaNumber){
          biaNumber = Math.floor(Math.random() * 100) + 1;
          console.log("randomico 2:" + " " + biaNumber);
          guessCount = 0;
          guessMensage.textContent = "Você tem direito a 10 tentivas. Jogue novamente!";
          guessTry.textContent = "";
          guessTry.textContent = "";
          guessInput.disabled = false;
      }
    } else {
      alert("Por favor, digite um número inteiro entre 1 e 100.");
    }
  }return;
}
