// 6) Choose all the indexes on the highest value from the given array.[1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98].2 loop runs.
let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
maxNum = list[0];
for (let i = 0; i < list.length; i++) {
    if (list[i] > maxNum) {
        maxNum = list[i]
    }
}
for (let i = 0; i < list.length; i++) {
    if (list[i] === maxNum) {
        console.log(i)
    }
}