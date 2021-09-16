const imgMenu = document.getElementById("img-menu");
const menu = document.getElementById("div-menu");
const sairMenu = document.getElementById('link-sair-menu');

sairMenu.onclick = () => {
    localStorage.removeItem('id_user')
    localStorage.removeItem('name_user')
    localStorage.removeItem('email_user')
    localStorage.removeItem('location_user')
}

function showMenu() {
    if (menu.style.display == "none" || !menu.style.display) {
        menu.style.removeProperty("display");
        menu.style.display = "block";

    } else {
        menu.style.removeProperty("display");
        menu.style.display = "none"
    }
}

imgMenu.onclick = showMenu;

handleDesktop();
function handleDesktop() {
    if (document.body.clientWidth >= 768) {
        const imgConfig = document.getElementById("img-config");
        const config = document.getElementById("div-config");
        const sair = document.getElementById('link-sair');

        const nameUser = localStorage.getItem('name_user')
        const saudacao = document.getElementById('saudacao');
        saudacao.innerHTML = `olá, ${nameUser}`;

        sair.onclick = () => {
            localStorage.removeItem('id_user')
            localStorage.removeItem('name_user')
            localStorage.removeItem('email_user')
            localStorage.removeItem('location_user')
        }

        function showConfig() {
            if (config.style.display == "none" || !config.style.display) {
                config.style.removeProperty("display");
                config.style.display = "block";
            } else {
                config.style.removeProperty("display");
                config.style.display = "none"
            }
        }

        imgConfig.onclick = showConfig;
    }
}

document.body.addEventListener('resize', handleDesktop);
