var EndLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(new cc.Color(255,248,220));
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 1. add scene title label
        var titleLabel = new cc.LabelTTF("You are winner!", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height / 2});
        titleLabel.setColor(cc.color.BLACK);
        this.addChild(titleLabel);
        
        /////////////////////////////
        // 2. save game finished bool
        cc.sys.localStorage.setItem("game_finished", true);
        
        /////////////////////////////
        // 3. add navigation menu
        var mainMenu = new cc.MenuItemFont(
            "Main Menu",
            this.onMenu
        );
        mainMenu.attr({
            x: size.width * .5,
            y: size.height * .4
        });
        mainMenu.setColor(cc.color.BLACK);
        
        var menu = new cc.Menu(mainMenu);
        menu.x = menu.y = 0;
        this.addChild(menu);
    },
    onMenu: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, new HelloWorldScene()));
    }
});

EndLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new EndLayer());
    
    return scene;
}