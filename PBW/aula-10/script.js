function exibirInformacoes() {
  let nome = document.getElementById("nome").value;
  let favorito = document.getElementById("favorito").value;
  let cor = document.getElementById("cor").value;

  if (nome === "" || favorito === "" || cor === "") {
    document.getElementById("informacoes").textContent =
      "Por favor, preencha todos os campos.";
    return;
  }

  let informacoes = `Nome: ${nome}, Filme Favorito: ${favorito}, Cor Favorita: ${cor}`;
  document.getElementById("informacoes").textContent = informacoes;
}
