class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Edge {
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
    }
}

class Polygon {
    constructor(arrayOfEdges) {
        this.arrayOfEdges = arrayOfEdges;
    }
}
