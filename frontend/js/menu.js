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


if (document.body.clientWidth >= 768) {
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