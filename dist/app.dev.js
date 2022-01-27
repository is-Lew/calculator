"use strict";

var numbers = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");
var display = document.getElementById("container__display");
var output = document.getElementById("container__output");
var equals = document.getElementById("equals");
var ac = document.getElementById("clear");
var selectedOperator;
var operatorArr = [];
var numberArr = [];
var totalArr = [];
var runningTotal = 0;
var decimalCheckArr = [];

var decimalCheck = function decimalCheck() {
  decimalCheckArr.push(display.innerHTML);

  if (decimalCheckArr.join().includes("..")) {
    display.innerHTML = "Two decimals in input";
    output.innerHTML = "Error!";
  }
};

numbers.forEach(function (item) {
  item.addEventListener("click", function (event) {
    display.innerHTML += item.innerHTML;
    decimalCheck();
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

var calculate = function calculate() {
  if (operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("X") && !operatorArr.includes("÷")) {
    for (var _i = 0; _i < numberArr.length; _i++) {
      runningTotal += numberArr[_i];
      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else if (operatorArr.includes("-") && !operatorArr.includes("+") && !operatorArr.includes("X") && !operatorArr.includes("÷")) {
    for (var _i2 = 1; _i2 < numberArr.length; _i2++) {
      if (runningTotal === 0) {
        runningTotal = numberArr[0] -= numberArr[_i2];
      } else {
        runningTotal -= numberArr[_i2];
      }

      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else if (operatorArr.includes("X") && !operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("÷")) {
    for (var _i3 = 1; _i3 < numberArr.length; _i3++) {
      if (runningTotal === 0) {
        runningTotal = numberArr[0] *= numberArr[_i3];
      } else {
        runningTotal *= numberArr[_i3];
      }

      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else if (operatorArr.includes("÷") && !operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("X")) {
    for (var _i4 = 1; _i4 < numberArr.length; _i4++) {
      if (runningTotal === 0) {
        runningTotal = numberArr[0] /= numberArr[_i4];
      } else {
        runningTotal /= numberArr[_i4];
      }

      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else {
    display.innerHTML = "One operator max/min";
    output.innerHTML = "Error!";
    return "Error!";
  }

  return runningTotal;
};

equals.addEventListener("click", function (event) {
  numberArr.push(Number(display.innerHTML));
  display.innerHTML = "";
  output.innerHTML = "";
  var currentTotal = calculate();
  numberArr = [];
});
ac.addEventListener("click", function (event) {
  display.innerHTML = "";
  output.innerText = "";
  operatorArr = [];
  numberArr = [];
  totalArr = [];
  runningTotal = 0;
  decimalCheckArr = [];
});