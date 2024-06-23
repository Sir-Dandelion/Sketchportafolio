var hour = document.getElementById("Hora");
var minute = document.getElementById("Minutos");
var seconds = document.getElementById("Segundos");
var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds(); 
    if(hr < 10){
        hr = "0" + hr;
    } 
    if(min < 10){
        min = "0" + min;
    } 
    if(sec < 10){
        sec = "0" + sec;
    }
      Hora.textContent = hr;
      Minutos.textContent = min;
      Segundos.textContent = sec;
    },1000
);

var title = document.getElementById("title");
title.textContent = hr + ":" + min + ":" + sec;
