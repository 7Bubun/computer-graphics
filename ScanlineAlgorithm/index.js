import { Point, Edge, Polygon } from "./models.js";


function drawLine(graphics, start, end, y, color) {
    graphics.beginPath();
    graphics.strokeStyle = color;
    graphics.moveTo(Math.round(start), y);
    graphics.lineTo(Math.round(end), y);
    graphics.stroke();
}

function comparePointsByX(point1, point2) {
    return point1.x - point2.x;
}

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;
const BACKGROUND_COLOR = '#000000';

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

const allPolygons = [];
allPolygons.push(polygon);
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

    } else if (currentlyProcessedEdges.length === 1) {
        console.log('error');

    } else if (currentlyProcessedEdges.length === 2) {
        const intersectionPoints = [];

        currentlyProcessedEdges.forEach(edge => {
            const y = i;
            const xOfIntersection = (y - edge.b) / edge.a;
            intersectionPoints.push(new Point(xOfIntersection, y, -1, edge.polygon)); //TO DO: z
        });

        intersectionPoints.sort(comparePointsByX);
        const firstPoint = intersectionPoints[0];
        const secondPoint = intersectionPoints[1];

        drawLine(graphics, 0, firstPoint.x, i, BACKGROUND_COLOR);
        drawLine(graphics, firstPoint.x, secondPoint.x, i, firstPoint.polygon.color);
        drawLine(graphics, secondPoint.x, SCREEN_WIDTH - 1, i, BACKGROUND_COLOR);
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
