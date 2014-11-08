Crafty.init(600, 600, document.getElementById('game'));

var radius = 10;
var ball = Crafty.e('Canvas,2D,Color,Velocity')
    .attr({
        x:0,
        y:Crafty.math.randomInt(0,600),
        w:10,
        h:10
    })
    .Velocity( 
        Crafty.math.randomInt(0,0),
        0
    )
    .color("green");

var radius2 = 20;
var ball2 = Crafty.e('Canvas,2D,Color,Velocity')
    .attr({
        x:0,
        y:Crafty.math.randomInt(0,600),
        w:10,
        h:10
    })
    .Velocity( 
        1,
        0
    )
    .color("green");
