
var canvas = new fabric.Canvas('canvas');
var topleftrect = new fabric.Rect({
    top: 0,
    left: 0,
    width: 25,
    height: 33.3,
    selectable: false,
    hoverCursor: 'default',
    fill: 'black',
    opacity: .15
});

var toprightrect = new fabric.Rect({
    top: 0,
    left: 225,
    width: 25,
    height: 33.3,
    selectable: false,
    hoverCursor: 'default',
    fill: 'black',
    opacity: .15
});

canvas.add(topleftrect);
canvas.add(toprightrect);