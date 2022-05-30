let CANVAS_SCALE = 2.0
let CYLINDER_AXIS_X = 0.0 //wspolrzedne osi walca
let CYLINDER_AXIS_Z = 2.0 //wspolrzedne osi walca
let CYLINDER_RADIUS = 1.0
let CYLINDER_HALFHEIGHT = 1.0 //polowa wysokosci walca
let CYLINDER_CENTER_Y = -1.0 //wspolrzedna Y srodka walca

let PROJECTION_A = -0.5 //wspolczynnik a rownania liniowego prostej rzutu ukosnego y = a*z + y_projekcji

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
    let params = {kA, kS, kD, n, sourceLocation}
    let colors = {baseColor, sideColor}
    
    for (let y=0; y<drawer.height; y++) {
        for (let x=0; x<drawer.width; x++) {
            drawer.ctx.fillStyle = getCylinderColor(x, y, params, colors)
            drawer.ctx.fillRect(x,y,1,1)
        }
    }
}

function getCylinderColor(x, y, params, colors) {
    let scaledCoords = scaleCoords(x,y)
    let xS = scaledCoords.x
    let yS = scaledCoords.y
    
    if (partOfBase(xS, yS)) {
        return getBaseColor(xS, yS, params, colors.baseColor)
    } else if (partofSide(xS,yS)) {
        return getSideColor(xS, yS, params, colors.sideColor)
    } else
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

function partOfBase(x, y) {
    let basePoint = projectionPlaneToYplane(x, y, CYLINDER_CENTER_Y + CYLINDER_HALFHEIGHT)
    return dis(
        {x: CYLINDER_AXIS_X, y: CYLINDER_CENTER_Y + CYLINDER_HALFHEIGHT, z:CYLINDER_AXIS_Z},
        basePoint
        ) <= CYLINDER_RADIUS
}

function getBaseColor(x, y, params, baseColor) {
    return baseColor
}

function projectionPlaneToYplane(x, y, planeY) { //oblicza wspolrzedne punktu powierzchni y=planeY, ktorego rzut jest w (x, y, 0)
    return {
        x,
        y: planeY,
        z: (planeY - y) / PROJECTION_A
    }
}

function partofSide(x, y) {
    let sidePoint = projectionPlaneToCylinderSide(x, y)
    return sidePoint != null
}

function projectionPlaneToCylinderSide(x, y) {
    let root = Math.sqrt(CYLINDER_RADIUS*CYLINDER_RADIUS - (x-CYLINDER_AXIS_X)*(x-CYLINDER_AXIS_X))
    let z1 = CYLINDER_AXIS_Z - root //mniejsza wspolrzedna z, wiec blizej obserwatora
    let z2 = CYLINDER_AXIS_Z + root
    let y1 = PROJECTION_A*z1 + y
    let y2 = PROJECTION_A*z2 + y
    if (y1 >= CYLINDER_CENTER_Y - CYLINDER_HALFHEIGHT && y1 <= CYLINDER_CENTER_Y + CYLINDER_HALFHEIGHT)
        return {
            x,
            y: y1,
            z: z1
        }
    else if (y2 >= CYLINDER_CENTER_Y - CYLINDER_HALFHEIGHT && y2 <= CYLINDER_CENTER_Y + CYLINDER_HALFHEIGHT)
        return {
            x,
            y: y2,
            z: z2
        }
    else
        return null
}

function getSideColor(x, y, params, sideColor) {
    return sideColor
}

function project(x, y, z) {
    return {
        x,
        y: y-PROJECTION_A*z
    }
}

function dis(p1, p2) {
    let x = p1.x - p2.x
    let y = p1.y - p2.y
    let z = p1.z - p2.z
    return x*x + y*y + z*z
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