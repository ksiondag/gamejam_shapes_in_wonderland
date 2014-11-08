Crafty.c("Circle", {
	Circle: function (radius, color) {

		this.radius = radius;
		//this.w = this.h = radius * 2;
		this.color = color || "#000000";

		return this;
	},

	draw: function () {
		if (this.radius > 0) {
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


Crafty.init(600, 600);









//---------------
//---------------
/*
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
		//this.rotation = this.rotation + 1;

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
		x: 380,
		y: 100,
		w: 100,
		h: 100,
		vx: 1,
		vy: 1,
		points: [[50, 0], [0, 100], [100, 100],[150,30]]
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
		var a=[[50,0], [0,100], [100,100],[150,30]]
		
		
		var contex = Crafty.canvas.context;
		contex.save();
		//contex.fillStyle = this.color();
		contex.beginPath();
		for (var i in a) {
			var p = a[i];

			contex.lineTo( this.x+p[0],  this.y+p[1]);
		}
		//contex.rect(this.x,this.y,this.w,this.h);
		contex.closePath();
		contex.stroke();
	contex.fill();
		
		
	}).collision(new Crafty.polygon([this.x+50,this.y+0], [this.x+0,this.y+100], [this.x+100,this.y+100],[this.x+150,this.y+30]
								   )
);

*/







var enemyList = [];
for (var i = 0; i < 5; i++) {
	var radius = Crafty.math.randomInt(50, 70);
	var ball = Crafty.e('enemy,2D,Canvas,Circle,Collision')
		.attr({
			x: Crafty.math.randomInt(0, 600),
			y: Crafty.math.randomInt(0, 600),
			w: radius * 2,
			h: radius * 2,
			vx: 1,
			vy: 1,
			
		})
		.Circle(radius, "green")
		.bind('EnterFrame', function () {
			
			for (var i in enemyList) {

				if (this != enemyList[i]) {
					x1 = this.x + this.radius;
					x2 = enemyList[i].x + enemyList[i].radius;
					y1 = this.y + this.radius;
					y2 = enemyList[i].y + enemyList[i].radius;
					

					dist = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2))

					if (dist <= (parseInt(this.radius) + parseInt(enemyList[i].radius))) {
						hit_filter = true;
						this.is_hit = true;
						this.color = "red"

						/*
						var obj1 = {
							dx: this.vx,
							dy: this.vy,
							cx: x1,
							cy: y1
						}
						var obj2 = {
							dx: enemyList[i].vx,
							dy: enemyList[i].vy,
							cx: x2,
							cy: y2
						}
//var news=boomspeed(obj1, obj2)
*/
						this.vx *=-1;
						this.vy*=-1;
						
						//this.x -= 5 * this.vx
						
						//this.y -= 5 * this.vy
						
						
						
						




					}
					
				}

			}
			
			
			

			if (this.x > 600 - this.radius * 2 || this.x < 0)
				this.vx *= -1;
			if (this.y > 600 || this.y < 0)
				this.vy *= -1;

			this.x += this.vx;
			this.y += this.vy;


		}).onHit("enemy",function(){
				//console.log(collision)
		})


	enemyList.push(ball)
}
console.log(enemyList)




function boomspeed(obj1, obj2) {
	/*
	obj1 = {
		dx: 0,
		dy: 0,
		cx: 0,
		cy: 0
	}
	obj2 = {
		dx: 0,
		dy: 0,
		cx: 0,
		cy: 0
	}
	*/
	var v1x = obj1.dx
	var v1y = obj1.dy
	var v2x = obj2.dx
	var v2y = obj2.dy

	var x1 = obj1.cx;
	var y1 = obj1.cy;
	var x2 = obj2.cx;
	var y2 = obj2.cy

	var up = (v1x * (y2 - y1) * (y2 - y1) + v2x*(x2 - x1) * (x2 - x1) + (v2y - v1y) * (x2 - x1) * (y2 - y1))
	var bot = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

	var v1_x = up / bot;

	up = (v1y * (x2 - x1) * (x2 - x1) + v2y*(y2 - y1) * (y2 - y1) + (v2x - v1x) * (x2 - x1) * (y2 - y1))
	//bot =(x2-x1)*(x2-x1)+(y2-y1)*(y2-y1);

	v1_y = up / bot;

	up = (v1x * (x2 - x1) * (x2 - x1) + v2x*(y2 - y1) * (y2 - y1) - (v2y - v1y) * (x2 - x1) * (y2 - y1))
	// bot =(x2-x1)*(x2-x1)+(y2-y1)*(y2-y1);

	v2_x = up / bot;

	up = (v1y * (y2 - y1) * (y2 - y1) + v2y*(x2 - x1) * (x2 - x1) + (v2x - v1x) * (x2 - x1) * (y2 - y1))
	// bot =(x2-x1)*(x2-x1)+(y2-y1)*(y2-y1);

	v2_y = up / bot;
	console.log({
		v1x: v1_x,
		v1y: v1_y,
		v2x: v2_x,
		v2y: v2_y
	});
	return {
		v1x: v1_x,
		v1y: v1_y,
		v2x: v2_x,
		v2y: v2_y
	}
}