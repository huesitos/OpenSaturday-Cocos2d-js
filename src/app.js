
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var titleLabel = new cc.LabelTTF("Getting Started With Cocos2d-js", "Helvetica", 60);
        // position the label on the center of the screen
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height * .80;
        // add the label as a child to this layer
        this.addChild(titleLabel, 5);
        
        var subTitleLabel = new cc.LabelTTF("Open Saturday", "Helvetica", 42);
        // position the label on the center of the screen
        subTitleLabel.x = size.width / 2;
        subTitleLabel.y = size.height * .90;
        // add the label as a child to this layer
        this.addChild(subTitleLabel, 5);
        
        var speaker = new cc.LabelTTF("Denisse Lara", "Helvetica", 42);
        // position the label on the center of the screen
        speaker.x = size.width / 2;
        speaker.y = size.height * .71;
        // add the label as a child to this layer
        this.addChild(speaker, 5);
        
        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.sprite.setScale(1.4);
        this.addChild(this.sprite, 0);
        
        // add menu
        cc.MenuItemFont.setFontName("Arcade");
        cc.MenuItemFont.setFontSize(40);
        
        var playBtn = new cc.MenuItemFont("Play", this.onPlay);
        playBtn.setPosition(cc.p(size.width / 2, size.height * .20));
        
        var mainMenu = new cc.Menu(playBtn);
        mainMenu.x = 0;
        mainMenu.y = 0;
        this.addChild(mainMenu);
        
        return true;
    },
    onPlay: function () {
        // begin presentation
        cc.director.runScene(new cc.TransitionSlideInR(1, DirectorLayer.getScene()));
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

