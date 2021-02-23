const Point = require("./Point");

let p1 = new Point(10, 10);
console.log(p1.toString());

p1.x = 15;
p1.y = 8;

console.log(p1.x);
console.log(p1.y);
console.log(p1.toString());