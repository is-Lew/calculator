const buttons = document.querySelectorAll("allButtons")
const numbers = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")

const display = document.getElementById("container__display");
const output = document.getElementById("container__output")
const equals = document.getElementById("equals");
const ac = document.getElementById("clear");

let firstNumber;
let secondNumber;
let thirdNumber;
let selectedOperator;
let result = 0;
let operatorArr =[];
let numberArr = [];
let firstTotal = 0;
let totalArr =[];
let runningTotal = 0;



numbers.forEach(item => {
    item.addEventListener("click", event => {
        display.innerHTML += item.innerHTML;
    })
})

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", event => {
        numberArr.push(Number(display.innerHTML));
        selectedOperator = operator[i].innerHTML;
        operatorArr.push (operator[i].innerHTML);
        output.innerHTML += display.innerHTML + " " + selectedOperator + " ";
        display.innerHTML = "";        
    })
    
}



    equals.addEventListener("click", event => {
        numberArr.push(Number(display.innerHTML));
        secondNumber = display.innerHTML
        display.innerHTML ="";
        output.innerHTML = "";

        if (operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("X") && !operatorArr.includes("÷")) {

            for (let i = 0; i < numberArr.length; i++) {
                runningTotal += numberArr[i];
                output.innerHTML = runningTotal;                        
            }
            
        } else if (operatorArr.includes("-") && !operatorArr.includes("+") && !operatorArr.includes("X") && !operatorArr.includes("÷")) {

            for (let i = 1; i < numberArr.length; i++) {
                runningTotal = numberArr[0] -= numberArr[i];
                output.innerHTML = runningTotal;                        
            }
            
        } else if (operatorArr.includes("X") && !operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("÷")) {

            for (let i = 1; i < numberArr.length; i++) {
                runningTotal = numberArr[0] *= numberArr[i];
                output.innerHTML = runningTotal;                        
            }
            
        } else if (operatorArr.includes("÷") && !operatorArr.includes("+") && !operatorArr.includes("-") && !operatorArr.includes("X")) {

            for (let i = 1; i < numberArr.length; i++) {
                runningTotal = numberArr[0] /= numberArr[i];
                output.innerHTML = runningTotal;                        
            }
                        
        } else {
            display.innerHTML ="Max operators exceeded";
            output.innerHTML = "Error!"
        }
        
        
        



ac.addEventListener ("click", (event) => {
    display.innerHTML = "";
    output.innerText = "";
    operatorArr = [];
    thirdNumber = 0;
    firstTotal = 0;
    numberArr = [];
    let totalArr =[];
    runningTotal = 0;
    
    
})

