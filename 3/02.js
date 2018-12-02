// Change the above iffe. So that returned object doesn’t publicly allow access to value but instead of that gives us a function setValue(). Purpose of this function is quite easy to grasp. Closure pattern.

(CreaetObj = () => {
    let variable;
    return {
        setValue: (val) => variable = val,
        showValue: () => variable,
        reverseValue: () => (typeof(variable) === 'string') ? variable.split("").reverse().join("") : variable * (-1)
    };
})();

iffe = CreaetObj();
iffe.setValue('mars')
console.log(iffe.showValue());
console.log(iffe.reverseValue());