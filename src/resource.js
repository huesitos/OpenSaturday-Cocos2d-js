var res = {
    HelloWorld_png : "res/HelloWorld.png",
    LIFO_png : "res/lifo.png",
    SceneBg_png : "res/scene_bg.png",
    Blipper_png : "res/blipper.png",
    Bouncy_png : "res/bouncy.png",
    Cappy_png : "res/cappy.png",
    Glunk_png : "res/glunk.png",
    Sparky_png : "res/sparky.png",
    Kirby_png : "res/kirby.png",
    LayersStructure_png : "res/layerstructure.png",
    Monster_plist : "res/pink_monster.plist",
    Monster_png : "res/pink_monster.png",
    Explode_png : "res/explode.png",
    Explode_plist : "res/explode.plist",
    Play_png : "res/play.png",
    Pause_png : "res/pause.png",
    Replay_png : "res/replay.png",
    BowFire_mp3 : "res/audio/Bow_Fire_Arrow-Stephan_Schutze.mp3",
    FinalFantasy_mp3 : "res/audio/final_fantasy_tifa_piano_version.mp3",
    RayGun_mp3 : "res/audio/ray_gun-Mike_Koenig.mp3",
    StrongPunch_mp3 : "res/audio/Strong_Punch-Mike_Koenig.mp3",
    titleFont : {type: "font", name: "Arcade", srcs: ["res/fonts/arcadeclassic.regular.ttf"]},
    Frente_ttf : {type: "font", name: "Frente", srcs: ["res/fonts/FrenteH1-Regular.ttf"]},
    Hargnton_ttf : {type: "font", name: "Harngton", srcs: ["res/fonts/harngton.ttf"]},
    JennaSue_ttf : {type: "font", name: "JennaSue", srcs: ["res/fonts/JennaSue.ttf"]},
    Lavander_ttf : {type: "font", name: "Lavander", srcs: ["res/fonts/lavanderiadelicate.ttf"]},
    Vinchad_ttf : {type: "font", name: "Vinchad", srcs: ["res/fonts/Vinchad.ttf"]}
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
