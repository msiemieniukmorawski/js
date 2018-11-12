const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

// 1. Create a function that returns the sum of all elements passed in array as parameter.
function sum(listArray) {
    let sum = 0;
    for (let i = 0; i < listArray.length; i++) {
        sum += listArray[i];
    }
    return sum;
}
console.log(sum(list))
