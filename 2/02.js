const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

// 2. Create a function that returns sum of first and last elements of given array.
function sum(listArray) {
    let sum = listArray[0] + listArray[listArray.length - 1];
    return sum;
}
console.log(sum(list))