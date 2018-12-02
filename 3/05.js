// Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.X+this.y}}

obArray = [{
        x: 3,
        y: 2,
        sum: function() {
            return this.x + this.y;
        }
    },
    {
        x: 9,
        y: 5,
        sum: function() {
            return this.x + this.y;
        }
    },
    {
        x: 1,
        y: 6,
        sum: function() {
            return this.x + this.y;
        }
    },
    {
        x: 2,
        y: 8,
        sum: function() {
            return this.x + this.y;
        }
    }
]

obArray.forEach((arrayItem) => {
    var x = arrayItem.sum()
    console.log(x);
});