function pikachu() {
  exibirBio('pikachu')
}

function iniciarPikachu() {
  const respostas = document.querySelector("#respostas");
  respostas.innerHTML = "";
  let pergunta1 = {
    pergunta: "Seus amigos te chamaram para sair, para onde você quer ir? \n Paradoja \n VU Bar",
    opcoes: ["paradoja", "vu bar"],
    resposta: null,
    respondeu: false
  };
  const resposta1 = perguntar(pergunta1)
  // se a resposta da pergunta1 for a primeira opção disponível
  if (resposta1 === pergunta1.opcoes[0]) {
    let pergunta2 = {
      pergunta: "Você chegou ao Paradoja, onde quer ficar? \n Karaoke \n Frente do bar",
      opcoes: ["karaoke", "frente do bar"],
      resposta: null,
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);
    if (resposta2 === "frente do bar") {
      gameOver("Game Over! Seus amigos não se divertiram muito. 😢 Tente novamente.");
    } else if (resposta2 === "karaoke") {
      let pergunta3 = {
        pergunta: "Oh não, a luz acabou! E agora? \n Ir para casa \nTentar restaurar energia",
        opcoes: ["ir para casa", "tentar restaurar energia"],
        resposta: null,
        respondeu: false
      };
      const resposta3 = perguntar(pergunta3);
      if (resposta3 === "tentar restaurar energia") {
        gameOver("Parabéns! Você conseguiu restaurar a energia com a sua habilidade e salvou o role!😀")
      }
    }
  } else if (resposta1 === pergunta1.opcoes[1]) {
    let pergunta2 = {
      pergunta: "Oh não, o chão da balada está molhado, o que quer fazer? \n Ir dançar \n Ir para outro role \n Ir para casa",
      opcoes: ["ir dançar", "ir para outro role", "ir para casa"],
      resposta: null,
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);
    if (resposta2 === "ir dançar") {
      gameOver("Game over! Você eletrocutou todos, parece que o role deu ruim...😢");
    } else if (resposta2 === "ir para outro role") {
      iniciarPikachu()
    }
  }
}
