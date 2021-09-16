const nameUser = document.getElementById('nome-usuario');
const emailUser = document.getElementById('email-usuario')
const locationUser = document.getElementById('unidade-usuario')
const saudacao = document.getElementById('saudacao');

const sair = document.getElementById('link-sair');


nameUser.innerHTML = localStorage.getItem('name_user');
saudacao.innerHTML = `olá, ${localStorage.getItem('name_user')}`;
emailUser.innerHTML = localStorage.getItem('email_user');
locationUser.innerHTML = localStorage.getItem('location_user');
        sairMenu.onclick = () =>{
            localStorage.removeItem('id_user')
            localStorage.removeItem('name_user')
            localStorage.removeItem('email_user')
            localStorage.removeItem('location_user')
        }
sair.onclick = () =>{
    localStorage.removeItem('id_user')
    localStorage.removeItem('name_user')
    localStorage.removeItem('email_user')
    localStorage.removeItem('location_user')
}