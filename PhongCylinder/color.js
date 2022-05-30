export function applyLightToColor(i, hslObject) {
    let l = intensityToLightness(i)
    hslObject.l = l
    return hslToString(hslObject)
}

function intensityToLightness(i) {
    return Math.min(100, i)
}

export function hslToString(hslObject) {
    return `hsl(${hslObject.h}, ${hslObject.s}%, ${hslObject.l}%)`
}