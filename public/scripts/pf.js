var PF = (function (){
	self = {};

	var centerButton;
	var centerButtonClicked = false;
	var centerButtonHovered = false;
	var items;
	var myName;
	var subCircle;

	var itemColors = [
		"#E57373",
		"#64B5F6",
		"#FFA726",
		"#F06292"
	]

	self.initialize = function() {
		centerButton = document.getElementById("centerButton");
		items = document.getElementsByClassName("menuItem");
		myName = document.getElementById("myName");
		subCircle = document.getElementById("subCircle");

		for(var i=0;i<items.length;i++) {
			(function(index) {
				items[index].addEventListener("mouseover", function() {
					document.body.style.backgroundColor = itemColors[index];
				});

				items[index].addEventListener("mouseout", function () {
					document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
				});
			})(i)
		}

		centerButton.addEventListener("mouseover", function() {
			centerButtonHovered = true;
			if(!centerButtonClicked)
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

		myName.innerHTML = "Baptiste Maréchaux";
		myName.className = "myName active";

		subCircle.style.visibility = "hidden";
		
		document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
		for(var i=0;i<items.length;i++) {
			items[i].className = "menuItem visible";
		}
	}

	function hideMenuItems() {
		centerButton.className = "bigCircle inactive";
		centerButtonHovered = false;
		myName.innerHTML = "BM";
		myName.className = "myName inactive";

		subCircle.style.visibility = "visible";

		document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
		for(var i=0;i<items.length;i++) {
			items[i].className = "menuItem hidden";
		}
	}

	return self;
})();

