// 5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run
let list = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
let longestString = '';
for (let i = 0; i < list.length; i++) {
    if (list[i].length > longestString.length) {
        longestString = list[i]
    }
}
console.log(longestString);