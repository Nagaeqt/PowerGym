const API_URL = "http://localhost:3000";

function salvarToken(token) {
  localStorage.setItem("token", token);
}

function pegarToken() {
  return localStorage.getItem("token");
}

function removerToken() {
  localStorage.removeItem("token");
}

function salvarUsuario(usuario) {
  localStorage.setItem("usuarioNome", usuario.nome);
  localStorage.setItem("usuarioEmail", usuario.email);
}

function pegarUsuarioNome() {
  return localStorage.getItem("usuarioNome");
}

function redirecionarSeNaoLogado() {
  const token = pegarToken();

  if (!token) {
    window.location.href = "index.html";
  }
}