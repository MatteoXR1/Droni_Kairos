let stato_nav = false;
function modifica_barre(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggle_Nav() {
    if (!stato_nav) {
        openNav();
        stato_nav = !stato_nav;
    } else {
        closeNav();
        stato_nav = !stato_nav;
    }
}



let stato_login = false;

function openLogin() {
    document.getElementById("login_menu").style.width = "300px";
}

function closeLogin() {
    document.getElementById("login_menu").style.width = "0";
}

function toggle_login() {
    if (!stato_login) {
        openLogin();
        stato_login = !stato_login;
    } else {
        closeLogin();
        stato_login = !stato_login;
    }
}