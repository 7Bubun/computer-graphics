import { calculateEquationOfStraight } from './utilities.js';


export class Point {
    constructor(x, y, z, polygon = null) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.polygon = polygon;
    }
}

export class Edge {
    constructor(firstPoint, secondPoint) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;

        if (firstPoint.y > secondPoint.y) {
            this.maxY = firstPoint.y;
            this.minY = secondPoint.y;

        } else {
            this.maxY = secondPoint.y;
            this.minY = firstPoint.y;
        }

        if (firstPoint.x === secondPoint.x) {
            this.isVertical = true;

        } else {
            //y = ax + b
            const coeffs = calculateEquationOfStraight(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y);
            this.a = coeffs.a;
            this.b = coeffs.b;
            this.isVertical = false;
        }
    }
}

export class Polygon {
    constructor(arrayOfEdges, color) {
        this.arrayOfEdges = arrayOfEdges;
        this.color = color;

        arrayOfEdges.forEach(edge => {
            edge.polygon = this;
            edge.firstPoint.polygon = this;
            edge.secondPoint.polygon = this;
        });
    }
}

export class Section {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;

        if (point1.x > point2.x) {
            this.maxX = point1.x;
            this.minX = point2.x;

        } else {
            this.maxX = point2.x;
            this.minX = point1.x;
        }

        //z = ax + b
        const coeffs = calculateEquationOfStraight(point1.x, point1.z, point2.x, point2.z);
        this.aXZ = coeffs.a;
        this.bXZ = coeffs.b;
    }

    includesPoint(point) {
        return point == this.point1 || point == this.point2;
    }

    xIsInRange(x) {
        return x <= this.maxX && x >= this.minX;
    }

    calculateZ(x) {
        return (this.point2.z - this.point1.z) / (this.point2.x - this.point1.x) * (x - this.point1.x) + this.point1.z;
    }
}
