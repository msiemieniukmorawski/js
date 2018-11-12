const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

// 6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
const list2 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20]
function pattern(params) {
    let newList = []
    for (let i = 0; i < params.length; i += 2) {
        if (!list[i + 1]) {
            newList.push(params[i] + params[i])
        } else {
            newList.push(params[i] + params[i + 1])
        }
    }
    return newList
}
console.log(pattern(list2))

