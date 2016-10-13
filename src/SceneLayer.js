var SceneLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 1. add scene elements
        var bg = new cc.Sprite(res.SceneBg_png);
        bg.attr({x: size.width / 2, y: size.height / 2});
        this.addChild(bg);
        
        /////////////////////////////
        // 2. add scene title label
        var titleLabel = new cc.LabelTTF("Kirby", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height * .90});
        titleLabel.setColor(cc.color.WHITE);
        this.addChild(titleLabel);
        
        /////////////////////////////
        // 3. add layouts and trigger btns
        var startingX = size.width / 4;
        
        // layer layout, elements and button
        var layerBtn = new ccui.Button();
        layerBtn.setTitleText("Layers");
        layerBtn.setTitleFontSize(40);
        layerBtn.attr({x: startingX, y: size.height * .80});
        this.addChild(layerBtn);
        
        // layer layout, elements and button
        var coordinatesBtn = new ccui.Button();
        coordinatesBtn.setTitleText("Coordinate System");
        coordinatesBtn.setTitleFontSize(40);
        coordinatesBtn.attr({x: startingX * 2, y: size.height * .80});
        this.addChild(coordinatesBtn);
        
        // layer layout, elements, and button
        this.nodesBtn = new ccui.Button();
        this.nodesBtn.setTitleText("Nodes");
        this.nodesBtn.setTitleFontSize(40);
        this.nodesBtn.attr({x: startingX * 3, y: size.height * .80});
        this.nodesBtn.addTouchEventListener(this.onNodes, this);
        this.addChild(this.nodesBtn);
        
        this.nodesLayout = new ccui.Layout();
        this.nodesLayout.setLayoutType(ccui.Layout.ABSOLUTE);
        this.nodesLayout.setSizeType(ccui.Widget.SIZE_ABSOLUTE);
        this.nodesLayout.setSize(cc.size(size.width * .70, size.height * .50));
        this.nodesLayout.positionType = ccui.Widget.POSITION_ABSOLUTE;        
        this.nodesLayout.setAnchorPoint(cc.p(0.5, 0.5));
        this.nodesLayout.attr({x: size.width / 2, y: size.height / 2});
        this.nodesLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_NONE);
        this.nodesLayout.setVisible(false);
        this.addChild(this.nodesLayout);
        
        var kirbyR = new cc.Sprite(res.Kirby_png);
        kirbyR.attr({x: this.nodesLayout.width * .37, y: this.nodesLayout.height * .60});
        kirbyR.setScale(0.5);
        this.nodesLayout.addChild(kirbyR);
        
        var kirbyRS = new cc.Sprite(res.Kirby_png);
        kirbyRS.attr({x: this.nodesLayout.width * .15, y: this.nodesLayout.height * .60});
        kirbyRS.setScale(0.3);
        this.nodesLayout.addChild(kirbyRS);
        
        var kirbyL = new cc.Sprite(res.Kirby_png);
        kirbyL.attr({x: this.nodesLayout.width * .63, y: this.nodesLayout.height * .60, flippedX: true});
        kirbyL.setScale(0.5);
        kirbyL.setColor(cc.color.MAGENTA);
        this.nodesLayout.addChild(kirbyL);
        
        var kirbyLS = new cc.Sprite(res.Kirby_png);
        kirbyLS.attr({x: this.nodesLayout.width * .85, y: this.nodesLayout.height * .60, flippedY: true, rotation: 45});
        kirbyLS.setScale(0.3);
        this.nodesLayout.addChild(kirbyLS);
        
        /////////////////////////////
        // 5. add transition menu
        var nextScreen = new cc.MenuItemFont("Actions", this.onNodes);
        nextScreen.setColor(cc.color.BLACK);
        nextScreen.attr({x: size.width * .90, y: size.height * .20});
        
        var backBtn = new cc.MenuItemFont(
            "cc.director",
            this.onBack
        );
        backBtn.attr({
            x: size.width * .10,
            y: size.height * .20
        });
        backBtn.setColor(cc.color.BLACK);
        
        var menu = new cc.Menu(nextScreen, backBtn);
        menu.x = menu.y = 0;
        this.addChild(menu);
        
        return true;
    },
    onNodes: function (sender, type) {
        // type - the type of touch event
        // TOUCH_ENDED, TOUCH_BEGAN, TOUCH_MOVED, TOUCH_CANCELLED
        if (type === ccui.Widget.TOUCH_ENDED) {
            // mark the visible node by changing the btn
            // color and disabling it
            this.nodesBtn.setColor(cc.color.BLACK);
            this.nodesBtn.setTouchEnabled(false);
            this.nodesLayout.setVisible(true);
        }
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, DirectorLayer.getScene()));
    }
});

SceneLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new SceneLayer());
    
    return scene;
}