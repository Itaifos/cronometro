window.addEventListener('load', () => {
    createButtonStart();
    createButtonPause();
});

// cria instancia do botao Start
let buttonStart = document.createElement('button');
// cria instancia do botao Pause
let buttonPause = document.createElement('button');
// Cria variavel da instancia do clock para poder pausar em qualquer local abaixo
let clockTimer;

function clock() {
    // Desabilita botao Start
    buttonStart.disabled = true;
    // Habilita botao Pause
    buttonPause.disabled = false;

    const timer = document.querySelector('#timer');

    let hour = "0" + 0;
    let minute = "0" + 0;
    let second = "0" + 0;
    let millisecond = 0;

    // atribui a referencia do setInterval para clockTimer (Para ser possivel pausar depois)
    clockTimer = setInterval(() => {
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
    buttonStart.innerHTML = 'Start';
    buttonStart.classList.add('button-start');
    buttonStart.addEventListener('click', clock);

    timerButtons.appendChild(buttonStart);
}

function createButtonPause() {
    function myclearInterval() {
        // Para o cronometro
        clearInterval(clockTimer);
        // Habilita o botao de Start
        buttonStart.disabled = false;
        // Desabilita o botao de Pause
        buttonPause.disabled = true;
    }

    buttonPause.innerHTML = 'Pause';
    // Começa com botão Pause desabilitado
    buttonPause.disabled = true;
    buttonPause.addEventListener('click', myclearInterval);
    timerButtons.appendChild(buttonPause);
}
