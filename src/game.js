var currentLevel=1;

function createBorderWalls() {
    // Put a click listener on whole game div
    Crafty.e('2D,Mouse,Control')
        .attr({
            x:0,
            y:0,
            w:800,
            h:600
        });

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

}

Crafty.scene('LevelOne',function(){

    Crafty.audio.play('AinW',-1);
    eatMeCount = 0;
    createBorderWalls();

    

    switch(currentLevel)
    {
        case 1:
            for(var i=0;i<7;i++){
                createRandomeatMe(10,15);
            }
            for(var i=0;i<3;i++){
                createRandomeatMe(16,20);
            }
            createRandomeatMe(20,20).addComponent('Alice');
            break;
        case 2:
            for(var i=0;i<15;i++){
                createRandomeatMe(3,5);
            }
            for(var i=0;i<8;i++){
                createRandomeatMe(7,10);
            }
            createRandomeatMe(8,8).addComponent('Alice');
            break;
        case 3:
            for(var i=0;i<8;i++){
                createRandomeatMe(3,5);
            }
            for(var i=0;i<10;i++){
                createRandomeatMe(7,10);
            }
            createRandomeatMe(8,8).addComponent('Alice');
            createRandomeatMe(20,20).setColor('red');
            break;
        default:
            for(var i=0;i<4*currentLevel;i++){
                createRandomeatMe(3,5);
            }
            for(var i=0;i<2*currentLevel;i++){
                createRandomeatMe(3+currentLevel,5+currentLevel);
            }
            createRandomeatMe(7,7).addComponent('Alice');
    }
});

Crafty.scene('LevelWallInTheMiddle',function(){
    
    Crafty.audio.play('AinW',-1);
    eatMeCount = 0;
    createBorderWalls();

    Crafty.e('Solid,Canvas,2D,Color,Velocity,Collision')
    .attr({
        x:200,
        y:200,
        w:400,
        h:200
    })
    .color("black");

    switch(currentLevel)
        {
            case 4:
                for(var i=0;i<7;i++){
                    createRandomeatMe(10,15,true);
                }
                for(var i=0;i<3;i++){
                    createRandomeatMe(16,20,true);
                }
                createRandomeatMe(20,20,true).addComponent('Alice');
                break;
            case 5:
                for(var i=0;i<15;i++){
                    createRandomeatMe(3,5,true);
                }
                for(var i=0;i<8;i++){
                    createRandomeatMe(7,10,true);
                }
                createRandomeatMe(8,8,true).addComponent('Alice');
                break;
            case 6:
                for(var i=0;i<8;i++){
                    createRandomeatMe(3,5,true);
                }
                for(var i=0;i<10;i++){
                    createRandomeatMe(7,10,true);
                }
                createRandomeatMe(8,8,true).addComponent('Alice');
                createRandomeatMe(20,20,true).setColor('red');
                break;
        }
});


