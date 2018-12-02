// Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object BaseObject = { X, sum: function (y){ return this.X+y}}


obArray = [{
        x: 3,
        sum: function(y = 2) {
            return this.x + y;
        }
    },
    {
        x: 9,
        sum: function(y = 5) {
            return this.x + y;
        }
    },
    {
        x: 12,
        sum: function(y = 6) {
            return this.x + y;
        }
    },
    {
        x: 2,
        sum: function(y = 8) {
            return this.x + y;
        }
    }
]

obArray.forEach((arrayItem) => {
    var x = arrayItem.sum(9)
    console.log(x);
});