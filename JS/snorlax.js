function snorlax() {
  exibirBio('snorlax')
}

function iniciarSnorlax() {
  const respostas = document.querySelector("#respostas");
  respostas.innerHTML = "";
  let pergunta1 = {
    pergunta: "Seus amigos te chamaram para acampar, mas você está com sono e com fome. O que você faz? \n Tiro uma soneca antes de ir para o role \n Faço um lanche e vou para o role \n Saio imediatamente para o role",
    opcoes: [
      "tiro uma soneca antes de ir para o role",
      "faço um lanche e vou para o role",
      "saio imediatamente para o role"
    ],
    resposta: null,
    respondeu: false
  };
  const resposta1 = perguntar(pergunta1)
  // se a resposta da pergunta1 for a primeira opção disponível
  if (resposta1 === pergunta1.opcoes[0]) {
    gameOver("Game over! Você só acordou horas depois e perdeu o role")
  } else if (resposta1 === pergunta1.opcoes[1]) {
    let pergunta2 = {
      pergunta: "Você está no carro de carona indo para o acampamento, o que você faz? \n Fico acordado \n Tiro uma soneca",
      opcoes: ["fico acordado", "tiro uma soneca"],
      resposta: null,
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);
    if (resposta2 === "fico acordado") {
      gameOver("Game Over! Você caiu no sono ao chegar no acampamento e perdeu o role");
    } else if (resposta2 === "tiro uma soneca") {
      let pergunta3 = {
        pergunta: "Oh não, parece que os seus amigos esqueceram de levar colchões, e agora? \n Deixar todos dormirem em você \n Ir para casa",
        opcoes: ["deixar todos dormirem em você", "ir para casa"],
        resposta: null,
        respondeu: false
      };
      const resposta3 = perguntar(pergunta3);
      if (resposta3 === "deixar todos dormirem em você") {
        gameOver("Deu boa! Seus amigos dormiram confortavelmente em você");
      }
    }
  } else if (resposta1 === pergunta1.opcoes[2])  {
    gameOver("Game over! Ainda com fome e sono, você comeu a comida de todos e acabou dormindo.");
  }
}