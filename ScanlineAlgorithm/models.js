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
        
        if(firstPoint.y > secondPoint.y) {
            this.maxY = firstPoint.y;
            this.minY = secondPoint.y;
        
        } else {
            this.maxY = secondPoint.y;
            this.minY = firstPoint.y;
        }

        //y = ax + b
        const coeffs = calculateEquationOfStraight(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y);
        this.a = coeffs.a;
        this.b = coeffs.b;
    }
}

export class Polygon {
    constructor(arrayOfEdges, color) {
        this.arrayOfEdges = arrayOfEdges;
        this.color = color;

        arrayOfEdges.forEach(element => {
            element.polygon = this;
        });
    }
}
