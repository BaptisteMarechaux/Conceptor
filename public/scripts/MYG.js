var MYG = (function() {
	var self = {};

	var instance; 

	gameStates = {
		waiting : 0,
		textiswriting : 1,
		waitnexttext : 2,
		battle : 40,
		battleMenu : 41
	}

	self.Game = function (_canvas) {
		instance = this;
		this.manager;
		this.canvas = _canvas;
		this.stage = new createjs.Stage(_canvas);
		this.gameState;
		

		this.content = [];

		this._initialize();
	}

	self.Game.prototype = {
		_initialize : function () {

			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick", this.stage);
			this.windowResizeListener();
			this.titleScreen();
		},
		titleScreen : function () {

			var background = new createjs.Shape();
			background.graphics.beginFill("#4D9FF2").drawRect(0,0, 1920, 1080);
			var titleBand = new createjs.Shape();
			titleBand.graphics.beginFill("#3A3A3A").drawRect(0, 0, 1920, 100);

			titleBand.y = 880;
			titleBand.x = -1200;
			titleBand.alpha =  0;

			var pressText = new createjs.Text("Start", "64px open_sanslight", "#ECF0F1");
			pressText.textBaseline = "top";
			pressText.textAlign = "center";
			pressText.alpha = 0;
			pressText.x = 0;
			pressText.y =  880;

			var titleText = new createjs.Text("M Y G", "320px open_sanslight", "#ECF0F1");
			titleText.textAlign = "center";
			titleText.textBaseline = "alphabetic";
			titleText.alpha = 0;
			titleText.x = 960;
			titleText.y = 560;

			this.content.push(background);
			this.content.push(titleBand);
			this.content.push(pressText);
			this.content.push(titleText);

			this.stage.addChild(background);
			this.stage.addChild(titleBand);
			this.stage.addChild(pressText);
			this.stage.addChild(titleText)

			createjs.Tween.get(titleBand, { loop: false })
			.to({ x: 0, alpha : 1 }, 800, createjs.Ease.getPowInOut(4));

			createjs.Tween.get(pressText, { loop: false })
			.to({ x: 960, alpha : 1 }, 1000, createjs.Ease.getPowInOut(4))
			.call(function () {
				createjs.Tween.get(pressText, { loop: true })
				.to({alpha : 0 }, 500, createjs.Ease.getPowInOut(4))
				.to({alpha : 1 }, 500, createjs.Ease.getPowInOut(4));
			});

			createjs.Tween.get(titleText, { loop: false })
			.to({alpha : 1 , y : 460}, 1000, createjs.Ease.getPowInOut(4));

			var t = this;

			this.stage.addEventListener("click", t.goToIntroScene);

		},
		goToIntroScene : function () {
			console.log(instance);
			for(var i=0;i<instance.content.length;i++) {
				createjs.Tween.removeTweens (instance.content[i]);
				createjs.Tween.get(instance.content[i], { loop: false })
				.to({alpha : 0 }, 500, createjs.Ease.getPowInOut(4));

				instance.stage.removeChild(instance.content[i]);
			}
			instance.introScene();
		},
		introScene : function () {
			this.stage.removeEventListener("click", this.goToIntroScene);
			this.gameState = gameStates.waiting;
			dialogueManager =  new DialogueManager(1);

			var background = new createjs.Shape();
			background.graphics.beginFill("#4D9FF2").drawRect(0,0, 1920, 1080);
			background.alpha = 1;

			var dText = new createjs.Text("Start", "64px open_sanslight", "#ECF0F1");
			dText.textBaseline = "top";
			dText.textAlign = "left";
			dText.alpha = 0;
			dText.x = 5;
			dText.y =  880;

			var textBox = new createjs.Shape();
			textBox.graphics.beginFill("#000000").drawRect(0,0, 1900, 300);
			textBox.x = 10;
			textBox.y = 770;
			textBox.alpha = 0;

			this.stage.addChild(background);
			this.stage.addChild(textBox);
			this.stage.addChild(dText);

			createjs.Tween.get(background, { loop: false })
			.to({ alpha : 1 }, 500, createjs.Ease.getPowInOut(4));

			createjs.Tween.get(dText, { loop: false })
			.to({ alpha : 1 }, 800, createjs.Ease.getPowInOut(4));

			createjs.Tween.get(textBox, { loop: false })
			.to({ alpha : 0.5 }, 800, createjs.Ease.getPowInOut(4));

		},
		keyListener : function () {
			window.addEventListener("keypress", function (e) { keyInterpreter(e) } );
		},
		keyInterpreter : function (e) {

		},

		windowResizeListener : function (e) {
			var t = this;
			console.log(window.screen.width);
			if(window.screen.width > 768) {
				var c = document.getElementById(t.canvas);
				c.style.width = window.innerWidth/2 + "px" ;
				c.style.height = (window.innerWidth/2 * 0.5625) + "px";
			}
			else {

				var c = document.getElementById(t.canvas);
				c.style.width = window.screen.width + "px" ;
				c.style.height = (window.screen.width * 0.5625) + "px";
			}

			window.addEventListener("resize", function () {
				if(window.screen.width > 768) {
					var c = document.getElementById(t.canvas);
					c.style.width = window.innerWidth/2 + "px" ;
					c.style.height = (window.innerWidth/2 * 0.5625) + "px";
				}
				else {
					var c = document.getElementById(t.canvas);
					
					c.style.width = window.innerWidth + "px" ;
					c.style.height = (window.innerWidth * 0.5625) + "px";
				}
				
			});
		}
	}

	return self;
})();