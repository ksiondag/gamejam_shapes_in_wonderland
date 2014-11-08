/*
Crafty.c("Circle", {
    init: function() {
        this.bind("EnterFrame", function() {
            this.draw();
        })
    },

    Circle: function( x, y, radius ) {
        var circle = new Crafty.circle( x+radius, y+radius, radius ) 
        this.addComponent('Collision').collision( circle );

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.w = this.h = radius*2;

        return this;
    },
    
    draw: function() {
        var contex = Crafty.canvas.context;

        contex.fillStyle = this.color();
        contex.beginPath();
        contex.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );
        contex.closePath();
        contex.rect(this.x, this.y, this.w, this.h);
        contex.fill();
    }
}); 

Crafty.c("Triangle",{
    triangle: new Crafty.polygon( [[0,0],[0,0],[0,0]] ),

    init:function(){
        this.bind("EnterFrame", function() {
            this.draw();
        });
    },

    Triangle: function( left, roof, width, height ) {
        mid_x = left + width/2;
        right = left + width;
        floor = roof + height;

        this.triangle = new Crafty.polygon([
            [mid_x,roof],
            [left,floor],
            [right,floor]
        ]);

        console.log( this.triangle );
        return this;
    },

    draw:function(){
        var contex = Crafty.canvas.context;
        contex.save();
        contex.fillStyle = this.color();
        contex.beginPath();

        for( var i in this.triangle.points ) {
            var p = this.triangle.points[i];
            contex.lineTo(p[0], p[1]);
        }

        contex.closePath();
        contex.stroke();
        contex.fill();
    }
});
*/

Crafty.c("Circle", {
	Circle: function (x, y, radius) {

        this.x = x;
        this.y = y;
		this.radius = radius;

		return this;
	},

	draw: function () {
		if (this.radius > 0) {
			var ctx = Crafty.canvas.context;
			ctx.save();
			ctx.fillStyle = this.color();
			ctx.beginPath();
			ctx.arc(
				this.x + this.radius,
				this.y + this.radius,
				this.radius,
				0,
				Math.PI * 2
			);
			ctx.closePath();
			ctx.fill();
			ctx.rect(this.x, this.y, this.w, this.h);
			ctx.stroke();
		}
	}
});



Crafty.c("Polygon", {
	points: [],



	draw: function () {
		var contex = Crafty.canvas.context;
		//contex.save();
		contex.fillStyle = this.color();
		contex.beginPath();
		for (var i in this.points) {
			var p = this.points[i];

			contex.lineTo(this.x + p[0], this.y + p[1]);
		}
		//contex.rect(this.x,this.y,this.w,this.h);
		contex.closePath();
		contex.stroke();
		//contex.fill();
	}
});
