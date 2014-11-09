
Crafty.scene('GameOver', function() {
    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:0,
            y:0,
            w:100,
            h:50
        })
        .text("You Lose, Loser!")

    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:0,
            y:100,
            w:100,
            h:50
        })
        .text("Play again, Loser?")
        .bind("MouseDown", function(e) {
            Crafty.scene('MainGame');
        })

});

Crafty.scene('YouWin', function() {

    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:0,
            y:0,
            w:100,
            h:50
        })
        .text("You Win?!? It was just luck.")

    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:0,
            y:100,
            w:100,
            h:50
        })
        .text("Prove me wrong, Play Again?")
        .bind("MouseDown", function(e) {
            Crafty.scene('MainGame');
        })

});
