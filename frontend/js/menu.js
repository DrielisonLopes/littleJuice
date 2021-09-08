const imgMenu = document.getElementById("img-menu");
const menu = document.getElementById("div-menu");


function showMenu() {
    if (menu.style.display == "none" || !menu.style.display) {
        menu.style.removeProperty("display");
        menu.style.display = "block";


    } else {
        menu.style.removeProperty("display");
        menu.style.display = "none"
    }
}

imgMenu.onclick= showMenu;