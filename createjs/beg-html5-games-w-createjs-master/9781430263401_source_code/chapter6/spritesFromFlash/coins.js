(function (window) {
    GreenCoin = function () {
        this.initialize();
    }
    GreenCoin._SpriteSheet = new createjs.SpriteSheet({images:["coins.png"], frames:[
        [0, 0, 78, 78, 0, 38.4, 38.5],
        [78, 0, 78, 78, 0, 38.4, 38.5],
        [156, 0, 78, 78, 0, 38.4, 38.5],
        [234, 0, 78, 78, 0, 38.4, 38.5],
        [312, 0, 78, 78, 0, 38.4, 38.5],
        [390, 0, 78, 78, 0, 38.4, 38.5],
        [468, 0, 78, 78, 0, 38.4, 38.5],
        [546, 0, 78, 78, 0, 38.4, 38.5]
    ]});
    var GreenCoin_p = GreenCoin.prototype = new createjs.Sprite();
    GreenCoin_p.Sprite_initialize = GreenCoin_p.initialize;
    GreenCoin_p.initialize = function () {
        this.Sprite_initialize(GreenCoin._SpriteSheet);
        this.paused = false;
    }
    window.GreenCoin = GreenCoin;
    PinkCoin = function () {
        this.initialize();
    }
    PinkCoin._SpriteSheet = new createjs.SpriteSheet({images:["coins.png"], frames:[
        [624, 0, 78, 78, 0, 38.4, 38.5],
        [702, 0, 78, 78, 0, 38.4, 38.5],
        [780, 0, 78, 78, 0, 38.4, 38.5],
        [858, 0, 78, 78, 0, 38.4, 38.5],
        [936, 0, 78, 78, 0, 38.4, 38.5],
        [0, 78, 78, 78, 0, 38.4, 38.5],
        [78, 78, 78, 78, 0, 38.4, 38.5],
        [156, 78, 78, 78, 0, 38.4, 38.5]
    ]});
    var PinkCoin_p = PinkCoin.prototype = new createjs.Sprite();
    PinkCoin_p.Sprite_initialize = PinkCoin_p.initialize;
    PinkCoin_p.initialize = function () {
        this.Sprite_initialize(PinkCoin._SpriteSheet);
        this.paused = false;
    }
    window.PinkCoin = PinkCoin;
    YellowCoin = function () {
        this.initialize();
    }
    YellowCoin._SpriteSheet = new createjs.SpriteSheet({images:["coins.png"], frames:[
        [234, 78, 77, 78, 0, 38.4, 38.5],
        [311, 78, 77, 78, 0, 38.4, 38.5],
        [388, 78, 77, 78, 0, 38.4, 38.5],
        [465, 78, 77, 78, 0, 38.4, 38.5],
        [542, 78, 77, 78, 0, 38.4, 38.5],
        [619, 78, 77, 78, 0, 38.4, 38.5],
        [696, 78, 77, 78, 0, 38.4, 38.5],
        [773, 78, 77, 78, 0, 38.4, 38.5]
    ]});
    var YellowCoin_p = YellowCoin.prototype = new createjs.Sprite();
    YellowCoin_p.Sprite_initialize = YellowCoin_p.initialize;
    YellowCoin_p.initialize = function () {
        this.Sprite_initialize(YellowCoin._SpriteSheet);
        this.paused = false;
    }
    window.YellowCoin = YellowCoin;
}(window));

