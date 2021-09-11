const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");
const checkCadastrar = document.getElementById("btn-cadastrar")


const formCadastro = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const unidade = document.querySelector('input[name="unidade"]')
const senha = document.getElementById("senha");


formCadastro.addEventListener("submit", function(e) {    
    e.preventDefault()
    if(inputConfirmarSenha.value != inputSenha.value){
        swal("🍊", "as senhas não correspondem")
    } else if(inputSenha.value == 0 || inputConfirmarSenha == 0) {
        swal("🍊", "não pode deixar os campos vazios")
    } else {
        swal("🍊 Little Juice!", "você vai receber um e-mail com um link de confirmação", "success");
    }

    console.log(nome.value, email.value, unidade.value, senha.value);

    const user = JSON.stringify({
        nome: nome.value, 
        email: email.value, 
        unidade: unidade.value, 
        senha: senha.value
    })
    console.log(user)
    console.log(typeof(user))
})

// inputConfirmarCadastrar.oninput = checkSenha;