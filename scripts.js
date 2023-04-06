let numUsuario = document.getElementById("guessClient");
let tentativas = document.getElementById("guessTry")

numeroRandomico= Math.floor(Math.random() * 100) + 1;

function mostrarPalpite(event){
    // alert("voce apertou uma tecla");
    if(event.key === "Enter"){
        //Adicionando Palpites na tela
        if(numUsuario.value != ""){
            let tentativas = Array(10);
            tentativas.innerHTML += `<p>${numUsuario.value}</p>`;
            tentativas.value = "";

            //Guardando palpites em um Array
                for(let i = 0; i <= 9 ; i++){
                    tentativas.push(i);
                    console.log(tentativas);
                }
        }else{
            alert("digite um numero")
        }
    }
}

function checarPalpiteRepetido(vetorPalpites, tentativas){
    for (var i = 0; i < vetorPalpites.length; i++) {
        if (vetorPalpites[i] === tentativas) {
          alert("O número " + tentativas + "já existe no array.");
          break;
          console.log("vetorPalpites");
        }
      }
}

function bIA(numUsuario){
    
    if(tentativas <= 100){
        for(let i = 0; i <= 10; i++){
            if(numUsuario == numeroRandomico){
                checarPalpiteRepetido();
                mostrarPalpite();
                alert("Voce acertou")
                // telaVencedora();
            }else if(numUsuario >= numeroRandomico){
                checarPalpiteRepetido();
                mostrarPalpite();
                alert("o palpite é maior")
            }else if(numUsuario <= numeroRandomico){
                checarPalpiteRepetido();
                mostrarPalpite();
                alert("o palpite é menor")
            }else if(i = 10 && numUsuario != numeroRandomico){
                checarPalpiteRepetido();
                print ("Voce não conseguiu acertar, o numero era esse: " numeroRandomico);
                // telaPerdedora()
            }
        }
    }else{
        alert("numero invalido")
    }

}