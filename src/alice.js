var alice;

Crafty.c( 'Control', {
    mouseDown: false,

    init: function() {
        this.bind("MouseDown", function(e) {
            this.mouseDown = true;
        });

        this.bind("MouseUp", function(e) {
            this.mouseDown = false;
        });

        this.bind("EnterFrame", function() {
            if( this.mouseDown ) {
                diffX = Crafty.mousePos.x - (alice.x+alice.w);
                diffY = Crafty.mousePos.y - (alice.y+alice.h);
                console.log( (diffX) + ", " + (diffY) );
                alice.vx += diffX/1000;
                alice.vy += diffY/1000;
            }
        })
    }
});

Crafty.c( 'Alice', {
    init: function() {
        this.requires('Mouse,eatMe');

        this.color('blue');

        alice = this;
    },
    notAlice: function() {
        this.color('green');
        this.removeComponent('Alice', false);
    }
});

