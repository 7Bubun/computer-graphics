let PHONG_C = 0.1

export function normalizeVector(vector) {
    let length = Math.sqrt(vector[0]*vector[0] + vector[1]*vector[1] + vector[2]*vector[2])
    return [vector[0]/length, vector[1]/length, vector[2]/length]
}

export function dis(p1, p2) {
    let x = p1.x - p2.x
    let y = p1.y - p2.y
    let z = p1.z - p2.z
    return x*x + y*y + z*z
}

export function phongEquation(params, iA, iP, N, V, point) {
    let r = dis(point, params.sourceLocation)
    let fAtt = 1/(PHONG_C + r)

    let L = normalizeVector([params.sourceLocation.x - point.x, params.sourceLocation.y - point.y, params.sourceLocation.z - point.z])

    let i = iA * params.kA
    if (dotProduct(N, L) < 0) {
        return i
    }
    let alpha = angleBetweenVectors(N, L) - angleBetweenVectors(N, V)
    i += fAtt*iP*params.kD*dotProduct(N, L)
    i += fAtt*iP*params.kS*Math.pow(Math.cos(alpha), params.n)
    return i
}

function dotProduct(v1, v2) {
    return v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2]
}

function angleBetweenVectors(v1, v2) {
    return Math.acos(dotProduct(v1, v2))
}