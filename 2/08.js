const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

//8. Create a function that takes two parameters array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
function rendNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getLowerAtRandom(array, attempts) {
    let i = 1;
    let newArray = [];
    for (let i = 0; i < attempts; i++) {
        newArray.push(array[rendNumber(0, array.length)]);
    }
    console.log(newArray)
    return Math.min(...newArray)
}
console.log(getLowerAtRandom(list, 5))

