// Dados simulados dos artesãos (Isso simula um Banco de Dados)
const artesaos = [
    {
        id: 1,
        nome: "Dona Maria",
        categoria: "Artesanato",
        descricao: "Crochê e bordados feitos à mão com muito carinho.",
        imagem: "https://placehold.co/600x400/orange/white?text=Bordados", // Foto temporária
        whatsapp: "5543999999999"
    },
    {
        id: 2,
        nome: "Sr. João",
        categoria: "Comida",
        descricao: "Queijos artesanais e doces caseiros da roça.",
        imagem: "https://placehold.co/600x400/green/white?text=Queijos",
        whatsapp: "5543888888888"
    },
    {
        id: 3,
        nome: "Ateliê Criativo",
        categoria: "Artesanato",
        descricao: "Pinturas em madeira e decorações rústicas.",
        imagem: "https://placehold.co/600x400/brown/white?text=Madeira",
        whatsapp: "5543777777777"
    }
];

const container = document.getElementById('vitrine-container');

// Função para desenhar os cards na tela
function renderizarArtesaos(lista) {
    container.innerHTML = ''; // Limpa antes de renderizar

    lista.forEach(artesao => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Monta o HTML interno de cada card
        card.innerHTML = `
            <img src="${artesao.imagem}" alt="Foto do produto de ${artesao.nome}" class="card-img">
            <div class="card-info">
                <span class="card-categoria">${artesao.categoria}</span>
                <h3 class="card-nome">${artesao.nome}</h3>
                <p class="card-descricao">${artesao.descricao}</p>
            </div>
            <a href="https://wa.me/${artesao.whatsapp}" target="_blank" class="btn-contato">
                Falar no WhatsApp
            </a>
        `;
        
        container.appendChild(card);
    });
}

// Função de filtrar (bônus para impressionar o professor)
function filtrar(categoria) {
    if (categoria === 'todos') {
        renderizarArtesaos(artesaos);
    } else {
        const filtrados = artesaos.filter(a => a.categoria === categoria);
        renderizarArtesaos(filtrados);
    }
}

// Inicializa mostrando todos ao carregar a página
renderizarArtesaos(artesaos);