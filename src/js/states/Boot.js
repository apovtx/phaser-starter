var Template = {
    soundtest: true,
    score: 0,
    screenDims: 0
};

Template.Boot = function (game) {

};

Template.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        //Template.screenDims = Utils.ScreenUtils.screenMetrics;
        //console.log(Template.screenDims)
        if (false && this.game.device.desktop) {
            console.log("DESKTOP");
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //this.scale.setUserScale(Template.screenDims.scaleX, Template.screenDims.scaleY);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else {
            console.log("MOBILE");
            //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //this.scale.setUserScale(Template.screenDims.scaleX, Template.screenDims.scaleY);
            //this.scale.pageAlignHorizontally = true;
            //this.scale.pageAlignVertically = true;
            //this.scale.forceOrientation(false,true);
        }
    },

    preload: function () {
        this.game.stage.backgroundColor = '#000000';
        this.load.image('logo', 'assets/images/logo.png');
    },

    create: function () {
        this.state.start('Preloader');
    }

};
