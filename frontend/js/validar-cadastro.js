const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");
const checkCadastrar = document.getElementById("btn-cadastrar")


checkCadastrar.addEventListener("click", function(e) {
    e.preventDefault()

    if(inputConfirmarSenha.value != inputSenha.value){
        swal("🍊", "as senhas não correspondem")
    } else if(inputSenha.value == 0 || inputConfirmarSenha == 0) {
        swal("🍊", "não pode deixar os campos vazios")
    } else {
        swal("🍊 Little Juice!", "você vai receber um e-mail com um link de confirmação", "success");
    }
})

// inputConfirmarCadastrar.oninput = checkSenha;