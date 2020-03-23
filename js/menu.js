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


document.getElementById('programamenu').onclick = function () {
    menu();
    var pro = divprograma.offsetTop;
    scrollTo(document.documentElement, pro, 1250);   
}
    
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};