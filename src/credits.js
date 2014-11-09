
Crafty.scene('Credits', function() {
    createBorderWalls();
    Crafty.background('#F7E9EF');
    var x=0;
    var y=1;
    this.bind("EnterFrame", function() {
            if(x<100)
                x++;
            else{
                if(y==1){
                    Crafty.background('#F3E9F7');
                    y=2;
                    x=0;
                } else if(y==2){
                    Crafty.background('#F4F8EC');
                    y=3;
                    x=0;
                } else if(y==3){
                    Crafty.background('#E9EAF7');
                    y=4;
                    x=0;
                } else if(y==4){
                    Crafty.background('#E9F6F7');
                    y=5;
                    x=0;
                } else {
                    Crafty.background('#F7E9EF');
                    y=1;
                    x=0;
                }
            }
    });

    Crafty.e('2D,DOM,Mouse,Text,Velocity,Collision, Bounce')
        .attr({
            x:0,
            y:0,
            w:600,
            h:70
        })
        .text("... Rory")
        .textFont({ size: '48px', 
            family: 'Helvetica',
            weight: 'bold'})
        .Velocity( 
            Crafty.math.randomInt(-1, 1),
            Crafty.math.randomInt(-1, 1)
        );

    Crafty.e('2D,DOM,Mouse,Text,Velocity,Collision, Bounce')
        .attr({
            x:0,
            y:500,
            w:600,
            h:70
        })
        .text("... Carlos")
        .textFont({ size: '48px', 
            family: 'Helvetica',
            weight: 'bold'})
        .Velocity( 
            Crafty.math.randomInt(-1, 1),
            Crafty.math.randomInt(-1, 1)
        );

    Crafty.e('2D,DOM,Mouse,Text,Velocity,Collision, Bounce')
        .attr({
            x:200,
            y:500,
            w:600,
            h:70
        })
        .text("... haodong")
        .textFont({ size: '48px', 
            family: 'Helvetica',
            weight: 'bold'})
        .Velocity( 
            Crafty.math.randomInt(-1, 1),
            Crafty.math.randomInt(-1, 1)
        );
        

    Crafty.e('2D,DOM,Mouse,Color')
        .attr({
            x:200,
            y:300,
            w:400,
            h:50
        })
        .color("gray");

    Crafty.e('2D,DOM,Mouse,Text')
       .attr({
            x:200,
            y:300,
            w:400,
            h:50
        })
        .text("Main Menu")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            Crafty.audio.stop();
            Crafty.scene('Menu');
        });

    Crafty.e('2D,DOM,Mouse,Color')
        .attr({
            x:200,
            y:400,
            w:400,
            h:50
        })
        .color("white");

    Crafty.e('2D,DOM,Mouse,Text')
       .attr({
            x:200,
            y:400,
            w:400,
            h:50
        })
        .text("Used Without Permission")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            Crafty.scene('AssetsCredits');
        });

});

Crafty.scene('AssetsCredits', function() {
    createBorderWalls();
    Crafty.background('#F7E9EF');
    var x=0;
    var y=1;
    this.bind("EnterFrame", function() {
            if(x<100)
                x++;
            else{
                if(y==1){
                    Crafty.background('#F3E9F7');
                    y=2;
                    x=0;
                } else if(y==2){
                    Crafty.background('#F4F8EC');
                    y=3;
                    x=0;
                } else if(y==3){
                    Crafty.background('#E9EAF7');
                    y=4;
                    x=0;
                } else if(y==4){
                    Crafty.background('#E9F6F7');
                    y=5;
                    x=0;
                } else {
                    Crafty.background('#F7E9EF');
                    y=1;
                    x=0;
                }
            }
    });

    Crafty.e('2D,DOM,Mouse,Text,Velocity,Collision, Bounce')
        .attr({
            x:0,
            y:0,
            w:600,
            h:70
        })
        .text("... Alice in Wonderland remix by odezenne")
        .textFont({ size: '48px', 
            family: 'Helvetica',
            weight: 'bold'})
        .Velocity( 
            Crafty.math.randomInt(-1, 1),
            Crafty.math.randomInt(-1, 1)
        );

    Crafty.e('2D,DOM,Mouse,Text,Velocity,Collision, Bounce')
        .attr({
            x:200,
            y:500,
            w:600,
            h:70
        })
        .text("... freesound.org")
        .textFont({ size: '48px', 
            family: 'Helvetica',
            weight: 'bold'})
        .Velocity( 
            Crafty.math.randomInt(-1, 1),
            Crafty.math.randomInt(-1, 1)
        );
        

    Crafty.e('2D,DOM,Mouse,Color')
        .attr({
            x:200,
            y:300,
            w:400,
            h:50
        })
        .color("gray");

    Crafty.e('2D,DOM,Mouse,Text')
       .attr({
            x:200,
            y:300,
            w:400,
            h:50
        })
        .text("Main Menu")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            Crafty.audio.stop();
            Crafty.scene('Menu');
        });

    Crafty.e('2D,DOM,Mouse,Color')
        .attr({
            x:200,
            y:400,
            w:400,
            h:50
        })
        .color("white");

    Crafty.e('2D,DOM,Mouse,Text')
       .attr({
            x:200,
            y:400,
            w:400,
            h:50
        })
        .text("Programmers/Designers")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            Crafty.scene('Credits');
        });

});

