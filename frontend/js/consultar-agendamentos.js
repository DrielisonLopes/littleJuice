const selectFuturos = document.getElementById("select-futuros");
const selectAnteriores = document.getElementById("select-anteriores");

selectFuturos.addEventListener("click", addBorderFuturos)
selectAnteriores.addEventListener("click", addBorderAnteriores)

function addBorderFuturos(){
    selectAnteriores.style.removeProperty("border")
    selectFuturos.style.borderBottom = "3px #FFFFFF solid"
}

function addBorderAnteriores(){
    selectFuturos.style.removeProperty("border")
    selectAnteriores.style.borderBottom = "3px #FFFFFF solid"
}

window.onload = () => {
    if (document.body.clientWidth >= 768) {
        window.location.href = "../pages/agendamento.html";
    }
}
document.body.onresize = () => {
    if (document.body.clientWidth >= 768) {
        window.location.href = "../pages/agendamento.html";
    }
}