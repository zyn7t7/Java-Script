
function add() {
    var x = parseFloat(prompt(`Enter the value of x`));
    var y = parseFloat(prompt(`Enter the value of y`));
    return x + y;
}
var result = add()
console.log(`the sum of x and y is ${result}`);


function sub() {
    var x = parseFloat(prompt(`Enter the value of x`));
    var y = parseFloat(prompt(`Enter the value of y`));
    return x - y;
}
var result = sub()
console.log(`the sum of x and y is ${result}`);


function mul() {
    var x = parseFloat(prompt(`Enter the value of x`));
    var y = parseFloat(prompt(`Enter the value of y`));
    return x * y;
}
var result = mul()
console.log(`the sum of x and y is ${result}`);


function divd() {
    var x = parseFloat(prompt(`Enter the value of x`));
    var y = parseFloat(prompt(`Enter the value of y`));
    return x / y;
}
var result = divd()
console.log(`the sum of x and y is ${result}`);
////////////////////////////////////////////////////////////////

console.log(
    `Choose an option : \n
1.  Addition \n
2.  subtraction \n
3.  Multiplication  \n
4.  Division`
);

function calculator(x, y, operator) {

    switch (operator) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        default:
            return 'invalid operator';
            break;
    }
}

var x = parseFloat(prompt(`Enter the value of x`));
var operator = prompt (`enter the operator`)
var y = parseFloat(prompt(`Enter the value of y`));

var result = calculator(x, y, operator);
console.log(result);

