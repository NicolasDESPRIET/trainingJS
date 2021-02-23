const Circle = require("./Circle");
const Point = require("./Point");

let c1 = new Circle(5,5,10);
let p1 = new Point(0, 0);

console.log(c1.toString());
console.log(c1.area());
console.log(c1.containsPoint(p1));