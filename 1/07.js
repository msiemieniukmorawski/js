// 7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let average = 0
let sum = 0
for (let i = 0; i < list.length; i++) {
    sum += list[i]
}
average = sum / list.length;
console.log(average)