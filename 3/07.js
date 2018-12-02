// Given an array of objects, for each object call operation() function in its context but from next object. If object is last get back to start of the array for operation function. In loop  (for or while)

const obArray = [{
        x: 1,
        y: 'object one value',
        operation() { return 'object one prafix ' + this.x + ' ' + this.y }
    },
    {
        x: 2,
        y: 'object two value',
        operation() { return 'object two prafix ' + this.x + ' ' + this.y }
    },
    {
        x: 3,
        y: 'object three value',
        operation(x) { return 'object three prafix ' + this.x + ' ' + this.y }
    },
]
let temp = obArray.map(a => {
    return {...a
    }
})


for (let i = 0; i < obArray.length; i++) {

    (obArray.length - 1 === i) ? obArray[i].x = temp[0].x: obArray[i].x = obArray[i + 1].x;

    console.log(obArray[i].operation())

}