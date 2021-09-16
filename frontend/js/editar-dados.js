const nameUser = document.getElementById('nome-usuario');
const saudacao = document.getElementById('saudacao');
nameUser.innerHTML = localStorage.getItem('name_user');
saudacao.innerHTML = `olá, ${localStorage.getItem('name_user')}`;