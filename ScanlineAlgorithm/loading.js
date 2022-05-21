import { Point, Edge, Polygon } from "./models.js";

export function loadPolygons(filename) {
    let polygonsFromJSON = readJSON(filename);

    const allPolygons = [];

    polygonsFromJSON.forEach(polygonFromJSON => {
        let points = [];
        polygonFromJSON.points.forEach(pointFromJSON => {
            points.push(new Point(pointFromJSON.x, pointFromJSON.y, pointFromJSON.z));
        })
        let edges = [];
        points.forEach((point, index) => {
            if (index === points.length - 1) {
                edges.push(new Edge(point, points[0]));
            } else {
                edges.push(new Edge(point, points[index + 1]));
            }
        })
        allPolygons.push(new Polygon(edges, polygonFromJSON.color));
    })
    
    return allPolygons
}

function readJSON(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return JSON.parse(result);
}