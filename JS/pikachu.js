function pikachu() {
  exibirBio('pikachu')
}

function iniciarPikachu() {
  let pergunta1 = {
    pergunta: "Seus amigos te chamaram para sair, para onde você iria? \n Paradoja \n VU Bar",
    opcoes: ["paradoja", "vu bar"],
    resposta: null, 
    respondeu: false
  };
  const resposta1 = perguntar(pergunta1)
// se a resposta da pergunta1 for a primeira opção disponível
  if (resposta1 === pergunta1.opcoes[0]) {
    let pergunta2 = {
      pergunta: "Você chegou ao Paradoja, para onde quer ir? \n Karaoke \n Frente do bar",
      opcoes: ["karaoke", "frente do bar"],
      resposta: null, 
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);
    if (resposta2 === "frente do bar") {
      gameOver("Game Over! A luz acabou e você teve que ir embora. Tente novamente.");
    } else if (resposta2 === "karaoke") {
      gameOver("Parabéns! Você conseguiu restaurar a energia com a sua habilidade, o role continua...")
    }
  } else if (resposta1 === pergunta1.opcoes[1]) {
    let pergunta2 = {
      pergunta: "Oh não, o chão da balada está molhado, o que quer fazer? \n Ir dançar \n Ir para outro role \n Ir para casa",
      opcoes: ["ir dançar", "ir para outro role","ir para casa"],
      resposta: null, 
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);
      
    if (resposta2 === "ir dançar") {
      gameOver("Game over! Você eletrocutou todos, parece que o role deu ruim...");
    } 
  }
}