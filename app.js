const result = document.querySelector("#result");
let firstNum = 0;
let operator = "";
let currNum = "";
document.querySelectorAll(".num").forEach(a => a.addEventListener("click", ev => onNum(ev)));
document.querySelectorAll(".operators").forEach(a => a.addEventListener("click", ev => onOperator(ev)));

function onNum(ev) {
    if(operator == "=") {
        clear();
    };
    const num = ev.target.textContent;
    currNum += num;
    result.textContent = currNum;
}
function onOperator(ev) {
    if (ev.target.textContent == "C") {
        result.textContent = 0;
        clear();
        return;
    };
    if (ev.target.textContent == "=") {
        calculate(firstNum, currNum, operator);
        operator = ev.target.textContent;
        return;
    }
    if (!operator || operator == "=") {
        if (!firstNum) {
            firstNum = currNum;
            currNum = "";
        }
        operator = ev.target.textContent;
    } else if (operator) {
        calculate(firstNum, currNum, operator);
        operator = ev.target.textContent;
    };
}


function calculate(firstN, secondN, operator) {
    if (firstN, secondN, operator) {
        let res = 0;
        switch(operator) {
            case "+": res = Number(Number(firstN) + Number(secondN)); break;
            case "-": res = Number(Number(firstN) - Number(secondN)); break;
            case "/": res = Number(Number(firstN) / Number(secondN)); break;
            case "*": res = Number(Number(firstN) * Number(secondN)); break;
        };
        result.textContent = res;
        firstNum = res;
        currNum = "";
    }
}

function clear() {
    firstNum = 0;
    currNum = "";
    operator = "";
};