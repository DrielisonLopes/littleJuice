const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");
const checkCadastrar = document.getElementById("btn-cadastrar")


const formCadastro = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const unidade = document.querySelector('input[name="location"]')
const senha = document.getElementById("senha");


formCadastro.addEventListener("submit", function(e) {    
    e.preventDefault()

    console.log(nome.value, email.value, unidade.value, senha.value);

    const user = {
        name: nome.value, 
        email: email.value, 
        location: unidade.value, 
        password: senha.value
    }
    console.log(user)
    console.log(typeof(user))
    fetch("http://127.0.0.1:3000/users", {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    if(inputConfirmarSenha.value != inputSenha.value){
        swal("🍊", "as senhas não correspondem")
    } else if(inputSenha.value == 0 || inputConfirmarSenha == 0) {
        swal("🍊", "não pode deixar os campos vazios")
    } else {
        swal("🍊 Little Juice!", "você vai receber um e-mail com um link de confirmação", "success");
    }

    //Requisição pro backend
    console.log(nome.value, email.value, unidade.value, senha.value);

    const user = {
        "name": nome.value, 
        "email": email.value, 
        "location": unidade.value, 
        "password": senha.value
    }
    console.log(user)
    console.log(typeof(user))
    fetch("http://127.0.0.1:3000/users", {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
})

// inputConfirmarCadastrar.oninput = checkSenha;