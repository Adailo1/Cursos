const timer = document.querySelector('.res');

let intervalo;

function usaTimer(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'UTC'
    });
}

function iniciaTimer(){
    intervalo = setInterval(function () {
        count++;
        timer.innerHTML = usaTimer(count);
        timer.style.color = 'black';
    }, 1000);
}

function pausaTimer(){ 
    clearInterval(intervalo);
    timer.style.color = 'red';
}

function resetaTimer(){
    pausaTimer();
    count = 0;
    timer.innerHTML = usaTimer(count);
    timer.style.color = 'black';
}