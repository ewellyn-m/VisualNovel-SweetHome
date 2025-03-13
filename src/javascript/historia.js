//audio
function iniciarAudio() {
    var audio = document.getElementById('background-music');
    var audioIcon = document.querySelector('.audio-icon');
    var volumeControl = document.querySelector('.volume-control');
    var volumeSlider = document.getElementById('volume');

    if (!audio) {
        console.error("Elemento de áudio não encontrado!");
        return;
    }

    // Alternar entre tocar e pausar o áudio
    if (audio.paused) {
        audio.play().then(() => {
            audio.volume = parseFloat(volumeSlider.value); // Define o volume inicial conforme o slider
            volumeControl.style.display = 'block'; // Exibe o controle de volume
            audioIcon.classList.remove('fa-music');
            audioIcon.classList.add('fa-volume-up');
        }).catch(error => {
            console.error("Erro ao reproduzir o áudio:", error);
        });
    } else {
        audio.play();
        volumeControl.style.display = 'none'; // Esconde o controle de volume ao pausar
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-music');
    }
}

function ajustarVolume(slider) {
    var audio = document.getElementById('background-music');
    audio.volume = parseFloat(slider.value);
}

//historia
class Personagem {
constructor() {}

// Função para mostrar o diálogo com o nome correto
falar(nome, texto) {
const dialogBox = document.getElementById('dialog-box');
const personagemImagem = document.getElementById('personagem-imagem');

dialogBox.innerHTML = `<p><strong>${nome}:</strong> ${texto}</p>`;
dialogBox.style.display = 'flex';  // Exibe o diálogo

// Atualiza a imagem do personagem conforme o nome
this.atualizarImagem(nome);

// Exibe a imagem do personagem quando o diálogo aparece
personagemImagem.style.display = 'flex';
}

// Função para atualizar a imagem do personagem conforme o nome
atualizarImagem(nome) {
const personagemImagem = document.getElementById('personagem-imagem');

switch (nome) {
  case "Vi":
      personagemImagem.src = "../imagens/vi.png"; // Substitua com o caminho correto da imagem de Vi
      break;
  case "Professor Boris":
      personagemImagem.src = "../imagens/boris.png"; // Substitua com o caminho correto da imagem do Professor Boris
      break;
  case "Viktor":
      personagemImagem.src = "../imagens/viktor.png"; // Substitua com o caminho correto da imagem de Viktor
      break;
  case "Ivan":
      personagemImagem.src = "../imagens/ivan.png"; // Substitua com o caminho correto da imagem de Ivan
      break;
  case "Sion":
        personagemImagem.src = "../imagens/sion.png"; // Substitua com o caminho correto da imagem de Ivan
        break;
  case "Kira":
      personagemImagem.src = "../imagens/kira.png"; // Substitua com o caminho correto da imagem de kira
      break;
  default:
      personagemImagem.src = "../imagens/personagem_default.png"; // Substitua com uma imagem padrão ou deixe em branco
      break;
}
}


// Função para mostrar opções de escolha
mostrarOpcoes(opcoes) {
const choicesDiv = document.getElementById("choices");
choicesDiv.innerHTML = "";
opcoes.forEach(choice => {
  const button = document.createElement("button");
  button.innerText = choice.text;
  button.onclick = () => showScene(choice.next);
  choicesDiv.appendChild(button);
});
}

// Função para ocultar a imagem do personagem
ocultarImagem() {
document.getElementById('personagem-imagem').style.display = 'none';
}

// Função para ocultar o diálogo
ocultarDialogo() {
document.getElementById('dialog-box').style.display = 'none';
// Oculta a imagem do personagem quando o diálogo desaparecer
document.getElementById('personagem-imagem').style.display = 'none';
}
}


const outroPersonagem = new Personagem();

const story = {
start: {
choices: [
{ text: "(Mais um dia na Academia Saint Helena. A mesma rotina, as mesmas pessoas, os mesmos dramas que se repetem como um seriado de TV que ninguém aguenta mais, mas todo mundo assiste.)", next: "continua" },
]
},

continua: {
choices: [
{ text: "(Estou na minha mesa, rabiscando distraidamente no caderno enquanto Vi, minha melhor amiga, fala animadamente ao meu lado.)", next: "continua1" },
]
},

continua1: {
nome: "Vi", 
dialogbox: "Ei, você ouviu o que a Kira postou no blog dela hoje? Parece que Sion terminou com mais uma garota essa semana.",
choices: [
{ text: "A. Nossa, que novidade. O próximo grande escândalo vai ser o sol nascendo amanhã.", next: "continua2" },
]
},

continua2: {
nome: "Vi", 
dialogbox: "haha. Ah, vai, não finge que não gosta de fofoca. Todo mundo gosta.",
choices: [
{ text: "A. Não gosto, só escuto porque você para de falar", next: "continua3" },
]
},

continua3: {
choices: [
{ text: "(Ela finge estar ofendida, mas logo sorri. Apesar do que digo, gosto dessa parte do dia. Vi sempre consegue deixar as coisas mais divertidas, mesmo nesse lugar cheio de gente que se acha a última bolacha do pacote.)", next: "continua4" },
]
},

continua4: {
choices: [
{ text: "(Olho ao redor da sala. Kiwan está concentrado nos livros como se o mundo lá fora não existisse. Ivan está largado na cadeira, girando uma caneta entre os dedos com aquela expressão de quem não liga para nada. Viktor e Nasus conversam em voz baixa, provavelmente julgando alguém como sempre fazem.)", next: "continua5" },
]
},

continua5: {
choices: [
{ text: "(Kira está no celular, provavelmente postando mais alguma fofoca. Sion está perto da janela, mexendo no cabelo como se fosse a coisa mais importante do mundo.)", next: "continua6" },
]
},

continua6: {
choices: [
{ text: "(O sinal para o fim da aula deveria ter tocado. Mas não tocou.)", next: "continua7" },
]
},

continua7: {
choices: [
{ text: "(Franzo a testa. Não sou a única que percebe. Vi também olha para o relógio e depois para mim.)_", next: "continua8" },
]
},

continua8: {
nome: "Vi", 
dialogbox: "Ei, não era para a aula ter acabado?",
choices: [
{ text: "(Senhor Boris também parece confuso. Ele tamborila os dedos na mesa e suspira)", next: "continua9" },
]
},


continua9: {
nome: "Professor Boris", 
dialogbox: "Estranho... Bom, vou perguntar na administração. Esperem aqui.",
choices: [
{ text: "(O Professor Boris é um dos poucos professores que realmente se importam. Sempre calmo e paciente, ele ajuda sem precisar que peçam, diferente dos outros. Não impõe respeito pelo medo, mas pelo jeito justo de tratar os alunos. Se há um adulto confiável aqui, talvez seja ele.)", next: "continua10" },
]
},

continua10: {
choices: [
{ text: "A. Que esquisito (murmuro apoiando a mão no queixo.)", next: "continua11" },
]
},

continua11: {
nome: "Vi", 
dialogbox: "Você acha que aconteceu alguma coisa?",
choices: [
{ text: "A. Acho que nao. Talvez o sinal tenha dado algum tipo de defeito", next: "continua12" },
]
},

continua12: {
choices: [
{ text: "(Os minutos passam. Nenhum sinal do professor. A luz pisca. O projetor desliga.)", next: "continua13" },
]
},

continua13: {
nome: "Kira", 
dialogbox: "Que droga! Meu blog! Não consigo acessar a internet",
choices: [
{ text: "(proximo)", next: "continua14" },
]
},

continua14: {
nome: "Ivan", 
dialogbox: "Relaxa, deve ser só uma queda temporária. Nao precisa fazer escandalo",
choices: [
{ text: "(proximo)", next: "continua15" },
]
},

continua15: {
choices: [
{ text: "(Mais um tempo se passou e nenhum sinal do professor. Decimos sair da sala para ver o que esta acontecendo.)", next: "continua16" },
]
},

continua16: {
choices: [
{ text: "(O corredor parece diferente, as luzes tremulando criam sombras inquietantes. Nenhum professor por perto. Nenhuma resposta.)", next: "continua17" },
]
},

continua17: {
nome: "Viktor", 
dialogbox: "Isso não faz sentido. Vamos até a entrada.",
choices: [
{ text: "(proximo)", next: "continua18" },
]
},

continua18: {
choices: [
{ text: "(A tensão aumenta. Os portões estão trancados por dentro. Meu coração acelera. Ninguém atende nossos chamados.)", next: "continua19" },
]
},

continua19: {
nome: "Sion", 
dialogbox: "Não pode ser só um erro. Algo está muito errado...",
choices: [
{ text: "(Tentamos abrir os portoes, mas foi inutil. Estamos presos)", next: "escolha" },
]
},



escolha: {
choices: [
{ text: "Seguir Viktor e os populares, que tentam encontrar outra saída.", next: "Viktor" },
{ text: "Ficar com Vi, observando a reação dos outros alunos antes de agir.", next: "Vi" },
{ text: "Procurar Ivan, para ver se ele tem alguma ideia do que está acontecendo.", next: "Ivan" },
]
},

Viktor: {
choices: [
{ text: "(Eu suspiro e decido seguir Viktor e seu grupo. Ele pode ser insuportável, mas seu dinheiro e influência fazem com que ele ache que sempre tem uma solução para tudo.)", next: "Viktor1" }
]
},

Viktor1: {
    choices: [
    { text: "(Se alguém conseguir uma saída, provavelmente será ele.)", next: "Viktor2" }
    ]
    },
 Viktor2: {
    choices: [
    { text: "(Nasus caminha ao lado dele, completamente alheio à tensão ao redor. Iris segue logo atrás, tentando se manter perto de Kiwan.)", next: "Viktor3" }
    ]
    },

    Viktor3: {
        nome: "Viktor", 
        dialogbox: "Vamos checar os fundos",
        choices: [
        { text: "(proximo)", next: "Viktor4" },
        ]
        },

    Viktor4: {
        choices: [
        { text: "(O caminho pelos corredores fica mais estranho. O silêncio é incômodo. Quando chegamos à saída de emergência, ela também está trancada)", next: "Viktor5" }
        ]
        },

    Viktor5: {
        nome: "Kiwan", 
        dialogbox: "Isso não faz sentido",
        choices: [
        { text: "(proximo)", next: "Viktor6" },
        ]
        },
    Viktor6: {
        nome: "", 
        dialogbox: "BAM!!",
        choices: [
        { text: "(proximo)", next: "Viktor7" },
        ]
        },
    Viktor7: {
        choices: [
        { text: "(Todos viram na direção do barulho. Foi do lado de fora. Um som seco, pesado, como se algo estivesse batendo contra o muro)", next: "Viktor8" }
        ]
        },
    Viktor8: {
        choices: [
        { text: "(Meus pelos arrepiam.) ", next: "Viktor9" }
         ]
        },
    Viktor9: {
        nome: "Iris", 
        dialogbox: "Isso... veio de fora?",
        choices: [
        { text: "(proximo)", next: "Viktor10" },
        ]
        },
    Viktor10: {
        choices: [
        { text: "(Viktor tenta esconder o nervosismo, mas vejo seu maxilar travado. Algo está errado. Muito errado.)", next: "Viktor11" }
        ]
        },
    Viktor11: {
        choices: [
        { text: "(De repente, ouvimos passos apressados no corredor.) ", next: "Viktor12" }
        ]
        },
    Viktor9: {
        nome: "", 
        dialogbox: "Ei! Venham para o portão, rápido!",
        choices: [
        { text: "(proximo)", next: "Viktor10" },
        ]
        },
        Viktor13: {
            choices: [
            { text: "(É a Vi. Ela parece assustada. Não penso duas vezes antes de correr com o grupo até lá.)", next: "escolha20" }
            ]
            },

Vi: {
choices: [
{ text: "(Decido ficar com Vi. Ela segura meu braço, seu aperto mais forte do que o normal.)", next: "Vi1" }
]
},

Vi1: {
    nome: "Vi", 
    dialogbox: "Isso tá muito estranho",
    choices: [
    { text: "(proximo)", next: "Vi2" },
    ]
    },
Vi2: {
    choices: [
    { text: "(Kira está surtando porque seu blog não carrega. Alguns alunos tentam ligar para os pais, mas nenhum telefone tem sinal)", next: "Vi3" }
    ]
    },
Vi3: {
    choices: [
     { text: "A. Não parece só uma falha no sistema", next: "Vi4" }
    ]
    },
Vi4: {
    choices: [
    { text: "(Vi assente, inquieta. Olho para a porta da sala dos professores. Algo dentro de mim diz que devíamos checar lá.)", next: "Vi5" }
    ]
    },
Vi5: {
    choices: [
    { text: "(Antes que eu possa falar, ouvimos um som seco e pesado vindo de fora. O tipo de som que faz seu corpo gelar sem motivo lógico.)", next: "Vi6" }
    ]
    },
Vi6: {
choices: [
    { text: "(Eu e Vi trocamos olhares.)", next: "Vi7" }
    ]
    },
Vi6: {
    choices: [
    { text: "A. Vem comigo", next: "Vi7" }
    ]
    },
Vi6: {
    choices: [
    { text: "(Quando chegamos ao portão, Viktor e os outros já estão lá. Todos parecem tensos. E então Ivan aparece)", next: "escolha20" }
    ]
    },

Ivan: {
choices: [
{ text: "(Eu olho para o lado e vejo Ivan, de braços cruzados, observando tudo sem expressão. Decido ir até ele.)", next: "Ivan1" }
]
},
Ivan1: {
    choices: [
    { text: "A. Você não parece muito preocupado *digo, tentando arrancar alguma reação*", next: "Ivan2" }
    ]
    },
Ivan2: {
        nome: "Ivan", 
        dialogbox: "*suspira* Me preocupar adianta alguma coisa?",
        choices: [
        { text: "(proximo)", next: "Ivan3" },
        ]
        },
Ivan3: {
    choices: [
    { text: "(Reviro os olhos.) A. Talvez te impeça de ser pego de surpresa.", next: "Ivan4" }
    ]
    },
Ivan4: {
     choices: [
    { text: "(Ele me encara por um momento e então se afasta da parede.)", next: "Ivan5" }
    ]
    },
Ivan5: {
    nome: "Ivan", 
    dialogbox: "Você sente isso?",
    choices: [
    { text: "A. Sentir o quê?", next: "Ivan6" },
    ]
    },
Ivan6: {
    nome: "Ivan", 
    dialogbox: "Tá quieto demais...",
    choices: [
    { text: "(proximo)", next: "Ivan7" },
    ]
    },
Ivan7: {
    choices: [
    { text: "(E então percebo. O burburinho da escola sumiu. Só sobrou o som abafado das nossas vozes e... algo mais.)", next: "Ivan8" }
    ]
    },
Ivan8: {
    choices: [
    { text: "(Um barulho estranho. Distante, do lado de fora. Um impacto seco, como algo caindo com força.)", next: "Ivan9" }
    ]
    },
Ivan9: {
    nome: "Ivan", 
    dialogbox: "Isso veio do lado de fora.",
    choices: [
    { text: "(proximo)", next: "Ivan10" },
    ]
    },
Ivan10: {
    choices: [
    { text: "(Minha boca fica seca.)", next: "Ivan11" }
    ]
    },
Ivan11: {
    choices: [
    { text: "(Sem pensar muito, corremos para os portões, onde Viktor e os outros já estão reunidos. Vi me vê e acena, aliviada.)", next: "Ivan12" }
    ]
    },
Ivan12: {
    choices: [
    { text: "A. Vocês ouviram isso?", next: "Ivan13" }
    ]
    },
Ivan13: {
    choices: [
    { text: "(Ninguém responde. Eles apenas olham para o lado de fora)", next: "escolha20" }
    ]
    },

escolha20: {
    choices: [
    { text: "(Todos agora estão no mesmo lugar. A tensão no ar é quase palpável.)", next: "escolha21" }
    ]
    },
escolha21: {
    choices: [
    { text: "(Lentamente, Kiwan e Sion forçam o portão até que ele se abre o suficiente para vermos lá fora.)", next: "escolha22" }
    ]
    },
escolha22: {
    choices: [
    { text: "(E então o silêncio se rompe.)", next: "escolha23" }
    ]
    },
escolha23: {
    choices: [
    { text: "A. A cidade... (não é mais a mesma)", next: "escolha24" }
    ]
    },
escolha24: {
    choices: [
    { text: "(Prédios em ruínas. Carros destruídos. Corpos espalhados no asfalto. O cheiro de queimado e sangue chega até nós, enjoativo. )", next: "escolha25" }
    ]
    },
escolha25: {
    choices: [
    { text: "(algo esta se movendo)", next: "escolha26" }
    ]
    },
escolha26: {
    choices: [
    { text: "(Uma figura alta e distorcida. Passos pesados ecoam na noite.)", next: "escolha27" }
    ]
    },
escolha27: {
    choices: [
    { text: "A. Eu não consigo respirar.", next: "escolha28" }
    ]
    },
escolha28: {
    choices: [
    { text: "(Vi agarra meu braço.)", next: "escolha29" }
    ]
    },
escolha29: {
        nome: "", 
        dialogbox: "AHHHHHHHHHH (alguem gritou)",
        choices: [
        { text: "(proximo)", next: "escolha30" },
        ]
        },
escolha30: {
    choices: [
    { text: "(antes que qualquer um de nós possa reagir, a criatura vira sua cabeça em nossa direção.)", next: "escolha31" }
    ]
    },
escolha31: {
    choices: [
    { text: "(Ela nos viu...)", next: "escolha32" }
    ]
    },
escolha32: {
    choices: [
    { text: "PROXIMO EPISODIO", next: "escolha33" }
    ]
    },

};

function showScene(sceneKey) {
const scene = story[sceneKey];
const gamerContainer = document.querySelector('.gamer-container');

// Se a cena for "continua16", muda o fundo
if (sceneKey === "continua16") {
console.log("Mudando fundo para o corredor...");
gamerContainer.style.backgroundImage = "url('../cenarios/corredor.jpg')"; // Caminho correto da imagem
gamerContainer.style.backgroundSize = "cover";
gamerContainer.style.backgroundPosition = "center";
}

if (sceneKey === "continua18") {
    console.log("Mudando fundo para o corredor...");
    gamerContainer.style.backgroundImage = "url('../cenarios/patio1.jpeg')"; // Caminho correto da imagem
    gamerContainer.style.backgroundSize = "cover";
    gamerContainer.style.backgroundPosition = "center";
    }

// Exibe o diálogo se houver
if (scene.dialogbox) {
outroPersonagem.falar(scene.nome, scene.dialogbox);
} else {
outroPersonagem.ocultarDialogo();
}

// Exibe as opções de escolha
outroPersonagem.mostrarOpcoes(scene.choices);
}


// Iniciar a visual novel
showScene("start");

