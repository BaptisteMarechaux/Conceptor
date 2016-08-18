var PF = (function (){
	self = {};

	var centerButton;
	var centerButtonClicked = false;
	var centerButtonHovered = false;
	var items;

	self.initialize = function() {
		centerButton = document.getElementById("centerButton");
		items = document.getElementsByClassName("menuItem");

		centerButton.addEventListener("mouseover", function() {
			centerButtonHovered = true;
			document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
		});

		centerButton.addEventListener("mouseout", function() {
			centerButtonHovered = false;
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
		centerButton.style.webkitTransform = "";
		document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
		for(var i=0;i<items.length;i++) {
			items[i].className = "menuItem visible";
		}
	}

	function hideMenuItems() {
		centerButton.className = "bigCircle inactive";
		centerButtonHovered = false;
		document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
		for(var i=0;i<items.length;i++) {
			items[i].className = "menuItem hidden";
		}
	}

	return self;
})();

