import { Point, Edge, Polygon } from "./models.js";

export function loadPolygons(filename) {
    let A = new Point(20, 20, 0);
    let B = new Point(250, 250, 0);
    let C = new Point(230, 280, 0);

    const polygon = new Polygon(
        [new Edge(A, B), new Edge(B, C), new Edge(C, A)],
        '#00ff00'
    );

    A = new Point(500, 20, 0);
    B = new Point(300, 250, 0);
    C = new Point(400, 280, 0);

    const polygon2 = new Polygon(
        [new Edge(A, B), new Edge(B, C), new Edge(C, A)],
        '#ff0000'
    );

    A = new Point(10, 30, 0);
    B = new Point(10, 200, 0);
    C = new Point(1000, 200, 0);
    const D = new Point(1000, 170, 20);

    const polygon3 = new Polygon(
        [new Edge(A, B), new Edge(B, C), new Edge(C, D), new Edge(D, A)],
        '#0000ff'
    );

    const allPolygons = [];
    allPolygons.push(polygon);
    allPolygons.push(polygon2);
    allPolygons.push(polygon3);

    return allPolygons
}