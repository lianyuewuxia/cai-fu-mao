/**
 * Created by A-JUN on 2017/4/20.
 */
window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var oof = document.getElementById("wof");
    var logo = document.getElementById("p1-logo");
    var Dbtm = document.getElementById("btm-lin");
    var take1= document.getElementById("page0");
    var take2 = document.getElementById("page1");
    oof.onclick = function () {
        if (audio.paused) {
            audio.play();
            music.style.display = "block";
        } else {
            audio.pause();
            music.style.display = "none";
        }
    };
    Dbtm.onclick = function(){
        take1.style.display = "none";
        take2.style.display = "block";
    }

}