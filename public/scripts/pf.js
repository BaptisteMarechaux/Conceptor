var PF = (function (){
	self = {};

	var centerButton;
	var centerButtonClicked = false;
	var centerButtonHovered = false;
	var items;
	var clickMeCenterText;

	self.initialize = function() {
		centerButton = document.getElementById("centerButton");
		clickMeCenterText = document.getElementById("clickMeCenterText");
		items = document.getElementsByClassName("menuItem");

		centerButton.addEventListener("mouseover", function() {
			centerButtonHovered = true;
			if(!centerButtonClicked)
				clickMeCenterText.className = "visible";
			document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
		});

		centerButton.addEventListener("mouseout", function() {
			centerButtonHovered = false;
			clickMeCenterText.className = "hidden";
			if(!centerButtonClicked)
				document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
		});

		centerButton.addEventListener("click", function() {
			centerButtonClicked = !centerButtonClicked;
			if(centerButtonClicked == true) {
				showMenuItems();
				
			}
			else {
				hideMenuItems();
			}
		});
	};

	function showMenuItems() {
		centerButton.className = "bigCircle active black";
		clickMeCenterText.className = "hidden";
		centerButton.style.webkitTransform = "";
		for(var i=0;i<items.length;i++) {
			items[i].className = "menuItem visible";
		}
	}

	function hideMenuItems() {
		centerButton.className = "bigCircle inactive";
		centerButtonHovered = false;
		document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
		clickMeCenterText.className = "hidden";
		for(var i=0;i<items.length;i++) {
			items[i].className = "menuItem hidden";
		}
	}

	return self;
})();

