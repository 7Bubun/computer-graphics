let CANVAS_SCALE = 2

function initDrawer(canvas) {
    var c = drawer.canvas = canvas
    var width = drawer.width = c.width
    var height = drawer.height = c.height
    var ctx = drawer.ctx = c.getContext("2d")
    drawer.xcenter = width / 2
    drawer.ycenter = height / 2
    var scale = drawer.scale = Math.min(width, height) / 2 / CANVAS_SCALE

    clearCanvas()
}

function clearCanvas () {
    var c = drawer.canvas
    var ctx = drawer.ctx
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, c.width, c.height)
}

function drawCylinder(kA, kS, kD, n, sourceLocation, baseColor, sideColor) {
    clearCanvas()
    
    for (let y=0; y<drawer.height; y++) {
        for (let x=0; x<drawer.width; x++) {
            drawer.ctx.fillStyle = getCylinderColor(x, y)
            drawer.ctx.fillRect(x,y,1,1)
        }
    }
}

function getCylinderColor(x, y) {
    let scaledCoords = scaleCoords(x,y)
    let xS = scaledCoords.x
    let yS = scaledCoords.y
    return "black"
}

function scaleCoords(x, y) {
    let scaledX = (x - drawer.xcenter) / drawer.scale
    let scaledY = -(y - drawer.ycenter) / drawer.scale
    return {
        x: scaledX,
        y: scaledY
    }
}

export var drawer = {
    initDrawer: initDrawer,
    drawCylinder: drawCylinder,
    canvas : null,
    width : 0.0,
    height : 0.0,
    ctx : null,
    xcenter : 0.0,
    ycenter : 0.0,
    scale : 0.0
}