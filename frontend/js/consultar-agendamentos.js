const selectFuturos = document.getElementById("select-futuros");
const selectAnteriores = document.getElementById("select-anteriores");
const alertProximoAgendamento = document.getElementById('proximo-agendamento');

let agendamentos;
fetch(`http://127.0.0.1:3000/schedule/user?id_users=${localStorage.getItem('id_user')}`, {
    method: 'GET',
}).then(response => {
    response.json().then(data => {
        agendamentos = data;
    }).then(listAgendamentosFuturos)
})

function listAgendamentosFuturos() {
    if(agendamentos.length >=1){
        alertProximoAgendamento.innerHTML = `próximo: ${agendamentos[0].date.substring(0, 10).split('-').reverse().join('/')} - ${agendamentos[0].location_schedule}`;
    } else{
        alertProximoAgendamento.innerHTML = 'Sem agendamentos'
    }
    
    let ul = document.getElementById('lista-agendamentos');
    let itemsButtons = document.getElementsByClassName('remove-agendamento');

    agendamentos.forEach(agendamento => {
        let li = document.createElement('li');
        let dataAgendamento = document.createTextNode(agendamento.date.substring(0, 10).split('-').reverse().join('/'));
        let location;
        if (agendamento.location_schedule == 'São Paulo') {
            location = document.createTextNode('São Paulo')
        } else if(agendamento.location_schedule == 'Santos'){
            location = document.createTextNode('Santos')
        };
        let traco = document.createTextNode(' - ');
        li.appendChild(dataAgendamento);
        li.appendChild(traco);
        li.appendChild(location)
        ul.appendChild(li);

        let xButton = document.createElement('button');
        xButton.innerHTML = 'X';
        xButton.id = agendamento.id;
        xButton.className = 'remove-agendamento';
        li.appendChild(xButton);
    });

    buttonEvents();

    function buttonEvents() {
        for (let i = 0; i < itemsButtons.length; i++) {
            itemsButtons[i].addEventListener('click', deleteAgendamento)
        }
    };

    function deleteAgendamento() {
        fetch(`http://127.0.0.1:3000/schedule/${this.id}`, {
            method: 'DELETE',
        }).then(() =>{
            this.parentNode.remove();
            swal("🍊", "agendamento cancelado");
        })
    }
}

selectFuturos.addEventListener("click", addStyleFuturos)
selectAnteriores.addEventListener("click", addStyleAnteriores)

function addStyleFuturos() {
    selectAnteriores.style.removeProperty("background-color")
    selectFuturos.style.backgroundColor = "#FE4400"
}

function addStyleAnteriores() {
    selectFuturos.style.removeProperty("background-color")
    selectAnteriores.style.backgroundColor = "#FE4400"
}

window.onload = () => {
    addStyleFuturos();
    if (document.body.clientWidth >= 768) {
        window.location.href = "../pages/agendamento.html";
    }
}
document.body.onresize = () => {
    addStyleFuturos();
    if (document.body.clientWidth >= 768) {
        window.location.href = "../pages/agendamento.html";
    }
}