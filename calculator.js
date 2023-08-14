const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".op");
const cancelButton = document.querySelector(".cancel");

let num1 = "";
let num2 = "";
let operator = "";

function operate(){
    let ans = 0;
    console.log(num1 + " " + operator + " " +num2);
    switch(operator){
        case "*": 
            ans = parseInt(num1, 10) * parseInt(num2, 10);
            break;
        case "/":
            ans =  Math.round((parseInt(num1, 10) / parseInt(num2, 10)) * 10) / 10;
            break;
        case "+": 
            ans = parseInt(num1, 10) + parseInt(num2, 10);
            break;
        case "-": 
            ans = parseInt(num1, 10) - parseInt(num2, 10);
            break;
    }
    display.textContent = `${ans}`;
    num1 = `${ans}`;
    operator = "";
    num2 = "";
}

numberButtons.forEach((button) => {
    button.addEventListener("click", function(){
        if(num1 === "" || operator === ""){
            num1 += button.id;
            console.log("NUM1 ADDED");
        }else if(operator !== ""){
            num2 += button.id;
            console.log("NUM2 ADDED");
        }
        display.textContent += button.id;
        console.log(button.id);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", function(){
        
        if(button.id === "equal"){
            console.log("EQUAL OP" + operator);
            if(num2 === ""){
                return;
            }
            operate();
            return;
        }
        if(operator !== "" || num1 === ""){
            return;
        }
        console.log(button.id);
        operator = button.id;
        console.log("CURR OP" + operator);
        display.textContent += ` ${operator} `;
    });
});

cancelButton.addEventListener("click", function(){
    operator = "";
    num1 = "";
    num2 = "";
    display.textContent = "";
});
