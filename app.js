const buttons = document.querySelectorAll("allButtons");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.getElementById("container__display");
const output = document.getElementById("container__output");
const equals = document.getElementById("equals");
const ac = document.getElementById("clear");
const decimal = document.getElementById("decimal")

let selectedOperator;
let operatorArr = [];
let numberArr = [];
let totalArr = [];
let runningTotal = 0;
let decimalCheckArr =[];

const decimalCheck = () => {
    decimalCheckArr.push(display.innerHTML)
    if (decimalCheckArr.join().includes("..")) {
        display.innerHTML = "Two decimals in input";
        output.innerHTML = "Error!";
    } 
}
numbers.forEach((item) => {
  item.addEventListener("click", (event) => {
    display.innerHTML += item.innerHTML;
    decimalCheck();
  });
});

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", (event) => {
    
    numberArr.push(Number(display.innerHTML));
    selectedOperator = operator[i].innerHTML;
    operatorArr.push(operator[i].innerHTML);
    output.innerHTML += display.innerHTML + " " + selectedOperator + " ";
    display.innerHTML = "";
           
  });
}



const calculate = () => {
  if (
    operatorArr.includes("+") &&
    !operatorArr.includes("-") &&
    !operatorArr.includes("X") &&
    !operatorArr.includes("÷")
  ) {
    for (let i = 0; i < numberArr.length; i++) {
      runningTotal += numberArr[i];
      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else if (
    operatorArr.includes("-") &&
    !operatorArr.includes("+") &&
    !operatorArr.includes("X") &&
    !operatorArr.includes("÷")
  ) {
    for (let i = 1; i < numberArr.length; i++) {
      if (runningTotal === 0) {
        runningTotal = numberArr[0] -= numberArr[i];
      } else {
        runningTotal -= numberArr[i];
      }
      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else if (
    operatorArr.includes("X") &&
    !operatorArr.includes("+") &&
    !operatorArr.includes("-") &&
    !operatorArr.includes("÷")
  ) {
    for (let i = 1; i < numberArr.length; i++) {
      if (runningTotal === 0) {
        runningTotal = numberArr[0] *= numberArr[i];
      } else {
        runningTotal *= numberArr[i];
      }
      output.innerHTML = runningTotal;
      operatorArr = [];
    }
  } else if (
    operatorArr.includes("÷") &&
    !operatorArr.includes("+") &&
    !operatorArr.includes("-") &&
    !operatorArr.includes("X")
  ) {
    for (let i = 1; i < numberArr.length; i++) {
      if (runningTotal === 0) {
        runningTotal = numberArr[0] /= numberArr[i];
      } else {
        runningTotal /= numberArr[i];
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

equals.addEventListener("click", (event) => {
  numberArr.push(Number(display.innerHTML));

  display.innerHTML = "";
  output.innerHTML = "";

  const currentTotal = calculate();
  numberArr = [];
});

ac.addEventListener("click", (event) => {
  display.innerHTML = "";
  output.innerText = "";
  operatorArr = [];
  numberArr = [];
  totalArr = [];
  runningTotal = 0;
  decimalCheckArr =[];
});
