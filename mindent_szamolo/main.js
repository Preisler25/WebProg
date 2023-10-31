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


//második feladat:

let inputa = document.querySelector('#input_a');
let inputb = document.querySelector('#input_b');
let inputc = document.querySelector('#input_c');
let display2 = document.querySelector('#disp2');

let Masodfoku = (a, b, c) => {
    let d = b * b - 4 * a * c;

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        display2.innerHTML = `x1 = ${x1} <br> x2 = ${x2}`;
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        display2.innerHTML = `x1 = ${x1} (kétszeres gyök)`;
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-d) / (2 * a);
        let imaginaryPartStr = '';
        if (imaginaryPart === 1) {
            imaginaryPartStr = 'i';
        } else {
            imaginaryPartStr = `${imaginaryPart.toFixed(2)}i`;
        }
        display2.innerHTML = `x1 = ${realPart.toFixed(2)} + ${imaginaryPartStr} <br> x2 = ${realPart.toFixed(2)} - ${imaginaryPartStr}`;
    }
    
}

let Masodik = () => {
    let a = parseInt(inputa.value);
    let b = parseInt(inputb.value);
    let c = parseInt(inputc.value);
    Masodfoku(a, b, c);
}



//haromadik feladat:

let input_num = document.querySelector('#input_num');
let display3 = document.querySelector('#disp3');

let AllTrigon = (num) => {
    let list = [Math.sin(num), Math.cos(num), Math.tan(num)]

    for (let i = 0; i < list.length; i++) {
        if (isNaN(list[i])){
            list[i] = `<span class="text-red-500">Nem létezik</span>`;
        }
        else{
            list[i] = `<span>${list[i]}</span>`;
        }   
    }
    display3.innerHTML = `Sin: ${list[0]} <br> Cos: ${list[1]} <br> Tan: ${list[2]}`;
}


let Haromadik = () => {
    let num = parseInt(input_num.value);
    AllTrigon(num);
}



addEventListener('keyup', (event) => {
        Masodik();
        Haromadik();
});