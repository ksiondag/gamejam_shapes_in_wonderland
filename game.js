Crafty.c("Circle", {
	Circle: function (radius, color) {
		this.radius = radius;
		this.w = this.h = radius * 2;
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

c1 = Crafty.e('enemy,2D, Canvas,Circle, Collision')
	.attr({
		x: 0,
		y: 0,
		w: 40,
		h: 40,
		vx: 2,
		vy: 3
	})
	.Circle(40, "green")
	.bind('EnterFrame', function () {
		if (this.x > 600 - 100 || this.x < 0)
			this.vx *= -1;
		if (this.y > 600 - 100 || this.y < 0)
			this.vy *= -1;

		this.x += this.vx;
		this.y += this.vy;
	})
	.onHit('enemy', function () {
		this.vx *= -1;
		this.vy *= -1
	});
c1 = Crafty.e('enemy,2D, Canvas,Circle, Collision')
	.attr({
		x: 120,
		y: 0,
		w: 40,
		h: 40,
		vx: 1,
		vy: 1
	})
	.Circle(40, "black")
	.bind('EnterFrame', function () {
		if (this.x > 600 - 100 || this.x < 0)
			this.vx *= -1;
		if (this.y > 600 - 100 || this.y < 0)
			this.vy *= -1;

		this.x += this.vx;
		this.y += this.vy;
	})
	.onHit('enemy', function () {
		this.vx *= -1;
		this.vy *= -1
	});






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
		w: 50,
		h: 50,
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


//--------------



var enemyList = [];