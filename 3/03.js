//Create a function definition (arrow ). This function is to take one input string/number and is to return object described in point above with value set to input.

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