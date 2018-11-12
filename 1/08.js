// 8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let average = 0;
let sum = 0;
let sumLeght = 1;
for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0 && i !== 0) {
        sum += list[i]
        sumLeght++;
    }
}
average = sum / sumLeght
console.log(average);