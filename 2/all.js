const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

// 1. Create a function that returns the sum of all elements passed in array as parameter.

// function sum(listArray) {
//     let sum = 0;
//     for (let i = 0; i < listArray.length; i++) {
//         sum += listArray[i];
//     }
//     return sum;
// }
// console.log(sum(list))

// 2. Create a function that returns sum of first and last elements of given array.
// function sum(listArray) {
//     let sum = listArray[0] + listArray[listArray.length - 1];
//     return sum;
// }
// console.log(sum(list))

//3. Create a function that takes a number and return factorial of that number.
// function silnia(number) {
//     let i = 1
//     let silnia = 1
//     while (i <= number) {
//         silnia *= i;
//         i++;
//     }
//     return silnia
// }

// console.log(silnia(3));

//4. Create a function that returns given array in reverse order. 

// function revers(array) {
//     let newArray = [];
//     for (let i = array.length - 1; i > 0; i--) {
//         newArray.push(array[i]);
//     }
//     return newArray
// }
// console.log(revers(list));


//5. Create a function that takes a number and return factorial of that number.
// function pattern(params) {
//     let newList = []
//     for (let i = 0; i < params.length; i++) {
//         if (i % 2 === 0) {
//             newList.push(params[i] + params[i + 1])
//         }
//     }
//     return newList
// }
// console.log(pattern(list))

// 6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// const list2 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20]
// function pattern(params) {
//     let newList = []
//     for (let i = 0; i < params.length; i += 2) {
//         if (!list[i + 1]) {
//             newList.push(params[i] + params[i])
//         } else {
//             newList.push(params[i] + params[i + 1])
//         }
//     }
//     return newList
// }
// console.log(pattern(list2))


//7)	Create a function the return one random element from given array. // use random function 
// function rendNumber(min, max) {
//     return Math.floor(Math.random() * max) + min;
// }
// console.log(rendNumber(0, list.length));


//8. Create a function that takes two parameters array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
// function rendNumber(min, max) {
//     return Math.floor(Math.random() * max) + min;
// }

// function getLowerAtRandom(array, attempts) {
//     let i = 1;
//     let newArray = [];
//     for (let i = 0; i < attempts; i++) {
//         newArray.push(array[rendNumber(0, array.length)]);
//     }
//     console.log(newArray)
//     return Math.min(...newArray)
// }
// console.log(getLowerAtRandom(list, 5))

//9. Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.

// function rendNumber(min, max) {
//     return Math.floor(Math.random() * max) + min;
// }

// function getLowerAtRandom(array, attempts) {
//     let i = 1;
//     let newArray = [];
//     for (let i = 0; i < attempts; i++) {
//         newArray.push(array[rendNumber(0, array.length)]);
//     }
//     console.log(newArray)
//     return Math.min(...newArray)
// }
// console.log(getLowerAtRandom(list, 5))