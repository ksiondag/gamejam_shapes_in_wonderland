//Crafty.init(500,350, document.getElementById('game'));
Crafty.init(600, 600);

var enemyList = [];
for (var i = 0; i < Crafty.math.randomInt(20, 50); i++) {
	var radius = Crafty.math.randomInt(5, 20);
	var ball = Crafty.e('Canvas,Circle,Color,Collision,Velocity')
        .Velocity( 
			Crafty.math.randomInt(-1,1),
			Crafty.math.randomInt(-1,1)
        )
		.Circle( 
            Crafty.math.randomInt(0,600), 
            Crafty.math.randomInt(0,600),
            radius
        )
        .color("green")
        /*
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
        */
		
	
	enemyList.push(ball)
}

