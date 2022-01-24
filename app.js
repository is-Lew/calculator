const buttons = document.querySelectorAll("allButtons")

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const ac = document.getElementById("clear");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");

const display = document.getElementById("container__display");

one.addEventListener( "click", (event) =>{ 
    display.innerHTML += 1;
})
two.addEventListener( "click", (event) =>{ 
    display.innerHTML += 2;
})
three.addEventListener( "click", (event) =>{ 
    display.innerHTML += 3;
})
four.addEventListener( "click", (event) =>{ 
    display.innerHTML += 4;
})
five.addEventListener( "click", (event) =>{ 
    display.innerHTML += 5;
})
six.addEventListener( "click", (event) =>{ 
    display.innerHTML += 6;
})
seven.addEventListener( "click", (event) =>{ 
    display.innerHTML += 7;
})
eight.addEventListener( "click", (event) =>{ 
    display.innerHTML += 8;
})
nine.addEventListener( "click", (event) =>{ 
    display.innerHTML += 9;
})
zero.addEventListener( "click", (event) =>{ 
    display.innerHTML += 0;
})

ac.addEventListener ("click", (event) => {
    display.innerHTML = "";
})

add.addEventListener ("click", (event) => {
    display.innerHTML += "+";
})

subtract.addEventListener ("click", (event) => {
    display.innerHTML += "-";
})
divide.addEventListener ("click", (event) => {
    display.innerHTML += "/";
})
multiply.addEventListener ("click", (event) => {
    display.innerHTML += "X";
})
decimal.addEventListener ("click", (event) => {
    display.innerHTML += ".";
})
equals.addEventListener ("click", (event) => {
    display.innerHTML += "=";
})