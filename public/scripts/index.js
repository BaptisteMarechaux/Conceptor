requirejs(["socketio", "bmpf/bmportfolio"], 
	function (io, bmpf) {
		/*
		document.addEventListener('DOMContentLoaded', function () {
		  ng.platform.browser.bootstrap(MyAppComponent,
		    [MyService, ng.core.provide(...)]);
		});
		*/
		var d = new bmpf("My Name");

		console.log(d);
	}
);