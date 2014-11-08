
var direction = function( number ) {
    if( number !== 0 ) {
        return number/Math.abs(number);
    }

    return 0;
};

var sameDir = function( x, y ){

    if( direction(x) === direction(y) ) {
        return true;
    }

    return false;

};

Crafty.c("Velocity", {
    vx:0,
    vy:0,
    init: function() {
        this.bind('EnterFrame', function() {
            this.x += this.vx;
            this.y += this.vy;
        });
    },

    Velocity: function(vx, vy) {
        this.vx = vx; 
        this.vy = vy; 

        return this;
    },

    xDir: function() {
        return direction( this.vx );
    },

    yDir: function() {
        return direction( this.vy );
    }

});

Crafty.c("Bounce", {
    init: function() {
        this.addComponent( "Velocity" );
        this.addComponent( "Collision" );

        this.onHit(
            "Solid",
            function( collisions ) {
                for( var i in collisions ) {
                    var collision = collisions[i];

                    this.undoOverlap( collision );
                    this.elasticBounceSolid( collision );

                }
            },
            function() {
            }
        );

        this.onHit(
            "Bounce",
            function( collisions ) {
                for( var i in collisions ) {
                    var collision = collisions[i];

                    this.undoOverlap( collision );
                    this.elasticBounce( collision );

                }
            },
            function() {
            }
        );
    },

    undoOverlap: function( collision ) {
        this.x += collision.normal.x;
        this.y += collision.normal.y;
    },

    elasticBounceSolid: function( collision ) {
        var other = collision.obj;

        if( collision.normal.x !== 0 ) {
            this.vx *= -1;
        }
        if( collision.normal.y !== 0) {
            this.vy *= -1;
        }
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
