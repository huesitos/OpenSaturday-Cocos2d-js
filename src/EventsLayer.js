var EventsLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        
        var size = cc.winSize;
        
        var btn = new cc.MenuItemFont("Audio & Fonts", this.onAudioFonts);
        btn.setColor(cc.color.WHITE);
        btn.attr({x: size.width * .90, y: size.height * .15});
        
        var menu = new cc.Menu(btn);
        menu.x = menu.y = 0;
        this.addChild(menu);
        
        return true;
    },
    onAudioFonts: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, AudioFontLayer.getScene()));
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, AnimationLayer.getScene()));
    }
});

EventsLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new EventsLayer());
    
    return scene;
}