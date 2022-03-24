function perguntar(questao) {
  // enquanto resposta não for uma das opções disponíveis 
  while (questao.opcoes.indexOf(questao.resposta?.toLowerCase()) === -1) {
  // se a pessoa respondeu fora das opções disponíveis  
    if (questao.respondeu) {
      alert(`A resposta "${questao.resposta}" está inválida`)
    }
  // questao.resposta recebe a resposta da questao.pergunta  
    questao.resposta = prompt(questao.pergunta)
  // se a resposta não estiver vazia  
    if (questao.resposta.length) {
      questao.respondeu = true;
      const respostas = document.querySelector("#respostas");
      respostas.innerHTML += `
        <li>
          <b>${questao.pergunta}</b><br/>
          ${questao.resposta}
        </li>
      `;
    }
  }
  if (questao.resposta?.toLowerCase() === "ir para casa") {
    gameOver("Game Over! O role acabou.😞");
  }
  return questao.resposta
}

function gameOver(mensagem) {
  const botaoVoltar = document.querySelector('#voltar');
  botaoVoltar.classList.remove('hide');
  alert(mensagem)
}

function escolherPersonagem() {
  let pergunta = {
    pergunta: "Escolha Jigglypuff, Snorlax ou Pikachu",
    opcoes: ["jigglypuff", "snorlax","pikachu"],
    resposta: null, 
    respondeu: false
  };
  const resposta = perguntar(pergunta)
  if (resposta === 'jigglypuff') {
    jigglypuff()
  } else if (resposta === 'snorlax') {
    snorlax()
  } else if (resposta === 'pikachu') {
    pikachu()
  } else {
    alert('Resposta inválida');
  }
}

function exibirBio(personagem) {
  const bio = document.querySelector(`.bio.${personagem}`);
  const selector = document.querySelector('.selecao-de-personagem');
  bio.classList.add('show');
  selector.classList.add('hide');
}