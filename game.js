Crafty.init(500,350, document.getElementById('game'));

Crafty.c("Circle", {
    Circle: function(radius) {
        this.radius = radius;
        this.w = this.h = radius * 2;
        
        return this;
    },
    
    draw: function() {
        var contex = Crafty.canvas.context;
        contex.save();
        contex.fillStyle = this.color();
        contex.beginPath();
        contex.arc(
            this.x + this.radius,
            this.y + this.radius,
            this.radius,
            0,
            Math.PI * 2
        );
        contex.closePath();
        contex.fill();
    }
}); 

Crafty.c("Triangle",{
    draw:function(){
        var contex = Crafty.canvas.context;
        contex.save();
        contex.fillStyle = this.color();
        contex.beginPath();

        var mid_x = this.x+this.w/2;
        contex.lineTo(mid_x, this.y);

        var bottom = this.y + this.h;
        contex.lineTo(this.x, bottom);

        var right = this.x + this.w;
        contex.lineTo(right, bottom);

        contex.closePath();
        contex.stroke();
        contex.fill();
    }
});

square = Crafty.e('2D, Canvas, Color')
    .attr({x: 0, y: 0, w: 100, h:100})
    .color('#000');

triangle = Crafty.e("2D, Canvas, Triangle, Color")
    .attr({points:[[50,0],[0,100],[100,100]]})
    .attr({x:50,y:0,w:100,h:100})
    .color('#000');

circle = Crafty.e("2D, Canvas, Circle, Color")
    .Circle(40)
    .attr({x:10,y:10})
    .color('#FFF');

