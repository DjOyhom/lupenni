var menu_open = false;
function menu(){
    if (menu_open) {
        var menu = document.getElementById('menu');
        menu.classList.remove('menu-fade-in');
        menu.classList.add("menu-fade-out");
        menu_open = false;
        var btn = document.getElementById('btnburger');
        btn.classList.remove("nav-icon2");
    }else{
        var btn = document.getElementById('btnburger');
        btn.classList.add("nav-icon2");
        var menu = document.getElementById('menu');
        menu.classList.remove('menu-fade-out');
        menu.classList.add("menu-fade-in");
        menu_open = true;
    }
}