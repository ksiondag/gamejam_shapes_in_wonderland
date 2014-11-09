var alice;

var newAlice = function( eatme ) {
    if( alice ) {
        alice.notAlice();
    }
    alice = eatme;
}

Crafty.c( 'Clickable', {
    init: function() {
        this.requires('Mouse');
        this.bind("MouseDown", function(e) {
            console.log( e );
            if( e.button === Crafty.mouseButtons.LEFT ) {
                this.addComponent('Alice');
            }
        });
    }
});

Crafty.c( 'Control', {
    init: function() {
        this.bind("MouseDown", function(e) {
            
            if( alice && e.button === Crafty.mouseButtons.RIGHT ) {
                diffX = e.realX - alice.x;
                diffY = e.realY - alice.y;
                console.log( (diffX) + ", " + (diffY) );
                alice.vx += diffX/100;
                alice.vy += diffY/100;
            }
        });
    }
});

Crafty.c( 'Alice', {
    init: function() {
        this.requires('Mouse,eatMe');
        newAlice( this );

        this.color('blue');

    },
    notAlice: function() {
        this.color('green');
        this.removeComponent('Alice', false);
    }
});

