
Crafty.scene('MainGame',function(){

    //Create the walls
    Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:0,
        y:0,
        w:800,
        h:5
    })
    .color("black");
    Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:0,
        y:0,
        w:5,
        h:600
    })
    .color("black");
    Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:0,
        y:595,
        w:800,
        h:5
    })
    .color("black");
    Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:795,
        y:0,
        w:5,
        h:800
    })
    .color("black");

    //Create 5 eatMes
    for(var i=0;i<5;i++){
        createRandomeatMe();
    }
});

