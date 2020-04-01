document.onscroll = function(){
   
    // animaciones del index
    try {
        var top  = window.pageYOffset || document.documentElement.scrollTop;
        var indexfoto1 = document.getElementById('indexfoto1').offsetTop + 300;
        var indexfoto2 = document.getElementById('indexfoto2').offsetTop + 300;
        var indexfoto3 = document.getElementById('indexfoto3').offsetTop + 300;
        var tamVentCli = window.innerHeight;
    
        if(top >= indexfoto1 - tamVentCli && top <= indexfoto1 + tamVentCli){
            document.getElementById("indexfoto1").classList.add("fade-in-left");
        }
        if(top >= indexfoto2 - tamVentCli && top <= indexfoto2 + tamVentCli){
            document.getElementById("indexfoto2").classList.add("fade-in-bottom");
        }
        if(top >= indexfoto3 - tamVentCli && top <= indexfoto3 + tamVentCli){
            document.getElementById("indexfoto3").classList.add("fade-in-right");
        }
    } catch (error) {
        
    }


    // animaciones de galeria.html
    try {
        var top  = window.pageYOffset || document.documentElement.scrollTop;
        var galeriafoto1 = document.getElementById('galeriafoto1').offsetTop + 150;
        var galeriafoto2 = document.getElementById('galeriafoto2').offsetTop + 300;
        var galeriafoto3 = document.getElementById('galeriafoto3').offsetTop + 500;
        var galeriafoto4 = document.getElementById('galeriafoto4').offsetTop + 300;
        var galeriafoto5 = document.getElementById('galeriafoto5').offsetTop + 400;
        var galeriafoto6 = document.getElementById('galeriafoto6').offsetTop + 300;
        var galeriafoto7= document.getElementById('galeriafoto7').offsetTop + 400;
        var galeriafoto8 = document.getElementById('galeriafoto8').offsetTop + 600;
        var galeriafoto9 = document.getElementById('galeriafoto9').offsetTop + 200;
        var galeriafoto10 = document.getElementById('galeriafoto10').offsetTop + 500;
        var galeriafoto11 = document.getElementById('galeriafoto11').offsetTop + 300;
        var galeriafoto12 = document.getElementById('galeriafoto12').offsetTop + 500;
        var galeriafoto13 = document.getElementById('galeriafoto13').offsetTop + 200;
        var tamVentCli = window.innerHeight;
    
        if(top >= galeriafoto1 - tamVentCli && top <= galeriafoto1 + tamVentCli){
            document.getElementById("galeriafoto1").classList.add("fade-in-bottom");
        }
        if(top >= galeriafoto2 - tamVentCli && top <= galeriafoto2 + tamVentCli){
            document.getElementById("galeriafoto2").classList.add("fade-in-left");
        }
        if(top >= galeriafoto3 - tamVentCli && top <= galeriafoto3 + tamVentCli){
            document.getElementById("galeriafoto3").classList.add("fade-in-right");
        }
        if(top >= galeriafoto4 - tamVentCli && top <= galeriafoto4 + tamVentCli){
            document.getElementById("galeriafoto4").classList.add("fade-in-bottom");
        }
        if(top >= galeriafoto5 - tamVentCli && top <= galeriafoto5 + tamVentCli){
            document.getElementById("galeriafoto5").classList.add("fade-in-left");
        }
        if(top >= galeriafoto6 - tamVentCli && top <= galeriafoto6 + tamVentCli){
            document.getElementById("galeriafoto6").classList.add("fade-in-right");
        }
        if(top >= galeriafoto7 - tamVentCli && top <= galeriafoto7 + tamVentCli){
            document.getElementById("galeriafoto7").classList.add("fade-in-left");
        }
        if(top >= galeriafoto8 - tamVentCli && top <= galeriafoto8 + tamVentCli){
            document.getElementById("galeriafoto8").classList.add("fade-in-bottom");
        }
        if(top >= galeriafoto9 - tamVentCli && top <= galeriafoto9 + tamVentCli){
            document.getElementById("galeriafoto9").classList.add("fade-in-right");
        }
        if(top >= galeriafoto10 - tamVentCli && top <= galeriafoto10 + tamVentCli){
            document.getElementById("galeriafoto10").classList.add("fade-in-right");
        }
        if(top >= galeriafoto11 - tamVentCli && top <= galeriafoto11 + tamVentCli){
            document.getElementById("galeriafoto11").classList.add("fade-in-bottom");
        }
        if(top >= galeriafoto12 - tamVentCli && top <= galeriafoto12 + tamVentCli){
            document.getElementById("galeriafoto12").classList.add("fade-in-left");
        }
        if(top >= galeriafoto13 - tamVentCli && top <= galeriafoto13 + tamVentCli){
            document.getElementById("galeriafoto13").classList.add("fade-in-right");
        }

    } catch (error) {
        
    }
    
    
//btn-UP----------------------------
// logo lupenni----------------------
    var img1 = document.getElementById('afterintro').offsetTop;
    if (top >= img1 - 30) {
        document.getElementById('logolupenni').classList.add('invert');
        document.getElementById('btnburger').classList.add('invert');
        document.getElementById('up').classList.add('fade-btn-up-in');
        
    }else{
        document.getElementById('logolupenni').classList.remove('invert');
        document.getElementById('btnburger').classList.remove('invert');
        document.getElementById('up').classList.remove('fade-btn-up-in');
        
    }
};

function instamenuazul(){
    document.getElementById('divmenuinsta').classList.add("insta-menu-img-azul");
}
function instamenu(){
    document.getElementById('divmenuinsta').classList.remove("insta-menu-img-azul");
}