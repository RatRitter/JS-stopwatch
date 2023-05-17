window.onload = function() {
let btn_start = document.querySelector('.btn_start');
let btn_stop = document.querySelector('.btn_stop');
let btn_reset = document.querySelector('.btn_reset');
let sec = document.querySelector('.seconds');
let ten = document.querySelector('.tens');

let seconds = 00;
let tens = 00;
let Interval;

btn_start.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
btn_stop.onclick = function() {
    clearInterval(Interval);
}
btn_reset.onclick = function() {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
sec.innerHTML = seconds;
ten.innerHTML = tens;
}
function startTimer() {
    tens++;
    if(tens <= 9) {
        ten.innerHTML = '0' + tens;
    }
    if(tens > 9) {
        ten.innerHTML = tens;
    }if(tens > 99) {
        console.log('seconds');
        seconds++;
        sec.innerHTML = '0' + seconds;
        tens = 0;
        ten.innerHTML = '0' + 0
        }
        if(seconds > 9) {
            sec.innerHTML = seconds;
        }
}
}