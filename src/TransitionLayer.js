var TransitionLayer = cc.LayerColor.extend({
    ctor: function (color, transition) {
        this._super(color);
        
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var transitionLabel = new cc.LabelTTF(transition, "Helvetica", 38);
        transitionLabel.setColor(cc.color.BLACK);
        // position the label on the center of the screen
        transitionLabel.x = size.width / 2;
        transitionLabel.y = size.height / 2;
        // add the label as a child to this layer
        this.addChild(transitionLabel, 5);
        
        var btn = new ccui.Button();
        btn.setTitleText("Skip");
        btn.setTitleFontSize(20);
        btn.setColor(cc.color.BLACK);
        btn.attr({x: size.width * .05, y: size.height * .15});
        btn.addTouchEventListener(this.onSkip, this);
        this.addChild(btn);
        
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                return true;
            },
            onTouchEnded: function (touch, event) {
                TransitionLayer.runTransition();
            }
        }, this);
        
        return true;
    },
    onSkip: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED === type)
            cc.director.runScene(new DirectorLayer.getScene());
    }
});

TransitionLayer.reset = function () {
    TransitionLayer.layers = {
        "TransitionCrossFade": new TransitionLayer(cc.color.BLUE, "TransitionCrossFade"),
        "TransitionFadeDown": new TransitionLayer(cc.color.GREEN, "TransitionFadeDown"),
        "TransitionFadeUp": new TransitionLayer(cc.color.RED, "TransitionFadeUp"),
        "TransitionJumpZoom": new TransitionLayer(cc.color.GRAY, "TransitionJumpZoom"),
        "TransitionMoveInB": new TransitionLayer(new cc.Color(255,248,220), "TransitionMoveInB"),
        "TransitionMoveInL": new TransitionLayer(new cc.Color(255,235,205), "TransitionMoveInL"),
        "TransitionMoveInT": new TransitionLayer(new cc.Color(128,0,0), "TransitionMoveInT"),
        "TransitionMoveInR": new TransitionLayer(new cc.Color(165,42,42), "TransitionMoveInR"),
        "TransitionPageTurn": new TransitionLayer(new cc.Color(160,82,45), "TransitionPageTurn"),
        "TransitionProgressHorizontal": new TransitionLayer(new cc.Color(75,0,130), "TransitionProgressHorizontal"),
        "TransitionProgressInOut": new TransitionLayer(new cc.Color(0,0,128), "TransitionProgressInOut"),
        "TransitionProgressOutIn": new TransitionLayer(new cc.Color(123,104,238), "TransitionProgressOutIn"),
        "TransitionProgressVertical": new TransitionLayer(new cc.Color(128,128,0), "TransitionProgressVertical"),
        "TransitionShrinkGrow": new TransitionLayer(new cc.Color(205,133,63), "TransitionShrinkGrow"),
        "TransitionSlideInB": new TransitionLayer(new cc.Color(240,230,140), "TransitionSlideInB"),
        "TransitionSlideInL": new TransitionLayer(new cc.Color(230,190,138), "TransitionSlideInL"),
        "TransitionSlideInR": new TransitionLayer(new cc.Color(106,90,205), "TransitionSlideInR"),
        "TransitionSlideInT": new TransitionLayer(new cc.Color(255,165,0), "TransitionSlideInT"),
        "TransitionSplitCols": new TransitionLayer(new cc.Color(152,251,152), "TransitionSplitCols"),
        "TransitionSplitRows": new TransitionLayer(new cc.Color(255,218,185), "TransitionSplitRows"),
        "TransitionTurnOffTiles": new TransitionLayer(new cc.Color(255,250,205), "TransitionTurnOffTiles"),
        "TransitionFade": new TransitionLayer(cc.color.YELLOW, "TransitionFade")
    };
    
    TransitionLayer.layersList = Object.keys(TransitionLayer.layers);
};

TransitionLayer.runTransition = function () {
    var layer = TransitionLayer.layersList.pop();
    
    if (layer) {
        var scene = new cc.Scene();
        scene.addChild(TransitionLayer.layers[layer]);

        switch (layer) {
            case "TransitionCrossFade":
                cc.director.runScene(new cc.TransitionCrossFade(1, scene));
                break;
            case "TransitionFade":
                cc.director.runScene(new cc.TransitionFade(1, scene));
                break;
            case "TransitionFadeDown":
                cc.director.runScene(new cc.TransitionFadeDown(1, scene));
                break;
            case "TransitionFadeUp":
                cc.director.runScene(new cc.TransitionFadeUp(1, scene));
                break;
            case "TransitionFlipX":
                cc.director.runScene(new cc.TransitionFlipX(1, scene));
                break;
            case "TransitionFlipY":
                cc.director.runScene(new cc.TransitionFlipY(1, scene));
                break;
            case "TransitionJumpZoom":
                cc.director.runScene(new cc.TransitionJumpZoom(1, scene));
                break;
            case "TransitionMoveInB":
                cc.director.runScene(new cc.TransitionMoveInB(1, scene));
                break;
            case "TransitionMoveInL":
                cc.director.runScene(new cc.TransitionMoveInL(1, scene));
                break;
            case "TransitionMoveInT":
                cc.director.runScene(new cc.TransitionMoveInT(1, scene));
                break;
            case "TransitionMoveInR":
                cc.director.runScene(new cc.TransitionMoveInR(1, scene));
                break;
            case "TransitionPageTurn":
                cc.director.runScene(new cc.TransitionPageTurn(1, scene, true));
                break;
            case "TransitionProgressHorizontal":
                cc.director.runScene(new cc.TransitionProgressHorizontal(1, scene));
                break;
            case "TransitionProgressInOut":
                cc.director.runScene(new cc.TransitionProgressInOut(1, scene));
                break;
            case "TransitionProgressOutIn":
                cc.director.runScene(new cc.TransitionProgressOutIn(1, scene));
                break;
            case "TransitionProgressVertical":
                cc.director.runScene(new cc.TransitionProgressVertical(1, scene));
                break;
            case "TransitionShrinkGrow":
                cc.director.runScene(new cc.TransitionShrinkGrow(1, scene));
                break;
            case "TransitionSlideInB":
                cc.director.runScene(new cc.TransitionSlideInB(1, scene));
                break;
            case "TransitionSlideInL":
                cc.director.runScene(new cc.TransitionSlideInL(1, scene));
                break;
            case "TransitionSlideInR":
                cc.director.runScene(new cc.TransitionSlideInR(1, scene));
                break;
            case "TransitionSlideInT":
                cc.director.runScene(new cc.TransitionSlideInT(1, scene));
                break;
            case "TransitionSplitCols":
                cc.director.runScene(new cc.TransitionSplitCols(1, scene));
                break;
            case "TransitionSplitRows":
                cc.director.runScene(new cc.TransitionSplitRows(1, scene));
                break;
            case "TransitionTurnOffTiles":
                cc.director.runScene(new cc.TransitionTurnOffTiles(1, scene));
                break;
        } 
    } else {
        cc.director.runScene(new DirectorLayer.getScene());
    }
};
