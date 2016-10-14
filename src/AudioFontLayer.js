var AudioFontLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(new cc.Color(255,248,220));
        
        var size = cc.winSize;
        
        /////////////////////////////
        // 2. add scene title label
        var titleLabel = new cc.LabelTTF("Audios & Fonts", "Arcade", 100);
        titleLabel.attr({x: size.width / 2, y: size.height * .90});
        titleLabel.setColor(cc.color.BLACK);
        this.addChild(titleLabel);
        
        /////////////////////////////
        // 3. add audio buttons
        // effects
        var effectsLabel = new cc.LabelTTF("Effects", "Helvetica", 40);
        effectsLabel.attr({
            x: size.width * .25,
            y: size.height * .7
        });
        effectsLabel.setColor(cc.color.BLACK);
        this.addChild(effectsLabel);
        
        var playEffectBtn1 = new ccui.Button(res.Play_png);
        playEffectBtn1.setPosition(size.width * .15, size.height * .60);
        playEffectBtn1.setScale(2);
        playEffectBtn1.addTouchEventListener(function () {
            cc.audioEngine.playEffect(res.BowFire_mp3);
        }, this);
        this.addChild(playEffectBtn1);
        
        var playEffectBtn2 = new ccui.Button(res.Play_png);
        playEffectBtn2.setPosition(size.width * .25, size.height * .60);
        playEffectBtn2.setScale(2);
        playEffectBtn2.addTouchEventListener(function () {
            cc.audioEngine.playEffect(res.RayGun_mp3);
        }, this);
        this.addChild(playEffectBtn2);
        
        var playEffectBtn3 = new ccui.Button(res.Play_png);
        playEffectBtn3.setPosition(size.width * .35, size.height * .60);
        playEffectBtn3.setScale(2);
        playEffectBtn3.addTouchEventListener(function () {
            cc.audioEngine.playEffect(res.StrongPunch_mp3);
        }, this);
        this.addChild(playEffectBtn3);
        
        // music
        var musicLabel = new cc.LabelTTF("Music", "Helvetica", 40);
        musicLabel.attr({
            x: size.width * .25,
            y: size.height * .40
        });
        musicLabel.setColor(cc.color.BLACK);
        this.addChild(musicLabel);
        
        var playMusicBtn = new ccui.Button(res.Play_png);
        playMusicBtn.setPosition(size.width * .15, size.height * .30);
        playMusicBtn.setScale(2);
        playMusicBtn.addTouchEventListener(function () {
            if (!cc.audioEngine.isMusicPlaying())
                cc.audioEngine.playMusic(res.FinalFantasy_mp3, true);
        }, this);
        this.addChild(playMusicBtn);
        
        var pauseMusicBtn = new ccui.Button(res.Pause_png);
        pauseMusicBtn.setPosition(size.width * .25, size.height * .30);
        pauseMusicBtn.setScale(2);
        pauseMusicBtn.addTouchEventListener(function () {
            if (cc.audioEngine.isMusicPlaying())
                cc.audioEngine.pauseMusic();
        }, this);
        this.addChild(pauseMusicBtn);
        
        var replayMusicBtn = new ccui.Button(res.Replay_png);
        replayMusicBtn.setPosition(size.width * .35, size.height * .30);
        replayMusicBtn.setScale(2);
        replayMusicBtn.addTouchEventListener(function () {
            if (cc.audioEngine.isMusicPlaying())
                cc.audioEngine.rewindMusc();
        }, this);
        this.addChild(replayMusicBtn);
        
        /////////////////////////////
        // 4. add labels
        var frenteLabel = new cc.LabelTTF("The quick cat...", "Frente", 60);
        frenteLabel.attr({
            x: size.width * .70,
            y: size.height * .7
        });
        frenteLabel.setColor(cc.color.BLACK);
        this.addChild(frenteLabel);
        
        var hargntonLabel = new cc.LabelTTF("The quick cat...", "Harngton", 60);
        hargntonLabel.attr({
            x: size.width * .70,
            y: size.height * .6
        });
        hargntonLabel.setColor(cc.color.BLACK);
        this.addChild(hargntonLabel);
        
        var jennaSueLabel = new cc.LabelTTF("The quick cat...", "JennaSue", 60);
        jennaSueLabel.attr({
            x: size.width * .70,
            y: size.height * .5
        });
        jennaSueLabel.setColor(cc.color.BLACK);
        this.addChild(jennaSueLabel);
        
        var lavanderLabel = new cc.LabelTTF("The quick cat...", "Lavander", 60);
        lavanderLabel.attr({
            x: size.width * .70,
            y: size.height * .4
        });
        lavanderLabel.setColor(cc.color.BLACK);
        this.addChild(lavanderLabel);
        
        var vinchadLabel = new cc.LabelTTF("The quick cat...", "Vinchad", 60);
        vinchadLabel.attr({
            x: size.width * .70,
            y: size.height * .3
        });
        vinchadLabel.setColor(cc.color.BLACK);
        this.addChild(vinchadLabel);        
        
        /////////////////////////////
        // 5. add scene title label
        var btn = new cc.MenuItemFont("End", this.onEnd);
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
    onEnd: function () {
        cc.director.runScene(new cc.TransitionSlideInR(1, EndLayer.getScene()));
    },
    onBack: function () {
        cc.director.runScene(new cc.TransitionSlideInL(1, EventsLayer.getScene()));
    }
});

AudioFontLayer.getScene = function () {
    var scene = new cc.Scene();
    scene.addChild(new AudioFontLayer());
    
    return scene;
}