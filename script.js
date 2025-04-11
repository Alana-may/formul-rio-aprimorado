document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const campos = [
    { campo: 'nome', mensagem: 'Este campo é obrigatório' },
    { campo: 'nascimento', mensagem: 'Este campo é obrigatório' },
    { campo: 'cpf', mensagem: 'Este campo é obrigatório' },
    { campo: 'sexo', mensagem: 'Este campo é obrigatório' },
    { campo: 'email', mensagem: 'Insira um e-mail válido' },
    { campo: 'telefone', mensagem: 'Este campo é obrigatório' },
    { campo: 'cep', mensagem: 'Este campo é obrigatório' },
    { campo: 'rua', mensagem: 'Este campo é obrigatório' },
    { campo: 'numero', mensagem: 'Este campo é obrigatório' },
    { campo: 'cidade', mensagem: 'Este campo é obrigatório' },
    { campo: 'estado', mensagem: 'Este campo é obrigatório' },
    { campo: 'ID', mensagem: 'Insira um ID válido' },
    { campo: 'senha', mensagem: 'Insira uma senha válida' }
  ];
  
  let valido = true;
  
  campos.forEach(({ campo }) => {
    const input = document.getElementById(campo);
    const erro = document.getElementById(`erro-${campo}`);
    erro.textContent = '';
    erro.classList.remove('mostrar-erro');
    input.classList.remove('campo-invalido');
  });
  
  campos.forEach(({ campo, mensagem }) => {
    const input = document.getElementById(campo);
    const erro = document.getElementById(`erro-${campo}`);
  
    if (input.value.trim() === '' || (campo === 'sexo' && !input.value)) {
      erro.textContent = 'Este campo é obrigatório';
      erro.classList.add('mostrar-erro');
      input.classList.add('campo-invalido');
      valido = false;
    }
  
    if (campo === 'email' && input.value.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        erro.textContent = 'Insira um e-mail válido';
        erro.classList.add('mostrar-erro');
        input.classList.add('campo-invalido');
        valido = false;
      }
    }
  });
  
  const trilhas = document.querySelectorAll('input[name="trilha"]');
  const trilhaSelecionada = Array.from(trilhas).some(radio => radio.checked);
  const erroTrilha = document.getElementById('erro-trilha');
  erroTrilha.textContent = '';
  if (!trilhaSelecionada) {
    erroTrilha.textContent = 'Este campo é obrigatório';
    erroTrilha.classList.add('mostrar-erro');
    valido = false;
  }
  
  const termos = document.getElementById('termos');
  const erroTermos = document.getElementById('erro-termos');
  erroTermos.textContent = '';
  if (!termos.checked) {
    erroTermos.textContent = 'Você precisa aceitar os termos';
    erroTermos.classList.add('mostrar-erro');
    valido = false;
  }

  if (valido) {
    const id = document.getElementById('ID').value;
    const senha = document.getElementById('senha').value;
    
    localStorage.setItem("usuario", id);
    localStorage.setItem("senha", senha);
    
    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
    window.location.href = "/d3/login/inicial.html";
  }
    
});
