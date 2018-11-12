const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

//5. Create a function that takes a number and return factorial of that number.
function pattern(params) {
    let newList = []
    for (let i = 0; i < params.length; i++) {
        if (i % 2 === 0) {
            newList.push(params[i] + params[i + 1])
        }
    }
    return newList
}
console.log(pattern(list))
