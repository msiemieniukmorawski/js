// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum = 0;
for (let i = 0; i < list.length; i++) {
    sum += list[i];
}
console.log(sum);