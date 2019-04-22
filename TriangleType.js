
function TriangleType(orderedSides) {
    var result = "";
    var a = parseInt(orderedSides[0]);
    var b = parseInt(orderedSides[1]);
    var c = parseInt(orderedSides[2]);
    // console.log(orderedSides);
    if (a + b < c) {
        result = "Error";
    }
    else {
        if (a == b && b == c)
            result = result + "Equilateral" + " ";
        else {
            if (a == b || b == c)
                result = result + "Isosceles" + " ";
            if (a < b && b < c)
                result = result + "Scalene" + " ";
            if (a * a + b * b == c * c)
                result = result + "Right-angled" + " ";
            if (a * a + b * b < c * c)
                result = result + "Obtuse" + " ";
        }
    }
    return result;
}
exports.TriangleType = TriangleType;