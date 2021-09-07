const imgMenu = document.getElementById("img-menu");
const menu = document.getElementById("menu");


function showMenu() {
    if (menu.style.display == "none") {
        menu.style.removeProperty("display");
        menu.style.display = "block";


    } else {
        menu.style.removeProperty("display");
        menu.style.display = "none"
    }
}