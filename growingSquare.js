var limit = 10;
var distanceUnit = 10;
var currentIteration;
var size;

artie.pendown();
for (currentIteration = 0; currentIteration < limit; currentIteration++) {
    size = distanceUnit * currentIteration + distanceUnit;
    artie.right(90);
    artie.forward(size);
    artie.right(90);
    artie.forward(size);
}
artie.penup();