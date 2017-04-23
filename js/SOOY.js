window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var oof = document.getElementById("wof");
    var logo =document.getElementById("p1-logo");
    var main =document.getElementById("main");
    var retun=document.getElementById("p1-return");
    var imooc =document.getElementById("p1-imooc");
    var button = document.getElementById("p1-button");
    var Dome = document.getElementById("demo");
    var taskFot = document.getElementById("task4-btm");
    var foots = document.getElementById("task-foot");
    oof.onclick= function(){
        if(audio.paused){
            audio.play();
            music.style.display="block";
        }else {
            audio.pause();
           music.style.display="none";
        }
    };
    logo.onclick = function(){
     main.style.display = "block";
     logo.style.display = "none";
     retun.style.display = "block";
     imooc.style.display = "none";
     button.style.display = "none";
    };
    retun.onclick = function(){
    main.style.display = "none";
    logo.style.display = "block";
    retun.style.display = "none";
    imooc.style.display = "block";
    button.style.display = "block";
    };
    button.onclick = function(){
    logo.style.display = "none";
    imooc.style.display = "none";
    button.style.display = "none";
    Dome.style.display = "block";
    }
    taskFot.onclick = function(){
        foots.style.display = "block";
    }
   };
