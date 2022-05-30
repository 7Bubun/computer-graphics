import { drawer } from './drawing.js';

let canvas = document.getElementById("canvas");

drawer.initDrawer(canvas);

let kA = 0.5
let kS = 0.5
let kD = 0.5
let n = 2
let sourceLocation = {
    "x": -2.0,
    "y": 3.0,
    "z": -1.0
}
let baseColor = {
    "h": 60,
    "s": 100,
    "l": 50
} //kolor podstawy
let sideColor = {
    "h": 120,
    "s": 100,
    "l": 50
} //kolor ściany bocznej

drawer.drawCylinder(kA, kS, kD, n, sourceLocation, baseColor, sideColor);