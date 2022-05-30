function initDrawer(canvas) {
    var c = drawer.canvas = canvas
    var width = drawer.width = c.width
    var height = drawer.height = c.height
    var ctx = drawer.ctx = c.getContext("2d")
    drawer.xcenter = width / 2
    drawer.ycenter = height / 2
    var scale = drawer.scale = Math.min(width, height) / 2

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