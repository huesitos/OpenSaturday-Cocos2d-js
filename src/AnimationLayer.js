var AnimationLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(new cc.Color(255,248,220));
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 1. add scene title label
        var titleLabel = new cc.LabelTTF("Animations", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height * .90});
        titleLabel.setColor(cc.color.BLACK);
        this.addChild(titleLabel);
        
        // create monster sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.Monster_plist);
        this.monsterSpriteSheet = new cc.SpriteBatchNode(res.Monster_png);
        this.addChild(this.monsterSpriteSheet);
        
        // init monster animation
        var monsterAnimFrames = [];
        for (var i = 0; i < 6; i++) {
            var str = "pink-monster-" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            monsterAnimFrames.push(frame);
        }
        
        var flyAnimation = new cc.Animation(monsterAnimFrames, 0.1);
        this.flyingAction = new cc.RepeatForever(new cc.Animate(flyAnimation));
        
        var pinkMonster = new cc.Sprite("#pink-monster-0.png");
        pinkMonster.attr({x: size.width * .30, y: size.height * .50});
        pinkMonster.runAction(this.flyingAction);
        this.addChild(pinkMonster);
        
        // create explode sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.Explode_plist);
        this.explodeSpriteSheet = new cc.SpriteBatchNode(res.Explode_png);
        this.addChild(this.explodeSpriteSheet);
        
        // init explode animation
        var explodeAnimFrames = [];
        explodeAnimFrames.push(cc.spriteFrameCache.getSpriteFrame("pink-monster-0.png"));
        for (var i = 0; i < 5; i++) {
            var str = "explode-" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            explodeAnimFrames.push(frame);
        }

        var explodeAnimation = new cc.Animation(explodeAnimFrames, 0.2);
        this.explodeAction = new cc.RepeatForever(new cc.Animate(explodeAnimation));
        
        var pinkMonsterExplode = new cc.Sprite("#pink-monster-0.png");
        pinkMonsterExplode.attr({x: size.width * .70, y: size.height * .50});
        pinkMonsterExplode.runAction(this.explodeAction);
        this.addChild(pinkMonsterExplode);
        
        var animationsInfoLabel = new cc.LabelTTF(
            "Use a .plist with its corresponding .png\n" +
            "Don't forget to add it to the resource file",
            "Helvetica",
            40
        );
        animationsInfoLabel.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        animationsInfoLabel.attr({
            x: size.width * .5,
            y: size.height * .25
        });
        animationsInfoLabel.setColor(cc.color.BLACK);
        this.addChild(animationsInfoLabel);
        
        /////////////////////////////
        // 2. add navigation menu
        
        var btn = new cc.MenuItemFont("Events", this.onEvents);
        btn.setColor(cc.color.BLACK);
        btn.attr({x: size.width * .90, y: size.height * .15});
        
        var backBtn = new cc.MenuItemFont(
            "cc.director",
            this.onBack
        );
        backBtn.attr({
            x: size.width * .10,
            y: size.height * .15
        });
        backBtn.setColor(cc.color.BLACK);
        
        var menu = new cc.Menu(btn, backBtn);
        menu.x = menu.y = 0;
        this.addChild(menu);
        
        return true;
    },
    onEvents: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, EventsLayer.getScene()));
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, ActionsLayer.getScene()));
    }
});

AnimationLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new AnimationLayer());
    
    return scene;
}