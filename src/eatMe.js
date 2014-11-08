Crafty.c('eatMe', {
	init: function() {
		this.requires('2D, Canvas,Color');
		//Deafaul attributes
		this.attr({
			x:0,
        	y:0,
        	w:50,
        	h:50
		});
		//Default color
		this.color('green');
	},

	setPosition: function(x, y){
		this.attr({
			x:x,
        	y:y,
		});
	},

	setSize: function(w,h){
		this.attr({
			w:w,
        	h:h,
		});
	},

	setColor: function(c){
		var colors=['green','red','blue']
		this.color(colors[c]);
	}


});

function createRandomeatMe(){
	var randomXposition = Crafty.math.randomInt(0, 700);
	var randomYposition = Crafty.math.randomInt(0, 500);
	var randomW = Crafty.math.randomInt(40, 50);
	var randomH = Crafty.math.randomInt(40, 50);
	var randomColor =Crafty.math.randomInt(0, 3);

	var eater = Crafty.e('eatMe,Velocity,Collision,Bounce').Velocity( 
        Crafty.math.randomInt(-5, 5),
        Crafty.math.randomInt(-5, 5)
    );
	eater.setPosition(randomXposition,randomYposition);
	eater.setSize(randomW,randomH);
	eater.setColor(randomColor);
	return eater;
}