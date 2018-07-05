/* Insert function for the timer that sets the loop 15" black, 7" red, 3" green. 
When Stop, reset timer if necessary, set bg to black.
 */
// Demo timer from SO
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

// Background color toggle and reset
function toggleBg(){
  document.body.style.background = 'red';
}

function resetBg(){
  document.body.style.background = 'black';
  
}
