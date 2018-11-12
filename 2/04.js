const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

//4. Create a function that returns given array in reverse order. 

function revers(array) {
    let newArray = [];
    for (let i = array.length - 1; i > 0; i--) {
        newArray.push(array[i]);
    }
    return newArray
}
console.log(revers(list));

