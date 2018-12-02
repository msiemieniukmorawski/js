//Create an iffe that returns an object with three fields: variable value, function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value type string or number if number to (*(-1)) is string can be converted to umber do so.

(CreaetObj = (variable = 'mars') => {
    return {
        val: variable,
        showValue: () => variable,
        reverseValue: () => (typeof(variable) === 'string') ? variable.split("").reverse().join("") : variable * (-1)
    };
})();

iffe = CreaetObj();
console.log(iffe.showValue());
console.log(iffe.reverseValue());