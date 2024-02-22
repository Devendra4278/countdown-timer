
document.querySelector('.butt1')
    .addEventListener("click",()=>{
        var  countDownDate = new Date("feb 23 , 2024  00:00:00").getTime();
var x = setInterval(function(){
  var present = new Date().getTime();
  var distance = countDownDate - present;
  var days  = Math.floor(distance / (1000*60*60*24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes  = Math.floor((distance % (1000 * 60 * 60 )) / (1000*60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML =  hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    if(distance < 0 ){
        document.querySelector('.days').innerHTML = "0";
        document.querySelector('.hours').innerHTML =  "00";
        document.querySelector('.minutes').innerHTML = "00";
        document.querySelector('.seconds').innerHTML = "00";
    }
    else if(distance >0 && distance <=9){
        document.querySelector('.days').innerHTML = `${"0", days}`;
        document.querySelector('.hours').innerHTML =   `${"0", hours}`;
        document.querySelector('.minutes').innerHTML =  `${"0", minutes}`;
        document.querySelector('.seconds').innerHTML =  `${"0", seconds}`;
    }
},1000);
})