
Crafty.scene('Level', function() {
    Crafty.audio.play('slow',-1);
    createBorderWalls();
    Crafty.e('2D,DOM,Mouse,Text')
        .attr({
            x:300,
            y:250,
            w:200,
            h:50
        })
        .text("Level "+currentLevel)
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' })
        .bind("MouseDown", function(e) {
            Crafty.audio.stop();
            switch(currentLevel){
                case 1:
                case 2:
                case 3:
                    Crafty.scene('LevelOne');
                    break;
                case 4:
                case 5:
                case 6:
                    Crafty.scene('LevelWallInTheMiddle');
                    break;
                default:
                    Crafty.scene('LevelOne');
            }
        });

    var subtitle="";
    switch(currentLevel){
        case 1:
            subtitle="Eat all the thing!!!"
            break;
        case 2:
            subtitle="NOM NOM NOM!!!"
            break;
        case 3:
            subtitle="Le BOSS!!!"
            break;
        case 4:
            subtitle="The Wall"
            break;
        case 5:
            subtitle="The wall strikes back"
            break;
        case 6:
            subtitle="The revenge of the Wall"
            break;
        case 7:
            subtitle="You crazy!!!"
            break;
        default:
            subtitle="idk "
    }
    Crafty.e('2D,DOM,Mouse,Text')
       .attr({
            x:250,
            y:300,
            w:300,
            h:50
        })
        .text(subtitle)
        .textFont({ size: '32px', family: 'Helvetica', weight: 'bold' });

});

