import { Point, Edge, Polygon, Section } from "./models.js";


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

function calculateIntersectionPoints(currentlyProcessedEdges, y) {
    const intersectionPoints = [];

    currentlyProcessedEdges.forEach(edge => {
        const xOfIntersection = (y - edge.b) / edge.a;
        intersectionPoints.push(new Point(xOfIntersection, y, -1, edge.polygon)); //TO DO: z
    });

    return intersectionPoints;
}

function drawLineIncludingOnePolygon(currentlyProcessedEdges, y, graphics) {
    const intersectionPoints = calculateIntersectionPoints(currentlyProcessedEdges, y);

    intersectionPoints.sort(comparePointsByX);
    const firstPoint = intersectionPoints[0];
    const secondPoint = intersectionPoints[1];

    drawLine(graphics, 0, firstPoint.x, y, BACKGROUND_COLOR);
    drawLine(graphics, firstPoint.x, secondPoint.x, y, firstPoint.polygon.color);
    drawLine(graphics, secondPoint.x, SCREEN_WIDTH - 1, y, BACKGROUND_COLOR);
}

function drawLineIncludingMultiplePolygons(currentlyProcessedEdges, y, graphics) {
    const intersectionPoints = calculateIntersectionPoints(currentlyProcessedEdges, y);
    const sections = [];

    for (let i = 0; i < intersectionPoints.length - 1; i++) {
        for (let j = i + 1; j < intersectionPoints.length; j++) {
            const firstPoint = intersectionPoints[i];
            const secondPoint = intersectionPoints[j];

            if (firstPoint.polygon == secondPoint.polygon) {
                sections.push(new Section(firstPoint, secondPoint));
            }
        }
    }

    intersectionPoints.sort(comparePointsByX);
    drawLine(graphics, 0, intersectionPoints[0].x, y, intersectionPoints[0].polygon);

    for (let i = 0; i < intersectionPoints.length - 1; i++) {
        const consideredSections = sections.filter(section => section.xIsInRange(intersectionPoints[i].x));
        let color = '#ffffff';

        const nextSections = sections.filter(section => section.xIsInRange(intersectionPoints[i].x + 1));

        if (nextSections.length === 0) {
            color = BACKGROUND_COLOR;

        } else if (nextSections.length === 1) {
            color = nextSections[0].point1.polygon.color;

        } else {
            color = '#ffffff';
        }

        drawLine(graphics, intersectionPoints[i].x, intersectionPoints[i + 1].x, y, color);
    }

    drawLine(graphics, intersectionPoints[intersectionPoints.length - 1].x, SCREEN_WIDTH - 1, y, BACKGROUND_COLOR);
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

A = new Point(500, 20, 0);
B = new Point(300, 250, 0);
C = new Point(400, 280, 0);

const polygon2 = new Polygon(
    [new Edge(A, B), new Edge(B, C), new Edge(C, A)],
    '#ff0000'
);

A = new Point(10, 30, 0);
B = new Point(12, 200, 0);
C = new Point(1002, 202, 0);
const D = new Point(1000, 170, 0);

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
