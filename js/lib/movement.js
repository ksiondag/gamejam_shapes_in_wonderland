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
    }

});

Crafty.c("Bounce", {
    is_hit: false,
    init: function() {
        this.addComponent( "Collision" );

        this.onHit(
            "Friend",
            function() {
                if( this.is_hit === false ) {
                    this.vx *= -1;
                    this.vy *= -1;
                }
                this.is_hit = true;
            },
            function() {
                this.is_hit === false;
                console.log( this.color("red") );
            }
        );
    } 

});
