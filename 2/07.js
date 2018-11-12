const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

//7)	Create a function the return one random element from given array. // use random function 
function rendNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}
console.log(rendNumber(0, list.length));
