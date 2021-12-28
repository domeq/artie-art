function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}


function drawCircle(radius) {
    var circumference = calculateCircumference(radius);

    for (var i = 0; i <= 36; i++) {
        artie.forward(Math.ceil(circumference / 36));
        artie.right(10);
    }
}


artie.pendown();
drawCircle(50);
artie.penup();
artie.forward(20);
artie.right(90);
artie.forward(15);
artie.left(90);
artie.pendown()
drawCircle(10);
artie.penup();
artie.right(90);
artie.forward(35);
artie.left(90);
artie.pendown();
drawCircle(15);
artie.penup();
artie.right(90);
artie.forward(30);
artie.right(90);
artie.forward(25);
artie.right(75);
artie.pendown();
artie.forward(35);
artie.penup();
