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

Crafty.c("Polygon",{
    points:[],

    init:function(){
        this.bind("EnterFrame",function(){
        this.draw();
        })
    },

    draw:function(){
        var contex = Crafty.canvas.context;
        contex.save();
        contex.fillStyle = this.color();
        contex.beginPath();
        for(var i in this.points){
            var p = this.points[i];
           
            contex.lineTo(this.x+p[0], this.y+p[1]);
        }
        contex.closePath();
        contex.stroke();
        contex.fill();
    }
});

square = Crafty.e('2D, Canvas, Color')
    .attr({x: 0, y: 0, w: 100, h:100})
    .color('#F00');

circle = Crafty.e("2D, Canvas, Circle, Color")
    .Circle(40)
    .color('#0F0');

triangle = Crafty.e("2D, Canvas, Polygon, Color")
    .attr({points:[[50,0],[0,100],[100,100]]})
    .attr({x:50,y:0,w:100,h:100})
    .color('#00F');

