import { drawLine, drawLineIncludingOnePolygon, drawLineIncludingMultiplePolygons } from "./drawing.js";
import { SCREEN_HEIGHT, SCREEN_WIDTH, BACKGROUND_COLOR } from "./config.js";
import { loadPolygons } from "./loading.js"


const canvas = document.getElementById('canvas');
const graphics = canvas.getContext('2d');
const notProcessedEdges = [];
const currentlyProcessedEdges = [];

const allPolygons = loadPolygons("./examples/example6.json");

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
