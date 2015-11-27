Template.MainMenu = function (game) {
};

Template.MainMenu.prototype = {

	create: function () {
        this.startGame();
    },

	play: function() {
	},
	
	startGame: function() {
        this.state.start('Game');
    },

	update: function () {

	},

    render: function() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");      
    }

};
