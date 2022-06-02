import { drawer } from './drawing.js';

let canvas = document.getElementById("canvas");

drawer.initDrawer(canvas);

let kA = 0.8
let kS = 0.55
let kD = 0.05
let n = 2
let sourceLocation = {
    "x": 3.0,
    "y": 3.0,
    "z": -2.5
}
let baseColor = {
    "h": 120, //wartosc w stopniach 0 - 360
    "s": 55, //%
    "l": 50  //%
} //kolor podstawy
let sideColor = {
    "h": 120,
    "s": 55,
    "l": 50
} //kolor ściany bocznej

function draw() {
    drawer.drawCylinder(kA, kS, kD, n, sourceLocation, baseColor, sideColor)
}

let sideColorInput = document.getElementById('sideColor')
sideColorInput.setAttribute('value', sideColor.h)
sideColorInput.addEventListener('change', function (event) {
    sideColor.h = event.target.value
})

let baseColorInput = document.getElementById('baseColor')
baseColorInput.setAttribute('value', baseColor.h)
baseColorInput.addEventListener('change', function (event) {
    baseColor.h = event.target.value
})

let kaInput = document.getElementById('ka')
kaInput.setAttribute('value', kA)
kaInput.addEventListener('change', function (event) {
    kA = event.target.value
})

let ksInput = document.getElementById('ks')
ksInput.setAttribute('value', kS)
ksInput.addEventListener('change', function (event) {
    kS = event.target.value
})

let kdInput = document.getElementById('kd')
kdInput.setAttribute('value', kD)
kdInput.addEventListener('change', function (event) {
    kD = event.target.value
})

let nInput = document.getElementById('n')
nInput.setAttribute('value', n)
nInput.addEventListener('change', function (event) {
    n = event.target.value
})

let xInput = document.getElementById('x')
xInput.setAttribute('value', sourceLocation.x)
xInput.addEventListener('change', function (event) {
    sourceLocation.x = event.target.value
})

let yInput = document.getElementById('y')
yInput.setAttribute('value', sourceLocation.y)
yInput.addEventListener('change', function (event) {
    sourceLocation.y = event.target.value
})

let zInput = document.getElementById('z')
zInput.setAttribute('value', sourceLocation.z)
zInput.addEventListener('change', function (event) {
    sourceLocation.z = event.target.value
})

document.getElementById('submit').onclick = function () {
    draw()
}

draw()
