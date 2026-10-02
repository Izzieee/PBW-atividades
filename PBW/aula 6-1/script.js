// ATIVIDADE: complete as funções marcadas com TODO.
// Dica: leia ATIVIDADE.md antes de começar.

const usuarios = [
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana@empresa.com",
    perfil: "Administrador",
    situacao: "ativo",
    cadastro: "12/08/2026",
  },
  {
    id: 2,
    nome: "Bruno Lima",
    email: "bruno@empresa.com",
    perfil: "Analista",
    situacao: "ativo",
    cadastro: "18/08/2026",
  },
  {
    id: 3,
    nome: "Carla Mendes",
    email: "carla@empresa.com",
    perfil: "Operador",
    situacao: "bloqueado",
    cadastro: "26/08/2026",
  },
  {
    id: 4,
    nome: "Diego Alves",
    email: "diego@empresa.com",
    perfil: "Analista",
    situacao: "ativo",
    cadastro: "02/09/2026",
  },
];

// TODO 1: selecione os elementos HTML que serão usados no sistema.
// Exemplos: document.querySelector('#login-form') e document.getElementById('login-email')
const loginForm = document.querySelector("#login-form");
const loginView = document.querySelector("#login-view");
const dashboardView = document.querySelector("#dashboard-view");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const loginMessage = document.querySelector("#login-message");

const userForm = document.querySelector("#user-form");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userRole = document.querySelector("#user-role");
const userPassword = document.querySelector("#user-password");
const userPasswordConfirm = document.querySelector("#user-password-confirm");
const formMessage = document.querySelector("#form-message");

const tableBody = document.querySelector("#users-table-body");
const searchInput = document.querySelector("#search-input");
const statusFilter = document.querySelector("#status-filter");
const roleFilter = document.querySelector("#role-filter");

const totalUsers = document.querySelector("#total-users");
const activeUsers = document.querySelector("#active-users");
const adminUsers = document.querySelector("#admin-users");
const resultCount = document.querySelector("#result-count");
const loggedUser = document.querySelector("#logged-user");

function mostrarMensagem(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = `message ${tipo}`;
}

// TODO 2: crie o evento de submit do login.
// Credenciais de teste: admin@empresa.com / 123456
function mostrarMensagem(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = `message ${tipo}`;
}

// TODO 3: crie o evento de submit do cadastro.
// Valide todos os campos antes de adicionar um novo objeto ao array usuarios.
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = loginEmail.value.trim();
  const senha = loginPassword.value;

  if (email === "" || senha === "") {
    mostrarMensagem(loginMessage, "Preencha o e-mail e a senha.", "error");
    return;
  }

  const credenciaisCorretas =
    email === "admin@empresa.com" && senha === "123456";

  if (!credenciaisCorretas) {
    mostrarMensagem(loginMessage, "E-mail ou senha inválidos.", "error");
    return;
  }

  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
  loggedUser.textContent = "Administrador";

  renderizarUsuarios(usuarios);
  atualizarIndicadores();
});

function renderizarUsuarios(lista) {
  resultCount.textContent = lista.length;

  if (lista.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="5">Nenhum usuário encontrado.</td></tr>';
    return;
  }

  tableBody.innerHTML = lista
    .map(function (usuario) {
      const situacao = usuario.situacao === "ativo" ? "Ativo" : "Bloqueado";
      const acao = usuario.situacao === "ativo" ? "Bloquear" : "Ativar";

      return `
      <tr>
        <td>${usuario.nome}<br><small>${usuario.email}</small></td>
        <td>${usuario.perfil}</td>
        <td><span class="badge ${usuario.situacao}">${situacao}</span></td>
        <td>${usuario.cadastro}</td>
        <td><button class="action-button" data-id="${usuario.id}">${acao}</button></td>
      </tr>
    `;
    })
    .join("");
}

function renderizarUsuarios(lista) {
  // TODO 4: percorra lista com forEach e monte as linhas da tabela.
  // Use data-id no botão para descobrir qual usuário foi clicado.
}

function atualizarIndicadores() {
  // TODO 5: atualize total, ativos e administradores.
}

function aplicarFiltros() {
  // TODO 6: filtre usuarios pelo texto, situação e perfil.
  // Depois chame renderizarUsuarios(listaFiltrada).
}

// TODO 7: adicione eventos aos campos de busca e aos selects de filtro.

// TODO 8: use delegação de eventos na tabela para ativar/bloquear usuários.

// Quando terminar as funções acima, remova o comentário destas linhas:
// renderizarUsuarios(usuarios);
// atualizarIndicadores();
