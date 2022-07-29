export function textXYZ(ar) {
    const re = /^[XYZ]*$/;
    return re.test(String(ar));
}
