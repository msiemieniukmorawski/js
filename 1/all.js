// 1)	From years in array check for leap years [1974, 1900, 1985, 2000]
// const years = [1974, 1900, 1985, 2000];
// for (let i = 0; i < years.length; i++) {
//     if (years[i] % 4 == 0 || years[i] % 100 != 0 && years[i] % 400 === 0) {
//         console.log(years[i] + ' is leap years');
//     } else {
//         console.log(years[i] + 'is not leap year');
//     }
// }


// 2)	Calculate factorial of 7.
// const number = 7;
// let silnia = 1;
// let i = 1;
// while (i <= number) {
//     silnia *= i;
//     i++;
// }
// console.log(silnia);


// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// for (let i = 0; i < list.length; i++) {
//     sum += list[i];
// }
// console.log(sum);


// 4) Choose highest and lowest values from the given array.[1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98].One loop run.
// const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let maxNum = list[0];
// let minNum = list[0];
// for (let i = 0; i < list.length; i++) {
//     if (list[i] > maxNum) {
//         maxNum = list[i]
//     }
//     if (list[i] < minNum) {
//         minNum = list[i]
//     }
// }
// console.log('max number in the list is ' + maxNum + ' min number in the list is ' + minNum)



// 5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run
// let list = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
// let longestString = '';
// for (let i = 0; i < list.length; i++) {
//     if (list[i].length > longestString.length) {
//         longestString = list[i]
//     }
// }
// console.log(longestString);



// 6) Choose all the indexes on the highest value from the given array.[1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98].2 loop runs.
// let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// maxNum = list[0];
// for (let i = 0; i < list.length; i++) {
//     if (list[i] > maxNum) {
//         maxNum = list[i]
//     }
// }
// for (let i = 0; i < list.length; i++) {
//     if (list[i] === maxNum) {
//         console.log(i)
//     }
// }


// 7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let average = 0
// let sum = 0
// for (let i = 0; i < list.length; i++) {
//     sum += list[i]
// }
// average = sum / list.length;
// console.log(average)

// 8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let average = 0;
// let sum = 0;
// let sumLeght = 1;
// for (let i = 0; i < list.length; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         sum += list[i]
//         sumLeght++;
//     }
// }
// average = sum / sumLeght
// console.log(average);


// 9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones.
// let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let val = 0;
// for (let i = 0; i < list.length; i++) {
//     if (i % 2 === 0) {
//         val -= list[i]
//     } else {
//         val += list[i]
//     }
// }
// console.log(val)