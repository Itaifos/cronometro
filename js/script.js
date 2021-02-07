window.addEventListener('load', function(){
    const timer = document.querySelector('#timer');

    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    function clock() {

        setInterval(() => {
            
            if (millisecond === 1000) {
                second++;
                millisecond = 0;
            }

            if (second === 60) {
                minute++;
                second = 0;
            }
            if (minute === 60) {
                hour++;
                minute = 0;
            }
            
            millisecond = millisecond + 10;
            timer.textContent = hour + ':' + minute + ':' + second + ':' + millisecond;
        }, 10);


    }
    
    clock();
    
});