let btn = document.getElementById('btn_count');
let btn2 = document.getElementById('btn_ctn+5')
let cnt = document.getElementById('val_count');

btn.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 1;
});

btn2.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 5;
});

console.log(btn);