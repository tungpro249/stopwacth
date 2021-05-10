window.onload = function(){

    var second = 00;
    var ten = 00;

    var seconds = document.getElementById('seconds');
    var tens = document.getElementById('tens');
    var start = document.getElementById('start-btn');
    var stop = document.getElementById('stop-btn');
    var reset = document.getElementById('reset-btn');

    var Interval;

    start.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    stop.onclick = function(){
        clearInterval(Interval);

    }
    reset.onclick = function(){
        ten = "00";
        second = "00";

        seconds.innerText = second;
        tens.innerText = ten;
    }

    startTimer = function(){
        ten++;

        if(ten<9){
            tens.innerText = "0"+ ten ;
        }
        if(ten > 9){
            tens.innerText = ten;
        }
        if(ten > 99){
            second++;
            seconds.innerText = "0" + second;
            ten = 0;
        }
        if(second < 9){
            seconds.innerText = "0" + second;
        }
        if(second > 9){
            seconds.innerText = second;
        }
    }


}