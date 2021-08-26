let hamIcon = document.getElementById("hamIcon");
let mainMenuContainer = document.getElementsByClassName('mainMenuContainer')[0];
let mobileMenu = document.getElementsByClassName('mobileMenu')[0];




hamIcon.onclick = showMenu;
window.onscroll = adjustMMColor;

mainMenuContainer.onclick = checkPosition;
function checkPosition() {

    if (mobileMenu.addEventListener('click', temp)) {
        //do nothing
    }
    else {
        hideMenu();
    }
}


function temp() {
    return true;
}


function adjustMMColor() {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    mainMenuContainer.style.height = height + 'px';
}

function showMenu() {
    mobileMenu.id = 'doAnimation'

    mainMenuContainer.style.display = 'block';
    mobileMenu.style.display = ""

}
function hideMenu() {
    // mobileMenu.style.animation = "mobileMenuAnimation 10s  linear 2s reverse"
    mainMenuContainer.style.display = 'none';
    mobileMenu.style.display = 'none';
    // crossIcon.style.display = 'none';
    // hamIcon.style.display = "contents";
}