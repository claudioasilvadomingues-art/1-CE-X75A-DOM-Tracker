let btn_sun = document.getElementById('btn-sun');
let sun_val = document.getElementById('sun-value');

let btn_water = document.getElementById('btn-water')
let water_value = document.getElementById('water-value')

let break_btn = document.getElementById('btn-break')
let break_val = document.getElementById('break-value')

let tt_val = document.getElementById('total-value')

let btn_reset = document.getElementById('btn-reset')

btn_sun.addEventListener('click', () => {
    sun_val.innerText = parseInt(sun_val.innerText) + 1;
     tt_val.innerText = parseInt(tt_val.innerText) + 1;
});

btn_water.addEventListener('click', () => {
    water_value.innerText = parseInt(water_value.innerText) + 1;
     tt_val.innerText = parseInt(tt_val.innerText) + 1;
});

break_btn.addEventListener('click', () => {
    break_val.innerText = parseInt(break_val.innerText) + 1;
    tt_val.innerText = parseInt(tt_val.innerText) + 1;
});


btn_reset.addEventListener('click', () => {
    break_val.innerText = 0 ;
    sun_val.innerText = 0;
    water_value.innerText = 0;
    tt_val.innerText = 0
});