var EventsLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(new cc.Color(255,248,220));
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 1. add scene title label
        var titleLabel = new cc.LabelTTF("Events", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height * .90});
        titleLabel.setColor(cc.color.BLACK);
        this.addChild(titleLabel);
        
        /////////////////////////////
        // 2. add mouse and keyboard events
        
        // mouse info labels
        var mouseEvents = new cc.LabelTTF("Mouse Events", "Helvetica", 40);
        mouseEvents.attr({
            x: size.width * .20,
            y: size.height * .7
        });
        mouseEvents.setColor(cc.color.BLACK);
        this.addChild(mouseEvents);
        
        var mousePos = new cc.LabelTTF("Mouse pos:", "Helvetica", 35);
        mousePos.attr({
            x: size.width * .18,
            y: size.height * .6
        });
        mousePos.setColor(cc.color.BLACK);
        this.addChild(mousePos);
        
        var mouseDown = new cc.LabelTTF("Mouse down pos:", "Helvetica", 35);
        mouseDown.attr({
            x: size.width * .18,
            y: size.height * .5
        });
        mouseDown.setColor(cc.color.BLACK);
        this.addChild(mouseDown);
        
        var mouseUp = new cc.LabelTTF("Mouse up pos:", "Helvetica", 35);
        mouseUp.attr({
            x: size.width * .18,
            y: size.height * .4
        });
        mouseUp.setColor(cc.color.BLACK);
        this.addChild(mouseUp);
        
        // mouse event listener
        
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (event) {
                var x = event.getLocation().x.toFixed(2);
                var y = event.getLocation().y.toFixed(2);
                mouseDown.setString("Mouse down: (" + x + ", " + y + ")");
            },
            onMouseUp: function (event) {
                var x = event.getLocation().x.toFixed(2);
                var y = event.getLocation().y.toFixed(2);
                mouseUp.setString("Mouse up: (" + x + ", " + y + ")");
            },
            onMouseMove: function (event) {
                var x = event.getLocation().x.toFixed(2);
                var y = event.getLocation().y.toFixed(2);
                mousePos.setString("Mouse pos: (" + x + ", " + y + ")");
            }
        }, this);
        
        // keyboard info labels
        var keyboardEvents = new cc.LabelTTF("Keyboard Events", "Helvetica", 40);
        keyboardEvents.attr({
            x: size.width * .50,
            y: size.height * .7
        });
        keyboardEvents.setColor(cc.color.BLACK);
        this.addChild(keyboardEvents);
        
        var pressedKey = new cc.LabelTTF("Pressed key:", "Helvetica", 35);
        pressedKey.attr({
            x: size.width * .5,
            y: size.height * .6
        });
        pressedKey.setColor(cc.color.BLACK);
        this.addChild(pressedKey);
        
        var keyDown = new cc.LabelTTF("Key down", "Helvetica", 35);
        keyDown.attr({
            x: size.width * .5,
            y: size.height * .5
        });
        keyDown.setVisible(false);
        keyDown.setColor(cc.color.BLACK);
        this.addChild(keyDown);
        
        var keyUp = new cc.LabelTTF("Key up", "Helvetica", 35);
        keyUp.attr({
            x: size.width * .5,
            y: size.height * .5
        });
        keyUp.setColor(cc.color.BLACK);
        this.addChild(keyUp);
        
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (key, event) {
                keyUp.setVisible(false);
                keyDown.setVisible(true);
                pressedKey.setString("Pressed key: " + key);
            },
            onKeyReleased: function (key, event) {
                keyUp.setVisible(true);
                keyDown.setVisible(false);
            }
        }, this);
        
        // keyboard info labels
        var otherEvents = new cc.LabelTTF(
            "Other Events\n\n" +
            "Custom\n" +
            "Accelerometer\n" +
            "Touch (mobiles)", "Helvetica", 35);
        otherEvents.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        otherEvents.attr({
            x: size.width * .80,
            y: size.height * .72
        });
        otherEvents.setAnchorPoint(cc.p(.5, 1));
        otherEvents.setColor(cc.color.BLACK);
        this.addChild(otherEvents);
        
        /////////////////////////////
        // 3. add navigation menu        
        var btn = new cc.MenuItemFont("Audio & Fonts", this.onAudioFonts);
        btn.setColor(cc.color.BLACK);
        btn.attr({x: size.width * .90, y: size.height * .15});
        
        var backBtn = new cc.MenuItemFont(
            "Animations",
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