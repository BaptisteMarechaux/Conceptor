angular.module('ConceptorApp', [])
.controller('ConceptorMainController', function($scope, $interval) {
	self = this;
	var centerButton;
	centerButton = document.getElementById("centerButton");
	var subCircle;
	subCircle = document.getElementById("subCircle");

	var bigCircleClicked = false;
	var centerButtonHovered = false;

	$scope.clickOnBigCircle = function() {
		bigCircleClicked = !bigCircleClicked;
		if(bigCircleClicked)
			showMenuItems();
		else
			hideMenuItems();
	};

	$scope.getBigCircleClass = function() {
		return bigCircleClicked ? "bigCircle active black" : "bigCircle inactive";
	};

	$scope.getMyNameClass = function() {
		return bigCircleClicked ? "myName active" : "myName inactive";
	};

	$scope.getMenuItemClass = function() {
		if(bigCircleClicked)
		{
			return "menuItem visible";
		}
		else
		{
			return "menuItem hidden";
		}
	};

	$scope.changeBackgroundColor = function(color)
	{
		console.log("ChangeColor");
		document.body.style.backgroundColor = color;
	};


	function showMenuItems() {
		centerButton.style.webkitTransform = "";

		myName.innerHTML = "Baptiste Maréchaux";

		subCircle.style.visibility = "hidden";
		
		document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
	}

	function hideMenuItems() {
		centerButtonHovered = false;

		myName.innerHTML = "BM";

		subCircle.style.visibility = "visible";

		document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
	}

	centerButton.addEventListener("mouseover", function() {
		centerButtonHovered = true;
		if(!bigCircleClicked)
			document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
	});

	centerButton.addEventListener("mouseout", function() {
		centerButtonHovered = false;
		if(!bigCircleClicked)
			document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
	});
});