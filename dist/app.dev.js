"use strict";

var buttons = document.querySelectorAll("allButtons");
var numbers = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");
var display = document.getElementById("container__display");
var output = document.getElementById("container__output");
var equals = document.getElementById("equals");
numbers.forEach(function (item) {
  item.addEventListener("click", function (event) {
    display.innerHTML += item.innerHTML;
  });
});
operator.forEach(function (item) {
  item.addEventListener("click", function (event) {
    output.innerHTML += display.innerHTML + item.innerHTML;
    display.innerHTML = "";
  });
}); // equals.addEventListener("click", event => {
//     output.innerHTML = "6";
// })

equals.addEventListener("click", function (event) {
  if (output.innerHTML.includes("+")) {
    var result = output.innerHTML.replace(/\D/g, '') + display.innerHTML;
    display.innerHTML = "";
    output.innerHTML = "";
    output.innerHTML = "".concat(result);
  }
}); // let calculate = () => {
//     if (display.innerText.includes("/")) {
//         let result = parseFloat(display.innerText) / parseFloat(output.innerText);
//         display.innerText ="";
//         output.innerText = "";
//         output.append(result)
//     }
//     else if 
// }
// const zero = document.getElementById("0");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");

var ac = document.getElementById("clear"); // const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const divide = document.getElementById("divide");
// const multiply = document.getElementById("multiply");
// const decimal = document.getElementById("decimal");
// 
// one.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 1;
// })
// two.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 2;
// })
// three.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 3;
// })
// four.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 4;
// })
// five.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 5;
// })
// six.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 6;
// })
// seven.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 7;
// })
// eight.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 8;
// })
// nine.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 9;
// })
// zero.addEventListener( "click", (event) =>{ 
//     display.innerHTML += 0;
// })

ac.addEventListener("click", function (event) {
  display.innerHTML = "";
  output.innerText = "";
}); // add.addEventListener ("click", (event) => {
//     display.innerHTML += "+";
// })
// subtract.addEventListener ("click", (event) => {
//     display.innerHTML += "-";
// })
// divide.addEventListener ("click", (event) => {
//     display.innerHTML += "/";
// })
// multiply.addEventListener ("click", (event) => {
//     display.innerHTML += "X";
// })
// decimal.addEventListener ("click", (event) => {
//     display.innerHTML += ".";
// })
// equals.addEventListener ("click", (event) => {
//     ;
// })