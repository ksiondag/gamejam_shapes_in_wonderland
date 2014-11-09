var eatMeCount = 0;
Crafty.c('EatMe', {
	level:1,
	init: function() {
		this.requires('2D,Canvas,Color,Bounce');
		//Deafaul attributes
		this.attr({
			x:0,
        	y:0,
        	w:5,
        	h:5
		});
		//Default color
		this.color('green');

		this.level=5;
		this.onHit(
			'EatMe',
			function(collisions){
				for( var i in collisions ) {
                    var collision = collisions[i];
                    if(this.canIEat(collision)){
                    	this.eatIt(collision);
                    }
                    else{
                    	this.undoOverlap( collision );
                    	this.elasticBounce( collision );
                    }
                }
			},
            function() {
            }
		);
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

	setLevel: function(l){
		this.level=l;
		this.attr({
			w:l,
        	h:l,
		});
	},

	setColor: function(c){
		var colors=['green','red']
		this.color(colors[c]);
	},

	canIEat: function(collision){
		var other = collision.obj;
		if(this.level>other.level)
			return true;
		else 
			return false;
	},

	eatIt: function(collision){
		var other = collision.obj;
		this.level=this.level+other.level;
		this.w=this.level;
		this.h=this.level;
		other.eaten();
	},

	eaten: function(){
		if(this.has('Alice')) {
			console.log("You LOST");
            Crafty.scene("GameOver");
        }
		else{
			this.destroy();
            eatMeCount--;

            if( eatMeCount === 1 ){
                Crafty.scene("YouWin");
            }
		}
	},

	undoOverlap: function( collision ) {
        this.x += collision.normal.x;
        this.y += collision.normal.y;
    },

    elasticBounce: function( collision ) {
        var other = collision.obj;

        if( collision.normal.x !== 0 ) {
            var temp;
            temp = this.vx;
            this.vx = other.vx;
            other.vx = temp;
        }

        if( collision.normal.y !== 0 ) {
            var temp;
            temp = this.vy;
            this.vy = other.vy;
            other.vy = temp;
        }
    }

});


function createRandomeatMe( minLevel, maxLevel ){
	var randomXposition = Crafty.math.randomInt(0, 700);
	var randomYposition = Crafty.math.randomInt(0, 500);
	var randomlevel = Crafty.math.randomInt(minLevel, maxLevel);
	var eater = Crafty.e('EatMe').Velocity( 
        Crafty.math.randomInt(-1, 1),
        Crafty.math.randomInt(-1, 1)
    );

    eatMeCount++;

    eater.setLevel(randomlevel);
	eater.setPosition(randomXposition,randomYposition);
	return eater;
}
