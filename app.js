let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function mostraTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
    //console.log("Mostra TExto");

}

function exibirMensagem() {
    mostraTextoNaTela("h1", "Jogo do número secreto!");
    mostraTextoNaTela("p", "Digite um valor entre 1 e 10");
    //console.log("Mostra exibir mensagem");
}

exibirMensagem();





function verificarChute(){
    let chute = document.querySelector("input").value;
    //console.log("verificar chute");

    if(chute == numeroSecreto){
        mostraTextoNaTela("h1", "Parabéns, você acertou!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}`;
        mostraTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if(chute > numeroSecreto){
            mostraTextoNaTela("p", "O número secreto é menor");
        }else{
            mostraTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }  
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}    
    



function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
    //console.log("limpar campo");
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagem();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    //console.log("reinicar jogo");
}

