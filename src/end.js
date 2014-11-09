
Crafty.scene('GameOver', function() {
    createBorderWalls();
    Crafty.e('2D,DOM,Mouse,Text')
         .attr({
            x:200,
            y:100,
            w:400,
            h:50
        })
        .text("You Lose, Loser!")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' });

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
        .text("Play again, Loser?")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            currentLevel=1;
            Crafty.scene('Menu');
        });

});

Crafty.scene('YouWin', function() {
    createBorderWalls();
    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:200,
            y:100,
            w:400,
            h:50
        })
        .text("You Win?!? It was just luck. Prove me wrong")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' });


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
            y:310,
            w:400,
            h:50
        })
        .text("Next Level")
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            currentLevel++;
            Crafty.scene('Level');
        });

});
