(function () {
	DialogueManager = function (_speed) {

		this.textSpeed = _speed;

		this.writtedText;

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

	return DialogueManager;
})();

