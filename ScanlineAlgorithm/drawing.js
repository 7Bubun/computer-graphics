import { Point, Section } from "./models.js";
import { calculateEquationOfStraight } from "./utilities.js";
import { SCREEN_WIDTH, BACKGROUND_COLOR } from "./config.js";


export function drawLine(graphics, start, end, y, color) {
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
        const xOfIntersection = edge.isVertical ? edge.firstPoint.x : (y - edge.b) / edge.a;
        const p1 = edge.firstPoint;
        const p2 = edge.secondPoint;
        const coeffsXZ = calculateEquationOfStraight(p1.x, p1.z, p2.x, p2.z);
        const zOfIntersection = coeffsXZ.a * xOfIntersection + coeffsXZ.b;
        intersectionPoints.push(new Point(xOfIntersection, y, zOfIntersection, edge.polygon));
    });

    return intersectionPoints;
}

export function drawLineIncludingOnePolygon(currentlyProcessedEdges, y, graphics) {
    const intersectionPoints = calculateIntersectionPoints(currentlyProcessedEdges, y);

    intersectionPoints.sort(comparePointsByX);
    const firstPoint = intersectionPoints[0];
    const secondPoint = intersectionPoints[1];

    drawLine(graphics, 0, firstPoint.x, y, BACKGROUND_COLOR);
    drawLine(graphics, firstPoint.x, secondPoint.x, y, firstPoint.polygon.color);
    drawLine(graphics, secondPoint.x, SCREEN_WIDTH - 1, y, BACKGROUND_COLOR);
}

export function drawLineIncludingMultiplePolygons(currentlyProcessedEdges, y, graphics) {
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
        const consideredSections = sections.filter(section => section.xIsInRange(intersectionPoints[i].x + 1));
        let color = '#ffffff';

        if (consideredSections.length === 0) {
            color = BACKGROUND_COLOR;

        } else if (consideredSections.length === 1) {
            color = consideredSections[0].point1.polygon.color;

        } else {
            //TO DO for Ogóras: sortowanie odcinków (conisederedSections) po współrzędnej zet przecięcia i wybór koloru najbliższego,
            //wczytywanie danych z pliku, przetestowanie całości
            color = '#ffffff';
        }

        drawLine(graphics, intersectionPoints[i].x, intersectionPoints[i + 1].x, y, color);
    }

    drawLine(graphics, intersectionPoints[intersectionPoints.length - 1].x, SCREEN_WIDTH - 1, y, BACKGROUND_COLOR);
}
