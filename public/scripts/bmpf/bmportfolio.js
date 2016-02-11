define("bmpf/bmportfolio", ["socketio"],
	function (io) {
		var socket = io;

		function BMPF (name) {
			this.name = "";

			this.__initialize(name);
		}

		BMPF.prototype = {
			__initialize : function (name) {
				this.name = name;
			}
		};

		return BMPF;
	}
);