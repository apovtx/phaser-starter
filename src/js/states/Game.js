Template.Game = function(game) {

};

var text;
Template.Game.prototype = {
    create: function() {
        this.game.input.onDown.add(this.onTap, this);
        var logo = this.game.add.image(this.world.width/2, this.world.height/2, 'logo');
        logo.anchor.set(0.5, 0.5);
    },

    onTap: function(){
    },

    update: function() {
    },

    quitGame: function() {
        this.state.start('MainMenu');
    },

    render: function() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, '#00ff00'); 
    },

};
