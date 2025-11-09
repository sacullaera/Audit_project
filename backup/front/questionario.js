// ========================= questionario.js =========================

// Lê o parâmetro ISO da URL
const params = new URLSearchParams(window.location.search);
const iso = params.get("iso");

const tituloISO = document.getElementById("tituloISO");
const descricaoISO = document.getElementById("descricaoISO");

// Define o título e descrição de acordo com o item escolhido
const infoISO = {
  "19249": {
    titulo: "Desenvolvimento Seguro — ISO 19249",
    desc: "Responda às questões sobre práticas seguras de desenvolvimento."
  },
  "27034": {
    titulo: "Gerenciamento de Segurança — ISO 27034",
    desc: "Forneça detalhes sobre o processo de segurança de aplicativos."
  },
  "27001": {
    titulo: "Guia de Certificação — ISO 27001",
    desc: "Anexe documentos e descreva as ações para certificação."
  }
};

// Configura o título e descrição dinâmicos
if (infoISO[iso]) {
  tituloISO.textContent = infoISO[iso].titulo;
  descricaoISO.textContent = infoISO[iso].desc;
} else {
  tituloISO.textContent = "Questionário ISO";
  descricaoISO.textContent = "Selecione uma norma válida.";
}

// Evento de envio do formulário
document.getElementById("formQuestionario").addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = document.getElementById("textoResposta").value.trim();
  const arquivos = Array.from(document.getElementById("arquivo").files).map(f => f.name);

  // Cria o objeto JSON
  const dados = {
    norma: iso,
    resposta: texto,
    anexos: arquivos,
    dataEnvio: new Date().toISOString()
  };

  // Simula envio (por enquanto, só exibe no console)
  console.log("Dados a enviar:", JSON.stringify(dados, null, 2));

  // Mostra mensagem de sucesso
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Formulário salvo com sucesso (JSON gerado no console).";
  resultado.style.display = "block";

  // Limpa o formulário
  e.target.reset();
});

// Botão "Voltar ao Painel"
document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
