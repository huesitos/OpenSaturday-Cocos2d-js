var res = {
    HelloWorld_png : "res/HelloWorld.png",
    LIFO_png : "res/lifo.png",
    SceneBg_png : "res/scene_bg.png",
    Blipper_png : "res/blipper.png",
    Bouncy_png : "res/bouncy.png",
    Cappy_png : "res/cappy.png",
    Glunk_png : "res/glunk.png",
    Kirby_png : "res/kirby.png",
    titleFont : {type: "font", name: "Arcade", srcs: ["res/arcadeclassic.regular.ttf"]}
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
