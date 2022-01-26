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
var runningTotal = 0;
numbers.forEach(function (item) {
  item.addEventListener("click", function (event) {
    display.innerHTML += item.innerHTML;
  });
});

var _loop = function _loop(i) {
  operator[i].addEventListener("click", function (event) {
    numberArr.push(Number(display.innerHTML));
    selectedOperator = operator[i].innerHTML;
    operatorArr.push(operator[i].innerHTML);
    output.innerHTML += display.innerHTML + " " + selectedOperator + " ";
    display.innerHTML = "";
  });
};

for (var i = 0; i < operator.length; i++) {
  _loop(i);
}

equals.addEventListener("click", function (event) {
  numberArr.push(Number(display.innerHTML));
  secondNumber = display.innerHTML;
  display.innerHTML = "";
  output.innerHTML = "";

  if (operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("X") && !operatorArr.includes("÷")) {
    for (var _i = 0; _i < numberArr.length; _i++) {
      runningTotal += numberArr[_i];
      output.innerHTML = runningTotal;
    }
  } else if (operatorArr.includes("-") && !operatorArr.includes("+") && !operatorArr.includes("X") && !operatorArr.includes("÷")) {
    for (var _i2 = 1; _i2 < numberArr.length; _i2++) {
      runningTotal = numberArr[0] -= numberArr[_i2];
      output.innerHTML = runningTotal;
    }
  } else if (operatorArr.includes("X") && !operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("÷")) {
    for (var _i3 = 1; _i3 < numberArr.length; _i3++) {
      runningTotal = numberArr[0] *= numberArr[_i3];
      output.innerHTML = runningTotal;
    }
  } else if (operatorArr.includes("÷") && !operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("X")) {
    for (var _i4 = 1; _i4 < numberArr.length; _i4++) {
      runningTotal = numberArr[0] /= numberArr[_i4];
      output.innerHTML = runningTotal;
    }
  } else {
    display.innerHTML = "Max operators exceeded";
    output.innerHTML = "Error!";
  }
});
ac.addEventListener("click", function (event) {
  display.innerHTML = "";
  output.innerText = "";
  operatorArr = [];
  thirdNumber = 0;
  firstTotal = 0;
  numberArr = [];
  var totalArr = [];
  runningTotal = 0;
});