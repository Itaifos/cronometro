window.addEventListener('load', () => {
    
    createButtonStart();
    createButtonPause();
});

function clock() {

    const timer = document.querySelector('#timer');

    let hour = "0" + 0;
    let minute = "0" + 0;
    let second = "0" + 0;
    let millisecond = 0;

    setInterval(() => {
        
        if (millisecond === 1000) {
            second++;
            if (second < 10) {
                second = '0' + second;
                second = second.substr(0,2);
            }
            millisecond = 0;
        }

        if (second === 60) {
            minute++;
            if (minute < 10) {
                minute = '0' + minute;
                minute = minute.substr(0,2);
            }
            second = 0;
        }
        if (minute === 60) {
            hour++;
            if (hour < 10) {
                hour = '0' + hour;
                hour = hour.substr(0,2);
            }
            minute = 0;
        }
        
        millisecond = millisecond + 10;
        
        timer.innerHTML = hour + ':' + minute + ':' + second + ':' + millisecond;
    }, 10);
}

function createButtonStart() {

    let buttonStart = document.createElement('button');
    buttonStart.innerHTML = 'Start';
    buttonStart.addEventListener('click', clock);
    timerButtons.appendChild(buttonStart);

}

function createButtonPause() {

    function myclearInterval() {
        clearInterval(clock);
    }

    let buttonPause = document.createElement('button');
    buttonPause.innerHTML = 'Pause';
    buttonPause.addEventListener('click', myclearInterval);
    timerButtons.appendChild(buttonPause);

}