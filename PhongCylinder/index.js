import { drawer } from './drawing.js';

let canvas = document.getElementById("canvas");

drawer.initDrawer(canvas);

let kA = 0.1
let kS = 0.75
let kD = 0.25
let n = 100
let sourceLocation = {
    "x": 1.0,
    "y": 2.2,
    "z": -3.0
}
let baseColor = {
    "h": 60, //wartosc w stopniach 0 - 360
    "s": 55, //%
    "l": 50  //%
} //kolor podstawy
let sideColor = {
    "h": 120,
    "s": 55,
    "l": 50
} //kolor ściany bocznej

drawer.drawCylinder(kA, kS, kD, n, sourceLocation, baseColor, sideColor);