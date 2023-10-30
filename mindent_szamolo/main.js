//első feladat:

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let display1 = document.querySelector('#disp1');
let button1 = document.querySelector('#btn1');

button1.addEventListener('click', () => {
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let temp1 = num1 + num2;
    let temp2 = num1 - num2;
    let temp3 = num1 * num2;
    let temp4 = num1 / num2;
    let temp5 = num1 % num2;
    let temp6 = num1 ** num2;
    display1.innerHTML = `Összeadás: ${temp1} <br>  Kivonás: ${temp2} <br>  Szorzás: ${temp3} <br>  Osztás: ${temp4} <br>  Maradék: ${temp5} <br>  Hatványozás: ${temp6}`;
});