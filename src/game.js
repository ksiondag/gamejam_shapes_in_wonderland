$( document ).ready( function() {
    Crafty.init(600, 600, document.getElementById('game'));

    var roof = Crafty.e('Solid,Canvas,2D,Color,Collision')
        .attr({
            x:0,
            y:-100,
            w:600,
            h:100
        })
        .color('#000');
    var floor = Crafty.e('Solid,Canvas,2D,Color,Collision')
        .attr({
            x:0,
            y:600,
            w:600,
            h:100
        })
        .color('#000');

    var left = Crafty.e('Solid,Canvas,2D,Color,Collision')
        .attr({
            x:-100,
            y:0,
            w:100,
            h:600
        })
        .color('#000');
    var right = Crafty.e('Solid,Canvas,2D,Color,Collision')
        .attr({
            x:600,
            y:0,
            w:100,
            h:600
        })
        .color('#000');

    var clickSpace = Crafty.e('2D,Mouse,Control')
        .attr({
            x:0,
            y:0,
            w:600,
            h:600
        });

    for (var i = 0; i < 10; i++) {
        Crafty.e('Mouse,Canvas,2D,Color,Velocity,Collision,Bounce,Alice,Clickable')
            .attr({
                x: Crafty.math.randomInt(0,530),
                y: Crafty.math.randomInt(0,530),
                w: Crafty.math.randomInt(50,70),
                h: Crafty.math.randomInt(50,70)
            })
            .Velocity(
                0,
                0,
                Crafty.math.randomInt(-10, 10),
                Crafty.math.randomInt(-10, 10)
            )
    }
});
