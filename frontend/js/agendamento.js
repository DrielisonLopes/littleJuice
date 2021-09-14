const data = document.getElementById("input-data");
data.min = new Date().toLocaleDateString().split("/").reverse().join("-");
const selectUnidade = document.getElementById('select-unidade');
const inputData = document.getElementById("input-data");
const inputSaoPaulo = document.getElementById("sao-paulo");
const inputSantos = document.getElementById("santos");
const informacoesDia = document.getElementById("div-informacoes-dia");
const divAgendamentos = document.getElementById("div-agendamentos");


function renderingElementsDesktop() {

    //Lógica para desktop
    if (document.body.clientWidth >= 768) {

        selectUnidade.removeAttribute("required");
        inputSaoPaulo.setAttribute("required", "required");
        inputSaoPaulo.setAttribute("required", "required");

        //Renderização das informações do dia selecionado

        informacoesDia.style.removeProperty("display");
        informacoesDia.style.display = "none";

        inputData.oninvalid = () => {
            informacoesDia.style.removeProperty("display")
            informacoesDia.style.display = "none";
        }

        inputSaoPaulo.oninvalid = () => {
            informacoesDia.style.removeProperty("display")
            informacoesDia.style.display = "none";
        }

        inputSantos.oninvalid = () => {
            informacoesDia.style.removeProperty("display")
            informacoesDia.style.display = "none";
        }

        if (inputData.value) {
            informacoesDia.style.removeProperty("display")
            informacoesDia.style.display = "flex";
        }

        inputSaoPaulo.oninput = () => {
            if (informacoesDia.style.display == "flex") {
                return;
            } else if (inputData.value) {
                informacoesDia.style.removeProperty("display")
                informacoesDia.style.display = "flex";
            }
        }

        inputSantos.oninput = () => {
            if (informacoesDia.style.display == "flex") {
                return;
            } else if (inputData.value) {
                informacoesDia.style.removeProperty("display")
                informacoesDia.style.display = "flex";
            }
        }

        if (!inputData.value) {
            inputSaoPaulo.setAttribute("disabled", "disabled");
            inputSantos.setAttribute("disabled", "disabled");
        }

        inputData.oninput = () => {
            inputSaoPaulo.removeAttribute("disabled");
            inputSantos.removeAttribute("disabled");
        }

        //Mudança de elementos
        const titleAgendar = document.getElementById("title-agendar");
        const titleConsultarAgendamentos = document.getElementById
            ("title-consultar-agendamentos");
        const container1 = document.getElementById("container1");
        const container2 = document.getElementById("container2");
        const divAgendamentos = document.getElementById("div-agendamentos");

        titleAgendar.addEventListener("click", addContent);
        titleConsultarAgendamentos.addEventListener("click", addContent2);

        window.onload = () => {
            titleAgendar.style.backgroundColor = "#FE4400"
        }

        function addContent() {
            titleConsultarAgendamentos.style.removeProperty("background-color");
            titleAgendar.style.removeProperty("background-color");
            titleAgendar.style.backgroundColor = "#FE4400";

            container1.style.removeProperty("display");
            container1.style.display = "flex"
            container2.style.removeProperty("display");
            container2.style.display = "flex"
            divAgendamentos.style.removeProperty("display");
            divAgendamentos.style.display = "none";

        }

        function addContent2() {
            titleAgendar.style.removeProperty("background-color");
            titleConsultarAgendamentos.style.removeProperty("background-color");
            titleConsultarAgendamentos.style.backgroundColor = "#FE4400";

            container1.style.removeProperty("display");
            container1.style.display = "none";
            container2.style.removeProperty("display");
            container2.style.display = "none";
            divAgendamentos.style.removeProperty("display");
            divAgendamentos.style.display = "flex";

        }

        //Agendamentos futuros e anteriores
        const selectFuturos = document.getElementById("select-futuros");
        const selectAnteriores = document.getElementById("select-anteriores");

        selectFuturos.addEventListener("click", addBackgroundFuturos)
        selectAnteriores.addEventListener("click", addBackgroundAnteriores)

        function addBackgroundFuturos() {
            selectAnteriores.style.removeProperty("background-color")
            selectFuturos.style.backgroundColor = "#FFFFFF"
        }

        function addBackgroundAnteriores() {
            selectFuturos.style.removeProperty("background-color")
            selectAnteriores.style.backgroundColor = "#FFFFFF"
        }
    }
}


document.body.onresize = () => {
    renderingElementsDesktop()

    if (document.body.clientWidth < 768) {
        inputSaoPaulo.removeAttribute("required")
        inputSantos.removeAttribute("required")
        selectUnidade.setAttribute("required", "required")
        window.location.href = "../pages/principal.html";

    }
}

window.onload = () => {
    renderingElementsDesktop()

    if (document.body.clientWidth < 768) {
        inputSaoPaulo.removeAttribute("required")
        inputSantos.removeAttribute("required")
        selectUnidade.setAttribute("required", "required")
    } else {
        selectUnidade.removeAttribute("required");
        inputSaoPaulo.setAttribute("required", "required");
        inputSaoPaulo.setAttribute("required", "required");
    }
}

// Enviar agendamento
const formAgendar = document.getElementById("form-agendar")

formAgendar.addEventListener("submit", function (e) {
    e.preventDefault();

    if (data.value != 0) {
        swal("🍊", "agendamento realizado");
    }

    //Requisição para o backend
    const userId = localStorage.getItem("id_user");
    let unidade;

    if (document.body.clientWidth < 768) {
        unidade = selectUnidade.options[selectUnidade.selectedIndex].value;
    } else if (inputSaoPaulo.checked) {
        unidade = inputSaoPaulo.value;
    } else if (inputSantos.checked) {
        unidade = inputSantos.value;
    }

    const schedule = {
        location_schedule: unidade,
        date: inputData.value,
        id_users: userId
    }

    fetch("http://127.0.0.1:3000/schedule", {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    })

    console.log(inputData.value, unidade);
})
