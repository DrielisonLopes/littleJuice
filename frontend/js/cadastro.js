const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");
const checkCadastrar = document.getElementById("btn-cadastrar")

const formCadastro = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const inputSaoPaulo = document.getElementById("sao-paulo");
const inputSantos = document.getElementById("santos");
const inputHomeOffice = document.getElementById("home-office");



formCadastro.addEventListener("submit", function(e) {    
    e.preventDefault()

    if (confirmarSenha.value != senha.value) {
        swal("🍊", "as senhas não correspondem")
        return;
    } else if (senha.value == 0 || confirmarSenha == 0) {
        swal("🍊", "não pode deixar os campos vazios")
        return;
    }
    
    let unidade;
    if (inputSaoPaulo.checked) {
        unidade = inputSaoPaulo.value;
    } else if (inputSantos.checked) {
        unidade = inputSantos.value;
    } else if (inputHomeOffice.checked) {
        unidade = inputHomeOffice.value;
    }

    const user = {
        name: nome.value, 
        email: email.value, 
        location: unidade, 
        password: senha.value
    }

    fetch("http://127.0.0.1:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response =>{
        if(!response.ok){
            response.text().then(text =>{
                swal("🍊 Ops!", "ocorreu um erro. Tente novamente!"); 
                formCadastro.reset();
            })
        }else{
            alert("🍊 Little Juice! \n Você vai receber um e-mail com um link de confirmação");
            window.location = '../pages/login.html'
        }

    })
    


})

// inputConfirmarCadastrar.oninput = checkSenha;