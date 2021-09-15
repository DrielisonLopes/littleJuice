const selectFuturos = document.getElementById("select-futuros");
const selectAnteriores = document.getElementById("select-anteriores");

const agendamentos = fetch(`http://127.0.0.1:3000/schedule/user?id_users=${localStorage.getItem('id_user')}`, {
    method: 'GET',
}).then(response => {
    response.json().then(data => {
        console.log(data)
        return data;
    })
})

selectFuturos.addEventListener("click", addBorderFuturos)
selectAnteriores.addEventListener("click", addBorderAnteriores)

function addBorderFuturos() {
    selectAnteriores.style.removeProperty("border")
    selectFuturos.style.borderBottom = "3px #FFFFFF solid"
    console.log(agendamentos)
}

function addBorderAnteriores() {
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