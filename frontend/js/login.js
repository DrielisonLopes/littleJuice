const email = document.getElementById('email');
const senha = document.getElementById('senha');
const formLogin = document.getElementById('form-login');

function loginUser(e){
    e.preventDefault();
    const infoUser = fetch(`http://127.0.0.1:3000/users/email`, {
        method: 'GET'
    }).then((response) =>{
        return response.json();
    })
    
    console.log(infoUser);
}

fetch(`http://127.0.0.1:3000/users/a@ab`, {
        method: 'GET'
    }).then((response) =>{
        console.log(response.json());
    })

formLogin.addEventListener('submit', loginUser)