Crafty.init(600, 600, document.getElementById('game'));

var square = Crafty.e('Friend,DOM,2D,Color,Velocity,Collision,Bounce')
    .attr({
        x:0,
        y:0,
        w:100,
        h:100
    })
    .Velocity( 
        10,
        10
    )
    .color("green");

var square2 = Crafty.e('Friend,DOM,2D,Color,Velocity,Collision,Bounce')
    .attr({
        x:50,
        y:50,
        w:100,
        h:100
    })
    .Velocity( 
        -10,
        -10
    )
    .color("green");
