var unit = 10;
var step;
var rev = "reverse";

function pythag(a, b, direction) {
    var a2 = Math.pow((a * unit), 2);
    var b2 = Math.pow((b * unit), 2);
    var hypo = Math.sqrt(a2 + b2);
    if (direction == rev) {
        artie.back(hypo);
    } else {
        artie.forward(hypo);
    }
}

artie.pendown();
artie.forward(5 * unit);
artie.right(90);
artie.forward(6 * unit);
artie.right(90);
artie.forward(5 * unit);
artie.right(45);
pythag(3, 3);
artie.right(90);
pythag(3, 3);
artie.right(135);
artie.forward(6 * unit);
artie.penup()