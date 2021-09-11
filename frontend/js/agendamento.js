const data = document.getElementById("input-data");
data.min = new Date().toLocaleDateString().split("/").reverse().join("-");


//Lógica para desktop
if (window.screen.width >= 768) {

    //Renderização das informações do dia selecionado
    const inputData = document.getElementById("input-data")
    const inputSaoPaulo = document.getElementById("sao-paulo");
    const inputSantos = document.getElementById("santos");

    const informacoesDia = document.getElementById("div-informacoes-dia");

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


    const imgConfig = document.getElementById("img-config");
    const config = document.getElementById("div-config");


    function showconfig() {
        if (config.style.display == "none" || !config.style.display) {
            config.style.removeProperty("display");
            config.style.display = "block";


        } else {
            config.style.removeProperty("display");
            config.style.display = "none"
        }
    }

    imgConfig.onclick = showconfig;

}