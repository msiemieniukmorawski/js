// 9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones.
let list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let val = 0;
for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
        val -= list[i]
    } else {
        val += list[i]
    }
}
console.log(val)