const email = document.getElementById('email');
const senha = document.getElementById('senha');
const formLogin = document.getElementById('form-login');
let infoUser;

function loginUser(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:3000/users/email?email=${email.value}`, {
        method: 'GET',
    }).then((response) => {
        response.json().then(data => {
            infoUser = data;
        }).then(() => {
            if (infoUser.password != senha.value) {
                window.alert('Senha incorreta!');
            } else {
                localStorage.setItem("id_user", infoUser.id);
                window.location = '../pages/principal.html';
            }
        });
    })
}

formLogin.addEventListener('submit', loginUser);