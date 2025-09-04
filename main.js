let cards = [
    {
        "nome": "Andressa Alves",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://example.com/andressa.jpg",
        "gols": 15,
        "assistencias": 10,
        "jogos": 28,
        "favorita": false
    },
    {
        "nome": "Dayana Rodríguez",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://example.com/dayana.jpg",
        "gols": 5,
        "assistencias": 12,
        "jogos": 30,
        "favorita": false
    },
    {
        "nome": "Mariza",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://example.com/mariza.jpg",
        "gols": 2,
        "assistencias": 1,
        "jogos": 32,
        "favorita": false
    },
    {
        "nome": "Thaís Regina",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://example.com/thais.jpg",
        "gols": 1,
        "assistencias": 2,
        "jogos": 25,
        "favorita": false
    },
    {
        "nome": "Letícia Teles",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://example.com/leticia.jpg",
        "gols": 0,
        "assistencias": 0,
        "jogos": 18,
        "favorita": false
    }
]

// Inicialização
window.onload = function() {
    displayCards();

    document.getElementById('cardForm').addEventListener('submit', addCard);
    document.getElementById('cardList').addEventListener('click', handleCardClick)
};

function handleCardClick(event){
    const clickedElement = event.target.closest("button");
    if (!clickedElement) return;

    const acao =clickedElement.dataset.action;
    const index = clickedElement.dataset.index;

    if (acao === 'edit'){
        editCard(index)
    }else if (acao === 'delete'){
        deleteCard(index)
    }
}

// Função para exibir os cards
function displayCards() {
    const cardList = document.getElementById('cardList');
    cardList.innerHTML = '';

    cards.forEach((pegaCard, index) => {
            const postCard = document.createElement('div');
            postCard.classList.add('card-post');

            postCard.innerHTML = `
                <h4>${pegaCard.nome}</h4>
                
                <div class="posicao-clube">
                <p><em>${pegaCard.posicao}</em></p>
                <hr></hr>
                <p><em>${pegaCard.clube}</em></p>
                </div>

                ${pegaCard.foto ? `<img class="imagem-jogadora" src="${pegaCard.foto}" alt="Imagem do post" style="max-width:150px;">` : ""}
                
                <div class="informacoes-jogos">
                <div class="informacao-gols">
                <p><em>Gols: ${pegaCard.gols}</em></p>
                <p><em>Assistencias: ${pegaCard.assistencias}</em></p></div>
                <hr></hr>
                <div class="informacao">
                <p><em>Jogos: ${pegaCard.jogos}</em></p>
                <p><em>Favorita?: ${pegaCard.favorita}</em></p></div>
                </div>

                <div class="btn-edicao">
                <button data-action="edit" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="delete" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                </div>`;

                cardList.append(postCard);
        });
}

// Função para adicionar um novo card
function addCard(event) {
    event.preventDefault();
    
    const postName = document.getElementById('postName').value; //mudar classe
    const postPosition = document.getElementById('postPosition').value
    const postClube = document.getElementById('postClube').value
    const postFoto = document.getElementById('postFoto').value
    const postGols = document.getElementById('postGols').value
    const postAssitencia = document.getElementById('postAssistencia').value
    const postJogos = document.getElementById('postJogos').value
    const postFavorita = document.getElementById('postFavorita').value


    const card = { 
        nome: postName,  // mudar o const
        posicao: postPosition, 
        clube: postClube, 
        foto: postFoto,
        gols: postGols,
        assistencias: postAssitencia,
        jogos: postJogos,
        favorita: postFavorita
    };
    
    cards.unshift(card);
    
    document.getElementById('cardForm').reset();
    
    displayCards();
}

// Função para editar um card
function editCard(index){
    const novoCard = cards[index];
    
    novoCard.nome = prompt("Nome: ", novoCard.nome) || novoCard.nome;
    novoCard.posicao = prompt("Posição: ", novoCard.posicao) || novoCard.posicao;
    novoCard.clube = prompt("Clube: ", novoCard.clube) || novoCard.clube;
    novoCard.foto = prompt("foto: ", novoCard.foto) || novoCard.foto;
    novoCard.gols = prompt("Gols: ", novoCard.gols) || novoCard.gols;
    novoCard.assistencias = prompt("Assistencias: ", novoCard.assistencias) || novoCard.assistencias;
    novoCard.jogos = prompt("Jogos: ", novoCard.jogos) || novoCard.jogos;
    displayCards();


}
// Função para deletar um card
function deleteCard(index){
    const confirmar = confirm("tem certeza que deseja apagar esse card? ")
    if(confirmar){
        cards.splice(index, 1);
        displayCards();
    }
}

