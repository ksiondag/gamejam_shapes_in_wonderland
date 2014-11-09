
Crafty.scene('Menu', function() {
    
    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:0,
            y:0,
            w:100,
            h:50
        })
        .text("Start Game")
        .bind("MouseDown", function(e) {
            Crafty.scene('MainGame');
        })

});

