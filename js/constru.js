var constru_open = false;
function constru(){
    if (constru_open) {
        var constru = document.getElementById('constru');
        constru.classList.remove('constru-fade-in');
        constru.classList.add("constru-fade-out");
        constru_open = false;
    }else{
        menu();
        var constru = document.getElementById('constru');
        constru.classList.remove('constru-fade-out');
        constru.classList.add("constru-fade-in");
        constru_open = true;
    }
}