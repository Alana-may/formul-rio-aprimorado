
# 📘 Projeto: Formulário de Inscrição com Login

Este é um projeto de formulário de inscrição para um programa educacional fictício chamado **"Programa Trilhas"**, com funcionalidades completas de **cadastro de usuário**, **validação de campos**, **armazenamento em `localStorage`** e **tela de login**.

---

## 🚀 Como rodar o projeto localmente

1. **Baixe ou clone o repositório:**

```bash
git clone https://github.com/seu-usuario/formulario-trilhas.git
```

2. **Abra a pasta do projeto no seu editor de código.**

3. **Dê duplo clique no arquivo `inicial.html` para abrir a tela de login no navegador.**
   - Ou use o `index.html` para acessar diretamente o formulário de cadastro.

> 💡 O projeto **não precisa de servidor** — basta abrir os arquivos `.html` no navegador.

---

## 🛠 Tecnologias utilizadas

- **HTML5** — estrutura do conteúdo
- **CSS3** — estilização responsiva e visual moderno
- **JavaScript (ES6)** — validação, login e manipulação de dados
- **Web Storage API (`localStorage`)** — para salvar e autenticar os usuários
- **Google Fonts** — fonte Poppins para tipografia

---

## ⚙️ Principais funcionalidades

### ✅ Formulário de Inscrição (`index.html`)
- Campos obrigatórios: nome, nascimento, CPF, sexo, e-mail, telefone, endereço, trilha, ID e senha.
- Upload de arquivos (identidade e comprovante de residência).
- Validação de todos os campos, incluindo e-mail e aceite dos termos.
- Armazena o **ID e a senha no `localStorage`** ao final do cadastro.
- Redireciona automaticamente para a tela de login após o cadastro.

### ✅ Tela de Login (`inicial.html`)
- Campo de usuário e senha com validação.
- Verifica se os dados batem com os salvos no `localStorage`.
- Mostra mensagens de erro amigáveis caso os dados estejam incorretos ou ausentes.
- Botão “Cadastre-se” leva de volta ao formulário de inscrição.

---

## 📁 Estrutura dos Arquivos

```
📦 raiz/
├── index.html          # Formulário de inscrição
├── script.js           # Validação e armazenamento dos dados de cadastro
├── style.css           # Estilo do formulário de inscrição
├── inicial.html        # Tela de login
├── inicial.js          # Validação e autenticação de login
├── style2.css          # Estilo da tela de login
└── /img/               # Imagens usadas no projeto (upload, ícones, fundo)
```

---

## ✅ Melhorias futuras (sugestões)

- Criar um sistema de múltiplos usuários usando `localStorage` com objetos.
- Criar uma “área do usuário” após login.
- Adicionar validações de CPF e telefone mais completas.
- Implementar `sessionStorage` ou cookies para sessões temporárias.
