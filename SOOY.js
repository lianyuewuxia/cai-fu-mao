window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var oof = document.getElementById("wof");
    var logo =document.getElementById("p1-logo");
    oof.onclick= function(){
        if(audio.paused){
            audio.play();
            music.style.display="block";
        }else {
            audio.pause();
           music.style.display="none";
        };
    };
    logo.onclick
   };