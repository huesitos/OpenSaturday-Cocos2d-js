var DirectorLayer = cc.LayerColor.extend({
    ctor:function (color) {
        //////////////////////////////
        // 1. super init first
        this._super(color);

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add a labels
        var titleLabel = new cc.LabelTTF("cc.director and transitions", "Helvetica", 50);
        // position the label on the center of the screen
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height * .85;
        titleLabel.setColor(cc.color.BLACK);
        // add the label as a child to this layer
        this.addChild(titleLabel, 5);
        
        var info = new cc.LabelTTF(
            "cc.director.runScene(transition_and_scene)\n\n"+
            "cc.director.pushScene(transition_and_scene)\n\n"+
            "cc.director.popScene(scene)",
            "Helvetica",
            35
        );
        info.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        info.attr({
            x: size.width * .27,
            y: size.height / 2
        });
        info.setColor(cc.color.BLACK);
        this.addChild(info);
        
        // add lifo diagram
        this.sprite = new cc.Sprite(res.LIFO_png);
        this.sprite.attr({
            x: size.width * .74,
            y: size.height / 2
        });
        this.sprite.setScale(0.35);
        this.addChild(this.sprite, 0);
        
        /////////////////////////////
        // 4. add options menu
        var beginTransitionFest = new cc.MenuItemFont(
            "Begin transitions fest",
            this.onBeginTransitionFest
        );
        beginTransitionFest.attr({
            x: size.width * .27,
            y: size.height * .30
        });
        beginTransitionFest.setColor(cc.color.ORANGE);
        
        var nextScreen = new cc.MenuItemFont(
            "Scenes & Nodes",
            this.onNextScreen
        );
        nextScreen.attr({
            x: size.width * .88,
            y: size.height * .15
        });
        nextScreen.setColor(cc.color.BLACK);
        
        var backBtn = new cc.MenuItemFont(
            "Main Menu",
            this.onBack
        );
        backBtn.attr({
            x: size.width * .10,
            y: size.height * .15
        });
        backBtn.setColor(cc.color.BLACK);
        
        var menu = new cc.Menu(beginTransitionFest, backBtn, nextScreen);
        menu.x = menu.y = 0;
        this.addChild(menu);
        
        return true;
    },
    onBeginTransitionFest: function () {
        TransitionLayer.reset();
        TransitionLayer.runTransition();
    },
    onNextScreen: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, SceneLayer.getScene()));
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, new HelloWorldScene()));
    }
});

DirectorLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new DirectorLayer(cc.color.WHITE));
    
    return scene;
};