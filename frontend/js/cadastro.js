const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");


function checkSenha(){
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setCustomValidity("As senhas não correspondem!")
    } else{
        inputConfirmarSenha.setCustomValidity('');
    }
}

inputConfirmarSenha.oninput = checkSenha;