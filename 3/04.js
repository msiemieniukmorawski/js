//Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y). Function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation and returns its value.

const addition = (x, y) => x + y;
const removal = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => x / y;

const calculation = () => {
    let operation;
    let x = 10;
    let y = 2;
    return {
        x: x,
        y: y,
        setOperation: (val) => operation = val,
        check: () => removal(x, y),
        Calculate: () => {
            switch (operation) {
                case 'removal':
                    return removal(x, y)

                case 'addition':
                    return addition(x, y)

                case 'multiplication':
                    return multiplication(x, y)

                case 'division':
                    return division(x, y)

                default:
                    break;
            }
        }
    }
}
doCalculate = calculation();
doCalculate.setOperation('division');
console.log(doCalculate.Calculate());