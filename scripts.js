let biaNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomico: " + biaNumber)
var guessInput = document.querySelector("#guessClient");
const guessMensage = document.querySelector("#guessMensage");
const guessTry = document.querySelector("#guessTry");
let guessCount = 0;

// var keepGuess = [];
// console.log("primeiro array " + keepGuess);

compararPalpite();

function testvar() {
    var guess = parseInt(guessInput.value);
    return guess;
}

function keepGuessTest() {
    var keepGuess = [];
    return keepGuess;
}

function mostrarPalpite(event) {
    if (event.keyCode === 13) {
        var guess2 = testvar();
        var keepGuess2 = keepGuessTest();
        // var guess = parseInt(guessInput.value);
        if (!isNaN(guess2) && guess2 >= 1 && guess2 <= 100) {
            keepGuess2.push(guess2);
            guessCount++;
            guessTry.textContent += guess2 + " ";
            if (guess2 === biaNumber) {
                compararPalpite();
                guessMensage.textContent = "Parabéns! Você acertou em " + guessCount + " tentativas.";
                console.log("arrayTotal: " + keepGuess2);
                guessInput.disabled = true;
            } else if (guess2 < biaNumber) {
                compararPalpite();
                guessMensage.textContent = "Seu palpite foi baixo. Tente novamente.";
            } else {
                compararPalpite();
                guessMensage.textContent = "Seu palpite foi alto. Tente novamente.";
            }
            guessInput.value = "";
            if (guessCount >= 5 && guess2 != biaNumber) {
                biaNumber = Math.floor(Math.random() * 100) + 1;
                console.log("randomico 2:" + " " + biaNumber);
                guessCount = 0;
                guessMensage.textContent = "Você tem direito a 5 tentivas. Jogue novamente!";
                guessTry.textContent = "";
                // guessTry.textContent = "";
                guessInput.disabled = false;
                console.log("arrayTotal: " + keepGuess2);
                keepGuess2.length = 0;
                // console.log("arrayZerado: " + keepGuess);

            }
        } else {
            alert("Por favor, digite um número inteiro entre 1 e 100.");
        }
    } return;
}

function compararPalpite() {
    var guess2 = testvar();
    keepGuessTest();
    console.log("guess na funcao compararPalpite: " + guess2)
    if (keepGuessTest().includes(guess2)) {
        alert("compararPaplpite: true");
        guessMensage.textContent = "Você já deu esse palpite!!";
        keepGuess2.pop();
        // guessCount--;
    }
}


//tentei usar as variaveis locais em outras funcoes, criando funcoes inicializando essas variaveis(guess e keepGues), portanto, aparentemente, somente uma delas parece funcionar(guess), já o keepGuess parece só preencher o array com o ´guess´ atual. Complicado, acho que vou surtar nesse carai pois certamente é problema de SINTAX E EU NAO SEI RESOLVER ESSE CARAI.

//também tem outra duvida, não sei bem onde chamar a funcao de compararPalpite, na minha cabeça era só chamar após os parametros dos if e elses do jogo e estava tudo resolvido, mas pelo jeito não. por isso, sai chamando a funçao em varios pontos do código.

//Além desses problemas, tem outro (pra variar), não consigo resetar o jogo, logo, espero que o usuário saiba que exista o F5, pois nao vou ajeitar isso agora.


// function resetBia(){
//     biaNumber = Math.floor(Math.random() * 100) + 1;
//     guessCount = 0;
//     guessMensage.textContent = "Você tem direito a 5 tentivas. Jogue novamente!";
//     guessTry.textContent = "";
//     guessTry.textContent = "";
//     guessInput.disabled = false;
// }