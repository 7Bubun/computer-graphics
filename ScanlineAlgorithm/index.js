import { Point, Edge, Polygon } from "./models.js";
import { drawLine, drawLineIncludingOnePolygon, drawLineIncludingMultiplePolygons } from "./drawing.js";
import { SCREEN_HEIGHT, SCREEN_WIDTH, BACKGROUND_COLOR } from "./config.js";


const canvas = document.getElementById('canvas');
const graphics = canvas.getContext('2d');
const notProcessedEdges = [];
const currentlyProcessedEdges = [];

//mock start
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
//mock end

allPolygons.forEach(polygon => {
    polygon.arrayOfEdges.forEach(edge => {
        if (edge.maxY !== edge.minY) {
            notProcessedEdges.push(edge);
        }
    });
});

for (let i = SCREEN_HEIGHT - 1; i >= 0; i--) {
    if (currentlyProcessedEdges.length === 0) {
        drawLine(graphics, 0, SCREEN_WIDTH - 1, i, BACKGROUND_COLOR);

    } else if (currentlyProcessedEdges.length % 2 === 1) {
        console.log('error');

    } else if (currentlyProcessedEdges.length === 2) {
        drawLineIncludingOnePolygon(currentlyProcessedEdges, i, graphics);

    } else {
        drawLineIncludingMultiplePolygons(currentlyProcessedEdges, i, graphics);
    }

    const freshEdges = notProcessedEdges.filter(edge => edge.maxY === i);

    for (let j = 0; j < freshEdges.length; j++) {
        currentlyProcessedEdges.push(freshEdges[j]);
        const index = notProcessedEdges.indexOf(freshEdges[j]);
        notProcessedEdges.splice(index, 1);
    }

    const finishedEdges = currentlyProcessedEdges.filter(edge => edge.minY === i);

    for (let j = 0; j < finishedEdges.length; j++) {
        const index = currentlyProcessedEdges.indexOf(finishedEdges[j]);
        currentlyProcessedEdges.splice(index, 1);
    }
}
