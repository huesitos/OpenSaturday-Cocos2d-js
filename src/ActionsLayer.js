var ActionsLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(new cc.Color(255,248,220));
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 2. add scene title label
        var titleLabel = new cc.LabelTTF("Actions", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height * .90});
        titleLabel.setColor(cc.color.BLACK);
        this.addChild(titleLabel);
        
        /////////////////////////////
        // 1. action sequences
        this.delayTime = new cc.DelayTime(1);
        
        this.moveTo = new cc.MoveTo(1, cc.p(size.width * .45, size.height * .70));        
        this.jumpTo = new cc.JumpTo(2, cc.p(size.width * .15, size.height * .70), 50, 4);
        this.jumpTo2 = new cc.JumpTo(2, cc.p(size.width * .45, size.height * .25), 50, 4);
        var bezierOptions = [
            cc.p(size.width * .25, size.height * .85),
            cc.p(size.width * .35, size.height * .55),
            cc.p(size.width * .45, size.height * .70)
        ];
        this.bezierTo = new cc.BezierTo(2, bezierOptions);
        this.place = new cc.Place(cc.p(size.width * .25, size.height * .70));
        this.firstSequence = new cc.Sequence(
            this.moveTo, this.delayTime.clone(),
            this.jumpTo, this.delayTime.clone(),
            this.bezierTo, this.delayTime.clone(), 
            this.place, this.delayTime.clone()
        );
        
        this.scaleTo = new cc.ScaleTo(2, 0.4);
        this.scaleBack = new cc.ScaleTo(2, 0.3);
        this.rotateBy = new cc.RotateBy(2, 10);
        
        this.secondSequence = new cc.Spawn(
            new cc.Sequence(this.scaleTo, this.scaleBack), 
            new cc.Sequence(this.rotateBy)
        );
        
        this.tintToGreen = new cc.TintTo(1, 255, 0, 0);
        this.tintToRed = new cc.TintTo(1, 0, 255, 0);
        this.tintToWhite = new cc.TintTo(1, 255, 255, 255);
        this.fadeOff = new cc.FadeTo(0.2, 100);
        this.fadeOn = new cc.FadeTo(0.2, 255);
        this.skew = new cc.SkewTo(1, 5, 5);
        this.skewBack = new cc.SkewTo(1, -5, -5);
        
        this.thirdSequence = new cc.Sequence(this.tintToGreen, this.tintToRed, this.tintToWhite);
        this.fourthSequence = new cc.Sequence(this.fadeOff, this.fadeOn);
        this.fifthSequence = new cc.Sequence(this.skew, this.skewBack);
        
        /////////////////////////////
        // 3. nodes to run actions
        
        // blipper
        var blipper = new cc.Sprite(res.Blipper_png);
        blipper.attr({x: size.width * .15, y: size.height * .70});
        blipper.setScale(0.3);
        blipper.runAction(new cc.RepeatForever(this.firstSequence));
        this.addChild(blipper);
        
        var blipperActions = new cc.LabelTTF(
            "MoveTo, JumpTo, BezierTo, Place",
            "Helvetica",
            35
        );
        blipperActions.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        blipperActions.attr({
            x: size.width * .28,
            y: size.height * .55
        });
        blipperActions.setColor(cc.color.BLACK);
        this.addChild(blipperActions);
        
        // bouncy
        var bouncy = new cc.Sprite(res.Bouncy_png);
        bouncy.attr({x: size.width * .5, y: size.height * .30});
        bouncy.setScale(0.3);
        bouncy.runAction(new cc.RepeatForever(this.secondSequence));
        bouncy.runAction(new cc.RepeatForever(this.fourthSequence));
        this.addChild(bouncy);
        
        var bouncyActions = new cc.LabelTTF(
            "ScaleTo, RotateBy, FadeTo",
            "Helvetica",
            35
        );
        bouncyActions.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        bouncyActions.attr({
            x: size.width * .5,
            y: size.height * .10
        });
        bouncyActions.setColor(cc.color.BLACK);
        this.addChild(bouncyActions);
        
        // cappy        
        var cappy = new cc.Sprite(res.Cappy_png);
        cappy.attr({x: size.width * .75, y: size.height * .70});
        cappy.setScale(0.3);
        cappy.runAction(new cc.RepeatForever(this.thirdSequence));
        cappy.runAction(new cc.RepeatForever(this.fifthSequence));
        this.addChild(cappy);
        
        var cappyActions = new cc.LabelTTF(
            "TintTo, SkewTo",
            "Helvetica",
            35
        );
        cappyActions.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        cappyActions.attr({
            x: size.width * .75,
            y: size.height * .55
        });
        cappyActions.setColor(cc.color.BLACK);
        this.addChild(cappyActions);
                
        /////////////////////////////
        // 3. navigation menu
        var btn = new cc.MenuItemFont("Animations", this.onNodes);
        btn.setColor(cc.color.BLACK);
        btn.attr({x: size.width * .90, y: size.height * .15});
        
        var backBtn = new cc.MenuItemFont(
            "cc.director",
            this.onBack
        );
        backBtn.attr({
            x: size.width * .10,
            y: size.height * .20
        });
        backBtn.setColor(cc.color.BLACK);
        
        var menu = new cc.Menu(btn, backBtn);
        menu.x = menu.y = 0;
        this.addChild(menu);
        
        return true;
    },
    onNodes: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, AnimationLayer.getScene()));
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, SceneLayer.getScene()));
    }
});

ActionsLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new ActionsLayer());
    
    return scene;
}