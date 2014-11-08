Crafty.init(600, 600, document.getElementById('game'));

var roof = Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:0,
        y:-100,
        w:600,
        h:100
    })
    .color("#000");
var floor = Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:0,
        y:600,
        w:600,
        h:100
    })
    .color("#000");

var left = Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:-100,
        y:0,
        w:100,
        h:600
    })
    .color("#000");
var right = Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:600,
        y:0,
        w:100,
        h:600
    })
    .color("#000");

var square = Crafty.e('Canvas,2D,Color,Velocity,Collision,Bounce')
    .attr({
        x:100,
        y:100,
        w:100,
        h:100
    })
    .Velocity( 
        Crafty.math.randomInt(-10, 10),
        Crafty.math.randomInt(-10, 10)
    )
    .color("green");

var square2 = Crafty.e('Canvas,2D,Color,Velocity,Collision,Bounce')
    .attr({
        x:300,
        y:300,
        w:100,
        h:100
    })
    .Velocity( 
        Crafty.math.randomInt(-10, 10),
        Crafty.math.randomInt(-10, 10)
    )
    .color("green");
var square3 = Crafty.e('Canvas,2D,Color,Velocity,Collision,Bounce')
    .attr({
        x:400,
        y:400,
        w:100,
        h:100
    })
    .Velocity( 
        Crafty.math.randomInt(-10, 10),
        Crafty.math.randomInt(-10, 10)
    )
    .color("green");
var square4 = Crafty.e('Canvas,2D,Color,Velocity,Collision,Bounce')
    .attr({
        x:400,
        y:400,
        w:100,
        h:100
    })
    .Velocity( 
        Crafty.math.randomInt(-10, 10),
        Crafty.math.randomInt(-10, 10)
    )
    .color("green");
