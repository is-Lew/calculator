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
let firstTotal;



numbers.forEach(item => {
    item.addEventListener("click", event => {
        display.innerHTML += item.innerHTML;
    })
})

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", event => {
        firstNumber= display.innerHTML;
        selectedOperator = operator[i].innerHTML;
        operatorArr += operator[i].innerHTML;
        output.innerHTML += display.innerHTML + " " + selectedOperator + " ";

        if (output.innerHTML.includes(selectedOperator) && (operatorArr.length <= 1)) {                   
            
            display.innerHTML = "";
            
        } else if (output.innerHTML.includes("+") && (operatorArr.length >= 2)) {
            thirdNumber = display.innerHTML; 
            output.innerHTML = (Number(firstNumber) + Number(thirdNumber) + " "  + selectedOperator);
            display.innerHTML = "";
            firstTotal = Number(firstNumber) + Number(thirdNumber)
        } else if (output.innerHTML.includes("-") && (operatorArr.length >= 2)) {
            thirdNumber = display.innerHTML; 
            output.innerHTML = (Number(firstNumber) - Number(thirdNumber) + " "  + selectedOperator);
            display.innerHTML = "";
            firstTotal = Number(firstNumber) + Number(thirdNumber)
        } else if (output.innerHTML.includes("X") && (operatorArr.length >= 2)) {
            thirdNumber = display.innerHTML; 
            output.innerHTML = (Number(firstNumber) * Number(thirdNumber) + " "  + selectedOperator);
            display.innerHTML = "";
            firstTotal = Number(firstNumber) + Number(thirdNumber)
        } else if (output.innerHTML.includes("÷") && (operatorArr.length >= 2)) {
            thirdNumber = display.innerHTML; 
            output.innerHTML = (Number(firstNumber) / Number(thirdNumber) + " "  + selectedOperator);
            display.innerHTML = "";
            firstTotal = Number(firstNumber) + Number(thirdNumber)
        } 
        console.log(thirdNumber)
        console.log(firstTotal)
    })
    
}

console.log(thirdNumber)

    equals.addEventListener("click", event => {
        secondNumber = display.innerHTML
        display.innerHTML ="";
        output.innerHTML = "";

        if (selectedOperator == "+" && (operatorArr.length == 2)) {
                result = Number(firstNumber) + Number(secondNumber) + Number(thirdNumber);
                
                output.innerHTML = result
                
            
        }   else if (selectedOperator == "-" && (operatorArr.length == 2)) {
                result = Number(firstNumber) - Number(secondNumber) - Number(thirdNumber);
                
                output.innerHTML = result
        }   else if (selectedOperator == "÷" && (operatorArr.length == 2)) {
                result = Number(firstNumber) / Number(secondNumber) / Number(thirdNumber);
                
                output.innerHTML = result
        }   else if (selectedOperator == "X" && (operatorArr.length == 2)) {
                result = Number(firstNumber) * Number(secondNumber) * Number(thirdNumber);
            
                output.innerHTML = result           
        }   else if (selectedOperator == "-" ) {
            result = Number(firstNumber) - Number(secondNumber);
            
            output.innerHTML = result
        }   else if (selectedOperator == "÷") {
            result = Number(firstNumber) / Number(secondNumber);
            
            output.innerHTML = result
        }   else if (selectedOperator == "X") {
            result = Number(firstNumber) * Number(secondNumber);
        
            output.innerHTML = result           
        }   else if (selectedOperator == "+") {
            result = Number(firstNumber) + Number(secondNumber);
        
            output.innerHTML = result           
        }   
        // else if (operatorArr.length >= 3) {
        //     result = "Error!";

        //     output.innerHTML = result
        // }
       
    })




ac.addEventListener ("click", (event) => {
    display.innerHTML = "";
    output.innerText = "";
    operatorArr = [];
    thirdNumber = 0;
    firstTotal = 0;
    
})


// let calculate = () => {
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

