Crafty.c("Velocity", {
    vx:0,
    vy:0,
    init: function() {
        this.bind('EnterFrame', function() {
            this.shift( this.vx, this.vy );
        });
    },

    Velocity: function(vx, vy) {
        this.vx = vx; 
        this.vy = vy; 

        return this;
    }
});
