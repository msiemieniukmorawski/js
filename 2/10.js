const list = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98, 7, 6, 7, 19, 20, 11]

// 10)	Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

function performOperation(list) {
    let tmp = 0;
    let tmpaction = '';
    for (let i = 0; i < list.length; i++) {
        let action = Math.round(Math.random());
        if (action) {
            tmp -= list[i];
            tmpaction += list[i] + ' - ';
        } else {
            tmp += list[i];
            tmpaction += list[i] + ' + ';
        }
    }

    tmpaction = tmpaction.substring(0, tmpaction.length - 2);

    return tmp;
}
console.log(performOperation(list))