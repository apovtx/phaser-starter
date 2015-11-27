Template.Game = function(game) {

};

var text;
Template.Game.prototype = {
    create: function() {
        this.game.input.onDown.add(this.onTap, this);
        this.game.input.onUp.add(this.draw, this);
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
