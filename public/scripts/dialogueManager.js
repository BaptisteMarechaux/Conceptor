(function () {
	DialogueManager = function (_speed) {

		this.textSpeed = _speed;

		this.writtenText;

		this._initialize();
	}

	DialogueManager.prototype = {
		_initialize : function () {

		},
		write : function (wString) {
			var s; //final string to be returned
			
			//requestAnimationFrame(this.write);
			return s;
		}
	}

	window.requestAnimationFrame(function () {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000/60);
				}
	});

	function animate() {
		requestAnimationFrame(animate);

	}

	return DialogueManager;
})();

