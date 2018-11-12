// 4) Choose highest and lowest values from the given array.[1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98].One loop run.
const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let maxNum = list[0];
let minNum = list[0];
for (let i = 0; i < list.length; i++) {
    if (list[i] > maxNum) {
        maxNum = list[i]
    }
    if (list[i] < minNum) {
        minNum = list[i]
    }
}
console.log('max number in the list is ' + maxNum + ' min number in the list is ' + minNum)
