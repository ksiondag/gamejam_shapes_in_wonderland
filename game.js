Crafty.init(500,350, document.getElementById('game'));

square = Crafty.e('2D, Canvas, Color')
    .attr({x: 0, y: 0, w: 100, h:100})
    .color('#000');

circle = Crafty.e("Canvas, Circle, Color")
    .Circle( 200, 0, 50 )
    .color('#000');

triangle = Crafty.e("2D, Canvas, Triangle, Color")
    .Triangle( 100, 0, 100, 100 )
    .color('#000');

