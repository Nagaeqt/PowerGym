async function carregarPerfil() {

  redirecionarSeNaoLogado();

  const token = pegarToken();

  const mensagem = document.getElementById("mensagem");
  const nomeUsuario = document.getElementById("nome-usuario");

  try {

    const resposta = await fetch(`${API_URL}/auth/perfil`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const dados = await resposta.json();

    if (!resposta.ok) {

      mensagem.textContent = dados.mensagem || "Sessão inválida.";

      removerToken();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);

      return;
    }

    nomeUsuario.textContent = pegarUsuarioNome() || "Usuário";

    mensagem.textContent = `Logado como: ${dados.usuario.email}`;

  } catch (erro) {

    mensagem.textContent = "Erro ao carregar dados do usuário.";

  }
}