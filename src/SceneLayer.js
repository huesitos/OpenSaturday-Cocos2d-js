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
        var titleLabel = new cc.LabelTTF("Scenes", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height * .90});
        titleLabel.setColor(cc.color.WHITE);
        this.addChild(titleLabel);
        
        /////////////////////////////
        // 3. add layouts and trigger btns
        var startingX = size.width / 4;
        
        // layer layout, elements and button
        this.containersBtn = new ccui.Button();
        this.containersBtn.setTitleText("Containers");
        this.containersBtn.setTitleFontSize(40);
        this.containersBtn.attr({x: startingX, y: size.height * .80});
        this.containersBtn.addTouchEventListener(this.onContainers, this);
        this.addChild(this.containersBtn);
        
        this.pageView = new ccui.PageView();
        this.pageView.setTouchEnabled(true);
        this.pageView.setContentSize(cc.size(size.width * .70, size.height * .50));
        this.pageView.attr({x: size.width / 2, y: size.height / 2});
        this.pageView.setAnchorPoint(cc.p(0.5, 0.5));
        this.pageView.setVisible(false);
        this.addChild(this.pageView);
        
        this.containersLayout = new ccui.Layout();
        this.containersLayout.setLayoutType(ccui.Layout.ABSOLUTE);
        this.containersLayout.setSizeType(ccui.Widget.SIZE_ABSOLUTE);
        this.containersLayout.setSize(cc.size(size.width * .70, size.height * .50));
        this.containersLayout.positionType = ccui.Widget.POSITION_ABSOLUTE;        
        this.containersLayout.setAnchorPoint(cc.p(0.5, 0.5));
        this.containersLayout.attr({x: size.width / 2, y: size.height / 2});
        this.containersLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_NONE);
        this.pageView.addPage(this.containersLayout);
        
        var layersStructure = new cc.Sprite(res.LayersStructure_png);
        layersStructure.attr({x: this.containersLayout.width * 0.5, y: this.containersLayout.height * 0.40});
        layersStructure.setScale(1.2);
        this.containersLayout.addChild(layersStructure);
        
        this.containersLayout2 = new ccui.Layout();
        this.containersLayout2.setLayoutType(ccui.Layout.ABSOLUTE);
        this.containersLayout2.setSizeType(ccui.Widget.SIZE_ABSOLUTE);
        this.containersLayout2.setSize(cc.size(size.width * .70, size.height * .50));
        this.containersLayout2.positionType = ccui.Widget.POSITION_ABSOLUTE;        
        this.containersLayout2.setAnchorPoint(cc.p(0.5, 0.5));
        this.containersLayout2.attr({x: size.width / 2, y: size.height / 2});
        this.containersLayout2.setBackGroundColorType(ccui.Layout.BG_COLOR_NONE);
        this.pageView.addPage(this.containersLayout2);
        
        var layersStructure2 = new cc.Sprite(res.LayersStructure_png);
        layersStructure2.attr({x: this.containersLayout2.width * 0.5, y: this.containersLayout2.height * 0.40});
        layersStructure2.setScale(1.2);
        this.containersLayout2.addChild(layersStructure2);
        
        // layer layout, elements and button
        this.coordinatesBtn = new ccui.Button();
        this.coordinatesBtn.setTitleText("Coordinate System");
        this.coordinatesBtn.setTitleFontSize(40);
        this.coordinatesBtn.attr({x: startingX * 2, y: size.height * .80});
        this.coordinatesBtn.addTouchEventListener(this.onCoordinates, this);
        this.addChild(this.coordinatesBtn);
        
        this.coordinatesLayout = new ccui.Layout();
        this.coordinatesLayout.setLayoutType(ccui.Layout.ABSOLUTE);
        this.coordinatesLayout.setSizeType(ccui.Widget.SIZE_ABSOLUTE);
        this.coordinatesLayout.setSize(cc.size(size.width * .70, size.height * .50));
        this.coordinatesLayout.positionType = ccui.Widget.POSITION_ABSOLUTE;        
        this.coordinatesLayout.setAnchorPoint(cc.p(0.5, 0.5));
        this.coordinatesLayout.attr({x: size.width / 2, y: size.height / 2});
        this.coordinatesLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_NONE);
        this.coordinatesLayout.setVisible(false);
        this.addChild(this.coordinatesLayout);
        
        var sparkyTR = new cc.Sprite(res.Sparky_png);
        sparkyTR.attr({x: this.coordinatesLayout.width / 2, y: this.coordinatesLayout.height / 2});
        sparkyTR.setScale(0.35);
        sparkyTR.setAnchorPoint(cc.p(1, 0));
        this.coordinatesLayout.addChild(sparkyTR);
        
        var labelTR = new cc.LabelTTF("cc.p(1, 0)", "Helvitica", 30);
        labelTR.attr({x: this.coordinatesLayout.width * .20, y: this.coordinatesLayout.height * .75});
        labelTR.setColor(cc.color.BLACK);
        this.coordinatesLayout.addChild(labelTR);
        
        var sparkyBR = new cc.Sprite(res.Sparky_png);
        sparkyBR.attr({x: this.coordinatesLayout.width / 2, y: this.coordinatesLayout.height / 2});
        sparkyBR.setScale(0.35);
        sparkyBR.setAnchorPoint(cc.p(0, 1));
        this.coordinatesLayout.addChild(sparkyBR);
        
        var labelBR = new cc.LabelTTF("cc.p(0, 1)", "Helvitica", 30);
        labelBR.attr({x: this.coordinatesLayout.width * .78, y: this.coordinatesLayout.height * .75});
        labelBR.setColor(cc.color.BLACK);
        this.coordinatesLayout.addChild(labelBR);
        
        var sparkyBL = new cc.Sprite(res.Sparky_png);
        sparkyBL.attr({x: this.coordinatesLayout.width / 2, y: this.coordinatesLayout.height / 2});
        sparkyBL.setScale(0.35);
        sparkyBL.setAnchorPoint(cc.p(1, 1));
        this.coordinatesLayout.addChild(sparkyBL);
        
        var labelBL = new cc.LabelTTF("cc.p(1, 1)", "Helvitica", 30);
        labelBL.attr({x: this.coordinatesLayout.width * .78, y: this.coordinatesLayout.height * .25});
        labelBL.setColor(cc.color.BLACK);
        this.coordinatesLayout.addChild(labelBL);
        
        var sparkyTL = new cc.Sprite(res.Sparky_png);
        sparkyTL.attr({x: this.coordinatesLayout.width / 2, y: this.coordinatesLayout.height / 2});
        sparkyTL.setScale(0.35);
        sparkyTL.setAnchorPoint(cc.p(0, 0));
        this.coordinatesLayout.addChild(sparkyTL);
        
        var labelTL = new cc.LabelTTF("cc.p(0, 0)", "Helvitica", 30);
        labelTL.attr({x: this.coordinatesLayout.width * .20, y: this.coordinatesLayout.height * .25});
        labelTL.setColor(cc.color.BLACK);
        this.coordinatesLayout.addChild(labelTL);
        
        var sparkyC = new cc.Sprite(res.Sparky_png);
        sparkyC.attr({x: this.coordinatesLayout.width / 2, y: this.coordinatesLayout.height / 2});
        sparkyC.setScale(0.35);
        sparkyC.setAnchorPoint(cc.p(0.5, 0.5));
        this.coordinatesLayout.addChild(sparkyC);
        
        var labelC = new cc.LabelTTF("cc.p(0.5, 0.5)", "Helvitica", 30);
        labelC.attr({x: this.coordinatesLayout.width * .5, y: this.coordinatesLayout.height * .40});
        labelC.setColor(cc.color.BLACK);
        this.coordinatesLayout.addChild(labelC);
        
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
        kirbyRS.setOpacity(150);
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
        
        var kirbyB = new cc.Sprite(res.Kirby_png);
        kirbyB.attr({x: this.nodesLayout.width / 2, y: this.nodesLayout.height * .1});
        kirbyB.setScale(0.7);
        this.nodesLayout.addChild(kirbyB);
        
        var rotate = function () {
            this.setRotation(this.getRotation() + 25);
        };
        kirbyB.schedule(rotate.bind(kirbyB), 1);
        
        /////////////////////////////
        // 5. add transition menu
        var nextScreen = new cc.MenuItemFont("Actions", this.onActions);
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
    onContainers: function (sender, type) {
        // type - the type of touch event
        // TOUCH_ENDED, TOUCH_BEGAN, TOUCH_MOVED, TOUCH_CANCELLED
        if (type === ccui.Widget.TOUCH_ENDED) {
            this.resetSelection();
            // mark the visible node by changing the btn
            // color and disabling it
            this.containersBtn.setColor(cc.color.BLACK);
            this.containersBtn.setTouchEnabled(false);
            this.pageView.setVisible(true);
        }
    },
    onNodes: function (sender, type) {
        // type - the type of touch event
        // TOUCH_ENDED, TOUCH_BEGAN, TOUCH_MOVED, TOUCH_CANCELLED
        if (type === ccui.Widget.TOUCH_ENDED) {
            this.resetSelection();
            // mark the visible node by changing the btn
            // color and disabling it
            this.nodesBtn.setColor(cc.color.BLACK);
            this.nodesBtn.setTouchEnabled(false);
            this.nodesLayout.setVisible(true);
        }
    },
    onCoordinates: function (sender, type) {
        // type - the type of touch event
        // TOUCH_ENDED, TOUCH_BEGAN, TOUCH_MOVED, TOUCH_CANCELLED
        if (type === ccui.Widget.TOUCH_ENDED) {
            this.resetSelection();
            // mark the visible node by changing the btn
            // color and disabling it
            this.coordinatesBtn.setColor(cc.color.BLACK);
            this.coordinatesBtn.setTouchEnabled(false);
            this.coordinatesLayout.setVisible(true);
        }
    },
    resetSelection: function () {
        this.containersBtn.setColor(cc.color.WHITE);
        this.nodesBtn.setColor(cc.color.WHITE);
        this.coordinatesBtn.setColor(cc.color.WHITE);
        
        this.containersBtn.setTouchEnabled(true);
        this.nodesBtn.setTouchEnabled(true);
        this.coordinatesBtn.setTouchEnabled(true);
        
        this.pageView.setVisible(false);
        this.nodesLayout.setVisible(false);
        this.coordinatesLayout.setVisible(false);
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, DirectorLayer.getScene()));
    },
    onActions: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, ActionsLayer.getScene()));
    }
});

SceneLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new SceneLayer());
    
    return scene;
}