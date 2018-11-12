// 14)	Create a function that takes array of objects given below and calls ‘show’ function if one is present on object.
let objects = [{
    id: 1,
    show: function() {
        console.log('first show');
    }
}, {
    id: 2
}, {
    id: 3,
    show: function() {
        console.log('third show');
    }
}];

function ifShwo(object) {
    object.forEach(element => {
        if ('show' in element) {
            element.show();
        }
    });
}
ifShwo(objects)