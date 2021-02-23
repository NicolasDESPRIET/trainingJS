const Point = require("./Point");

class Circle{
    constructor(x, y, radius){
        this._point = new Point(x, y);
        this._radius = radius;
    }

    get point() {
        return this._point;
    }
     
    set point(point) {
        this._point = point;
    }

    get radius() {
        return this._radius;
    }
     
    set radius(radius) {
        this._radius = radius;
    }

    area(){
        return Math.PI*Math.pow(this._radius, 2);
    }

    containsPoint(point){
        if ( Math.sqrt( Math.pow(this._point.x - point.x, 2) + Math.pow(this._point.y - point.y, 2)) < this._radius){
            return true;
        }else{
            return false;
        }
    }

    toString(){
        return `cercle de centre ${this._point.toString()} et de rayon ${this._radius}`
    }
}

module.exports = Circle;