
Crafty.scene('Loading', function() {
    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:0,
            y:0,
            w:100,
            h:50
        })
        .text("Loading");

        Crafty.load([
		'assets/applause.mp3',
		'assets/AinW.mp3',
		'assets/intro.wav',
		'assets/slow.mp3',
		'assets/lose.wav',
		'assets/bub.wav',

		], function(){
		});

		Crafty.audio.add({
			AinW:    ['assets/AinW.mp3'],
			lose:    ['assets/lose.wav'],
			bub:    ['assets/bub.wav'],
			slow:    ['assets/slow.mp3'],
			intro:    ['assets/intro.wav'],
			applause: ['assets/applause.mp3']
		});

		Crafty.scene('Menu');
});

