document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const usuarioInput = document.getElementById("usuario");
  const senhaInput = document.getElementById("senha");
  const mensagem = document.getElementById("mensagem");
  
  const erroUsuario = document.getElementById("erro-usuario");
  const erroSenha = document.getElementById("erro-senha");
  
  erroUsuario.textContent = '';
  erroSenha.textContent = '';
  mensagem.textContent = '';
  
  let valido = true;
  
  if (!usuarioInput.value.trim()) {
    erroUsuario.textContent = "Usuário é obrigatório";
    valido = false;
  }
  
  if (!senhaInput.value.trim()) {
    erroSenha.textContent = "Senha é obrigatória";
    valido = false;
  }
  
  if (!valido) return;
  
  const usuario = usuarioInput.value.trim();
  const senha = senhaInput.value.trim();
  
  const usuarioSalvo = localStorage.getItem("usuario");
  const senhaSalva = localStorage.getItem("senha");
  
  if (usuario === usuarioSalvo && senha === senhaSalva) {
    alert("Login bem-sucedido!");

  } else {
    mensagem.textContent = "Usuário ou senha incorretos.";
  }
});
  
