Crafty.c("Circle", {
	Circle: function (radius, color) {
		this.radius = radius;
		//this.w = this.h = radius * 2;
		this.color = color || "#000000";

		return this;
	},

	draw: function () {
		if (this.radius>0){
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
		ctx.rect(this.x,this.y,this.w,this.h);
		ctx.stroke();
		}
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
for (var i = 0; i < 5; i++) {
	var radius = Crafty.math.randomInt(50,70);
	var ball = Crafty.e('enemy,2D, Canvas,Circle')
		.attr({
			x: Crafty.math.randomInt(0,600),
			y: Crafty.math.randomInt(0, 600),
			w: radius*2,
			h: radius*2,
			vx: 0.3,
			vy: 0.2
		})
		.Circle(radius, "green")
		.bind('EnterFrame', function () {
			for (var i in enemyList)
			{
				
				if (this!=enemyList[i]){
					x1=this.x+this.radius;
					//console.log("x1= "+x1)
					x2=enemyList[i].x+enemyList[i].radius;
					//console.log("x2= "+x2)
					y1=this.y+this.radius;
					//console.log("y1= "+y1)
					y2=enemyList[i].y+enemyList[i].radius;
					//console.log("y2= "+y1)
					
					dist =Math.sqrt(Math.abs(x1-x2)*Math.abs(x1-x2)+Math.abs(y1-y2)*Math.abs(y1-y2))
					
				if (dist<=(parseInt (this.radius)+parseInt (enemyList[i].radius)))
				{
  
					this.color="red"
					this.vx*=-1;
					this.x-=5*this.vx
					this.vy*=-1;
					this.y-=5*this.vy
					if (this.radius>enemyList[i].radius){
						this.radius+=0.01;
						this.w+=0.02;
						this.h+=0.02;
						enemyList[i].radius-=0.01;
						enemyList[i].w-=0.02;
						enemyList[i].h-=0.02;
					}
					else{
						this.radius-=0.01;
						this.w-=0.02;
						this.h-=0.02;
						enemyList[i].radius+=0.01;
						enemyList[i].w+=0.02;
						enemyList[i].h+=0.02;
					}
					if (this.radius<=0.1 ){
						delete this;
						return;
					}
					if( enemyList[i].radius<=0.1){
						enemyList.splice(i,1);
					}
				}
			}
				
			}
			
			
			if (this.x > 500 || this.x < 0)
				this.vx *= -1;
			if (this.y > 500 || this.y < 0)
				this.vy *= -1;

			this.x += this.vx;
			this.y += this.vy;
			
			
		})
		
	
	enemyList.push(ball)
}
console.log(enemyList)




function boomspeed(obj1,obj2)
{
	obj1={
		dx:0,
		dy:0,
		cx:0,
		cy:0
	}
}