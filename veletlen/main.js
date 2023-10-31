let array = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
let display1 = document.querySelector('#disp1');
let display2 = document.querySelector('#disp2');

display1.innerHTML = array.join(', ');

let max = array[0];
let min = array[0];
let sum = 0;
let avg = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }

    if (array[i] < min) {
        min = array[i];
    }

    sum += array[i];
}

avg = sum / array.length;

display2.innerHTML = `Max: ${max} <br> Min: ${min} <br> Összeg: ${sum} <br> Átlag: ${avg.toFixed(2)}`;