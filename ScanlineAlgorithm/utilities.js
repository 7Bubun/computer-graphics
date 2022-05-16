export function calculateEquationOfStraight(x1, y1, x2, y2) {
    // xa + b = y
    let W = x1 - x2;
    let Wa = y1 - y2;
    let Wb = x1 * y2 - x2 * y1;
    return { 'a': Wa / W, 'b': Wb / W };
}
