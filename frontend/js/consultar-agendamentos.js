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