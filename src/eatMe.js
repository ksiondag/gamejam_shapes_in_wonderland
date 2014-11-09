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
		this.color(c);
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
		this.level=this.level+(other.level/2);
		this.w=this.level;
		this.h=this.level;
        Crafty.audio.play('bub',1);
		other.eaten();
	},

	eaten: function(){
		if(this.has('Alice')) {
            Crafty.audio.stop();
            Crafty.audio.play('lose',1);
            Crafty.scene("GameOver");
        }
		else{
			this.destroy();
            eatMeCount--;

            if( eatMeCount === 1 ){
                Crafty.audio.stop();
                Crafty.audio.play('applause',1);
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


function createRandomeatMe( minLevel, maxLevel, withWall ){
    
	var randomXposition;
	var randomYposition;

	var randomlevel = Crafty.math.randomInt(minLevel, maxLevel);


    if( withWall ) {
        var spawnSection = Crafty.math.randomInt(1,4);

        switch (spawnSection) {
            case 1:
                randomXposition = Crafty.math.randomInt(6, 794-randomlevel);
                randomYposition = Crafty.math.randomInt(6, 199-randomlevel);
                break;
            case 2:
                randomXposition = Crafty.math.randomInt(6, 199-randomlevel);
                randomYposition = Crafty.math.randomInt(6, 594-randomlevel);
                break;
            case 3:
                randomXposition = Crafty.math.randomInt(6, 794-randomlevel);
                randomYposition = Crafty.math.randomInt(401, 599-randomlevel);
                break;
            case 4:
                randomXposition = Crafty.math.randomInt(601, 794-randomlevel);
                randomYposition = Crafty.math.randomInt(6, 594-randomlevel);
                break;
            default:
                alert( "Something horrible has happened!" );
        }
    }
    else {
        randomXposition = Crafty.math.randomInt(100, 700);
        randomYposition = Crafty.math.randomInt(100, 500);
    }
	var eater = Crafty.e('EatMe').Velocity( 
        Crafty.math.randomInt(-1, 1),
        Crafty.math.randomInt(-1, 1)
    );

    eatMeCount++;

    eater.setLevel(randomlevel);
	eater.setPosition(randomXposition,randomYposition);
	return eater;
}
