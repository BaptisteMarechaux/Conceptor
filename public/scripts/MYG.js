var MYG = (function() {
	var self = {};

	self.Game = function (_canvas) {
		this.manager;
		this.canvas = _canvas;
		this.stage = new createjs.Stage(_canvas);

		this._initialize();
	}

	self.Game.prototype = {
		_initialize : function () {
			var circle = new createjs.Shape();
			circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
			circle.x = 100;
			circle.y = 100;
			this.stage.addChild(circle);

			createjs.Tween.get(circle, { loop: true })
			.to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
			.to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
			.to({ alpha: 0, y: 225 }, 100)
			.to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
			.to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));


			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick", this.stage);
		},
		titleScreen : function () {
			var background = new createjs.Shape();
			background.graphics.beginFill("#4D9FF2");
			var titleBand = new createjs.Shape();
			titleBand.graphics.beginFill("#3A3A3A");

			titleBand.y = 100;
			titleBand.alpha =  0;

			this.stage.addChild(background);
			this.stage.addChild(titleBand);

			createjs.Tween.get(background)
		},
		keyListener : function () {
			window.addEventListener("keypress", function (e) { keyInterpreter(e) } );
		},
		keyInterpreter : function (e) {

		}
	}

	return self;
})();