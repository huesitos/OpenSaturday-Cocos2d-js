var AnimationLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        var btn = new cc.MenuItemFont("Events", this.onNodes);
        btn.setColor(cc.color.WHITE);
        btn.attr({x: size.width * .90, y: size.height * .15});
        
        var menu = new cc.Menu(btn);
        menu.x = menu.y = 0;
        this.addChild(menu);
        
        return true;
    },
    onNodes: function () {
        cc.log("events");
    }
});

AnimationLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new AnimationLayer());
    
    return scene;
}