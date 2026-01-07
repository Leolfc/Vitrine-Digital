const artesaos = [
  {
    id: 1,
    nome: "Dona Maria",
    categoria: "Artesanato",
    descricao: "Crochê e bordados feitos à mão com muito carinho.",
    imagem: "./assets/bordados.png",
    whatsapp: "5543999999999",
  },
  {
    id: 2,
    nome: "Sr. João",
    categoria: "Comida",
    descricao: "Queijos artesanais e doces caseiros da roça.",
    imagem: "./assets/queijosEDoces.png",
    whatsapp: "5543888888888",
  },
  {
    id: 3,
    nome: "Ateliê Criativo",
    categoria: "Artesanato",
    descricao: "Pinturas em madeira e decorações rústicas.",
    imagem: "./assets/atelie.png",
    whatsapp: "5543777777777",
  },
];

const container = document.getElementById("vitrine-container");

function renderizarArtesaos(lista) {
  container.innerHTML = "";

  lista.forEach((artesao) => {
    const card = document.createElement("div");
    card.className = "card";

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

function filtrar(categoria) {
  if (categoria === "todos") {
    renderizarArtesaos(artesaos);
  } else {
    const filtrados = artesaos.filter((a) => a.categoria === categoria);
    renderizarArtesaos(filtrados);
  }
}

renderizarArtesaos(artesaos);
