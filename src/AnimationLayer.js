var AnimationLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        var btn = new cc.MenuItemFont("Events", this.onEvents);
        btn.setColor(cc.color.WHITE);
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