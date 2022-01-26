"use strict";

var buttons = document.querySelectorAll("allButtons");
var numbers = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");
var display = document.getElementById("container__display");
var output = document.getElementById("container__output");
var equals = document.getElementById("equals");
var ac = document.getElementById("clear");
var firstNumber;
var secondNumber;
var thirdNumber;
var selectedOperator;
var result = 0;
var operatorArr = [];
var numberArr = [];
var firstTotal = 0;
var totalArr = [];
numbers.forEach(function (item) {
  item.addEventListener("click", function (event) {
    display.innerHTML += item.innerHTML;
  });
});

var _loop = function _loop(_i) {
  operator[_i].addEventListener("click", function (event) {
    numberArr.push(display.innerHTML);
    selectedOperator = operator[_i].innerHTML;
    operatorArr.push(operator[_i].innerHTML);
    output.innerHTML += display.innerHTML + " " + selectedOperator + " ";

    for (var _i2 = 0; _i2 < numberArr.length; _i2++) {
      if (output.innerHTML.includes(selectedOperator) && operatorArr.length <= 1) {
        display.innerHTML = "";
      } else if (operatorArr[0].includes("+") && operatorArr.length == 2) {
        firstTotal = numberArr[0];
        thirdNumber = display.innerHTML;
        output.innerHTML = Number(firstTotal) + Number(numberArr[_i2]) + " " + selectedOperator;
        display.innerHTML = "";
        firstTotal = Number(firstTotal) + Number(numberArr[_i2]);
      } else if (operatorArr[_i2].includes("-") && operatorArr.length >= 2) {
        thirdNumber = display.innerHTML;
        output.innerHTML = Number(numberArr[0]) - Number(numberArr[1]) + " " + selectedOperator;
        display.innerHTML = "";
        firstTotal = Number(numberArr[0]) + Number(numberArr[1]);
      } else if (operatorArr[_i2].includes("X") && operatorArr.length >= 2) {
        thirdNumber = display.innerHTML;
        output.innerHTML = Number(numberArr[0]) * Number(numberArr[1]) + " " + selectedOperator;
        display.innerHTML = "";
        firstTotal = Number(numberArr[0]) + Number(numberArr[1]);
      } else if (operatorArr[_i2].includes("÷") && operatorArr.length >= 2) {
        thirdNumber = display.innerHTML;
        output.innerHTML = Number(numberArr[0]) / Number(numberArr[1]) + " " + selectedOperator;
        display.innerHTML = "";
        firstTotal = Number(numberArr[0]) + Number(numberArr[1]);
      }
    } // console.log(thirdNumber)
    // console.log(firstTotal)


    console.log(numberArr[0]);
    console.log(numberArr[1]);
  });
};

for (var _i = 0; _i < operator.length; _i++) {
  _loop(_i);
}

console.log(thirdNumber);
equals.addEventListener("click", function (event) {
  secondNumber = display.innerHTML;
  display.innerHTML = "";
  output.innerHTML = "";

  if (selectedOperator == "+" && operatorArr.length == 2) {
    result = Number(numberArr[i]) + Number(secondNumber) + Number(thirdNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "-" && operatorArr.length == 2) {
    result = Number(numberArr[i]) - Number(secondNumber) - Number(thirdNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "÷" && operatorArr.length == 2) {
    result = Number(numberArr[i]) / Number(secondNumber) / Number(thirdNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "X" && operatorArr.length == 2) {
    result = Number(numberArr[i]) * Number(secondNumber) * Number(thirdNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "-") {
    result = Number(numberArr[i]) - Number(secondNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "÷") {
    result = Number(numberArr[i]) / Number(secondNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "X") {
    result = Number(numberArr[i]) * Number(secondNumber);
    output.innerHTML = result;
  } else if (selectedOperator == "+") {
    result = Number(numberArr[i]) + Number(secondNumber);
    output.innerHTML = result;
  } // else if (operatorArr.length >= 3) {
  //     result = "Error!";
  //     output.innerHTML = result
  // }

});
ac.addEventListener("click", function (event) {
  display.innerHTML = "";
  output.innerText = "";
  operatorArr = [];
  thirdNumber = 0;
  firstTotal = 0;
  numberArr = [];
  var totalArr = [];
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
// const add = document.getElementById("add");
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
// add.addEventListener ("click", (event) => {
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