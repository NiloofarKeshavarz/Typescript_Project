// let message ;
// message = 'Niloofar';
// let endsWithR = (<string>message).endsWith('r');
// let includes = (message as string).includes('b');
// interface Point{  // this is a customed type  = Paskal naming
//     x: number,
//     y: number
// }
// let drawPoint = (point :Point) => {
// } 
//Cohesion violation^^^^^^^^
//how resolve it : Class
var Point2 = /** @class */ (function () {
    // x: number;
    // y : number;
    function Point2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('x1 =' + this.x + ' and y2= ' + this.y);
    };
    Point2.prototype.getDistance = function () {
        //...
    };
    Point2.prototype.getX = function () {
        return this.x;
    };
    return Point2;
}());
var point = new Point2();
point.getX();
//point.draw();
