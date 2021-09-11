const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");
const checkSenha = document.getElementById("btn-ok")

checkSenha.addEventListener("click", function(e) {
    e.preventDefault()

    if(inputConfirmarSenha.value != inputSenha.value){
        alert("As senhas não correspondem!")
    } else{
        swal("Good job!", "você vai receber um e-mail com um link de confirmação", "success");
    }
})

inputConfirmarSenha.oninput = checkSenha;