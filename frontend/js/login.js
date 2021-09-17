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
            if (infoUser.password != senha.value || infoUser.email != email.value) {
                window.alert('Email ou senha incorreta!');
            } else {
                localStorage.setItem("id_user", infoUser.id);
                localStorage.setItem("name_user", infoUser.name);
                localStorage.setItem("email_user", infoUser.email);
                localStorage.setItem("location_user", infoUser.location);
                if(document.body.clientWidth < 768){
                    window.location = '../pages/principal.html';
                } else{
                    window.location = '../pages/agendamento.html'
                }
            }
        });
    })
}

formLogin.addEventListener('submit', loginUser);