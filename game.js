Crafty.c("Circle", {
	Circle: function (radius, color) {
		this.radius = radius;
		//this.w = this.h = radius * 2;
		this.color = color || "#000000";

		return this;
	},

	draw: function () {
		var ctx = Crafty.canvas.context;
		ctx.save();
		ctx.fillStyle = this.color;
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
	}
});



Crafty.c("Polygon", {
	points: [],

	init: function () {
		this.bind("EnterFrame", function () {
			this.draw();
		})
	},

	draw: function () {
		var contex = Crafty.canvas.context;
		//contex.save();
		contex.fillStyle = this.color();
		contex.beginPath();
		for (var i in this.points) {
			var p = this.points[i];

			contex.lineTo(this.x + p[0], this.y + p[1]);
		}
		contex.closePath();
		contex.stroke();
		contex.fill();
	}
});


Crafty.init(600, 600);








/*

//---------------
//---------------

var square = Crafty.e('enemy,2D, Canvas, Color,Collision');
square.attr({
	x: 100,
	y: 200,
	w: 100,
	h: 100,
	vx: 1,
	vy: 1
})
	.color('red')
	.onHit('enemy', function () {
		this.vx *= -1;
		this.vy *= -1
	}).bind('EnterFrame', function () {
		this.rotation = this.rotation + 1;

		if (this.x > 600 - 100 || this.x < 0)
			this.vx *= -1;
		if (this.y > 600 - 100 || this.y < 0)
			this.vy *= -1;

		this.x += this.vx;
		this.y += this.vy;

	}).origin("center");


var square = Crafty.e('enemy,2D, Canvas, Color,Collision');
square.attr({
	x: 100,
	y: 300,
	w: 100,
	h: 100,
	vx: 1,
	vy: 1
})
	.color('red')
	.onHit('enemy', function () {
		this.vx *= -1;
		this.vy *= -1
	}).bind('EnterFrame', function () {
		this.rotation = this.rotation + 1;

		if (this.x > 600 - 100 || this.x < 0)
			this.vx *= -1;
		if (this.y > 600 - 100 || this.y < 0)
			this.vy *= -1;

		this.x += this.vx;
		this.y += this.vy;

	}).origin("center");


triangle = Crafty.e('enemy,2D, Canvas, Polygon, Color,Collision')
	.attr({
		x: 100,
		y: 100,
		w: 100,
		h: 100,
		vx: 1,
		vy: 1,
		points: [[50, 0], [0, 100], [100, 100]]
	})
	.color('#00F').bind('EnterFrame', function () {
	this.rotation = this.rotation + 1;

		if (this.x > 600 - 100 || this.x < 0)
			this.vx *= -1;
		if (this.y > 600 - 100 || this.y < 0)
			this.vy *= -1;

		this.x += this.vx;
		this.y += this.vy;

	}).onHit('enemy', function () {
		this.vx *= -1;
		this.vy *= -1
	})


*/



var enemyList = [];
for (var i = 0; i < Crafty.math.randomInt(20, 50); i++) {
	var radius = Crafty.math.randomInt(5, 20);
	var ball = Crafty.e('enemy,2D, Canvas,Circle')
		.attr({
			x: Crafty.math.randomInt(0,600),
			y: Crafty.math.randomInt(0, 600),
			w: radius*2,
			h: radius*2,
			vx: 1,
			vy: 1
		})
		.Circle(radius, "green")
		.bind('EnterFrame', function () {
			for (var i in enemyList)
			{
				if (this!==enemyList[i]){
				if (Math.abs(this.x-enemyList[i].x)+Math.abs(this.y-enemyList[i].y)<this.radius+enemyList[i].radius)
				{
					this.vx*=-1;
					this.vy*=-1;
				}
			}}
			
			
			if (this.x > 600 - 100 || this.x < 0)
				this.vx *= -1;
			if (this.y > 600 - 100 || this.y < 0)
				this.vy *= -1;

			this.x += this.vx;
			this.y += this.vy;
			
			
		})
		
	
	enemyList.push(ball)
}



