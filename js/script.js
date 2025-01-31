const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function time() {
    let dateToday = new Date();
    let hr = String(dateToday.getHours()).padStart(2, '0');
    let min = String(dateToday.getMinutes()).padStart(2, '0');
    let sc = String(dateToday.getSeconds()).padStart(2, '0');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sc;
}

const relogio = setInterval(time, 1000);

time();
