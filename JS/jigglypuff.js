function jigglypuff() {
  exibirBio('jigglypuff')
}

function iniciarJigglypuff() {
  const respostas = document.querySelector("#respostas");
  respostas.innerHTML = "";
  let pergunta1 = {
    pergunta: "Seus amigos te chamaram para sair, para onde você quer ir? \n Paradoja \n Pista do gaucho",
    opcoes: ["paradoja", "pista do gaucho"],
    resposta: null,
    respondeu: false
  };
  const resposta1 = perguntar(pergunta1)
  // se a resposta da pergunta1 for a primeira opção disponível
  if (resposta1 === pergunta1.opcoes[0]) {
    let pergunta2 = {
      pergunta: "Você chegou ao Paradoja, onde quer ficar? \n Karaoke \n Frente do bar",
      opcoes: ["frente do bar", "karaoke"],
      resposta: null,
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);
    if (resposta2 === pergunta2.opcoes[0]) {
      gameOver("Game Over! Seus amigos não se divertiram muito.😞");
    } else if (resposta2 === pergunta2.opcoes[1]) {
      let pergunta3 = {
        pergunta: "Seus amigos te desafiaram a cantar uma música, e agora? \n Cantar \n Ir para outro role",
        opcoes: ["cantar", "ir para outro role"],
        resposta: null,
        respondeu: false
      };
      const resposta3 = perguntar(pergunta3);
      if (resposta3 === pergunta3.opcoes[0]) {
        gameOver("Game over! Você fez todos os seus amigos dormirem.😢");
      } else if (resposta3 === pergunta3.opcoes[1]) {
        iniciarJigglypuff()
      }
    }
  } else if (resposta1 === pergunta1.opcoes[1]) {
    let pergunta2 = {
      pergunta: "Você chegou na pista do gaúcho, o que gostaria de fazer com seus amigos? \n Ficar na calçada \n Andar de skate",
      opcoes: ["ficar na calçada", "andar de skate"],
      resposta: null,
      respondeu: false
    };
    const resposta2 = perguntar(pergunta2);

    if (resposta2 === pergunta2.opcoes[0]) {
      gameOver("Game over! Seus amigos não se divertiram muito.😢");
    } else if (resposta2 === pergunta2.opcoes[1]) {
      let pergunta3 = {
        pergunta: "Oh não, um de seus amigos caiu de skate e se machucou, e agora? \n Tentar fazer um curativo \n Ir para casa",
        opcoes: ["tentar fazer um curativo", "ir para casa"],
        resposta: null,
        respondeu: false
      };
      const resposta3 = perguntar(pergunta3);

      if (resposta3 === pergunta3.opcoes[0]) {
        gameOver("Parabéns! Com suas habilidades médicas você conseguiu fazer um curativo e o role continuou.😊");
      }
    }
  }
}
