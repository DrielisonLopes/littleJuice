const inputNovaSenha = document.getElementById("nova-senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");


function checkSenha(){
    if(inputConfirmarSenha.value != inputNovaSenha.value){
        inputConfirmarSenha.setCustomValidity("As senhas não correspondem!")
    } else{
        inputConfirmarSenha.setCustomValidity('');
    }
}

inputConfirmarSenha.oninput = checkSenha;