// 13)	Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
function operation(a, b) {
    let arithmeticOperations = {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: a / b,
    }
    return arithmeticOperations;
}
console.log(operation(5, 10))