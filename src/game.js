Crafty.init(600, 600, document.getElementById('game'));

var roof = Crafty.e('Solid,Canvas,2D,Color,Collision')
    .attr({
        x:0,
        y:-100,
        w:600,
        h:100
    })
    .color("#000");
var floor = Crafty.e('Solid,Canvas,2D,Color,Collision')
    .attr({
        x:0,
        y:600,
        w:600,
        h:100
    })
    .color("#000");

var left = Crafty.e('Solid,Canvas,2D,Color,Collision')
    .attr({
        x:-100,
        y:0,
        w:100,
        h:600
    })
    .color("#000");
var right = Crafty.e('Solid,Canvas,2D,Color,Collision')
    .attr({
        x:600,
        y:0,
        w:100,
        h:600
    })
    .color("#000");

for (var i = 0; i < 5; i++) {
	var radius = Crafty.math.randomInt(50, 70);
	var ball = Crafty.e('Bounce,2D,Canvas,Circle,Velocity,Collision,Color')
		.Circle(
			Crafty.math.randomInt(0, 600),
			Crafty.math.randomInt(0, 600),
            Crafty.math.randomInt(50, 70)
        )
        .Velocity(
            Crafty.math.randomInt(-10, 10),
            Crafty.math.randomInt(-10, 10)
        )
        .color( "green" )
}

