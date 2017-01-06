angular.module('ConceptorApp', [])
.controller('ConceptorMainController', function($scope, $interval) {
	self = this;
	var centerButton;
	centerButton = document.getElementById("centerButton");
	var subCircle;
	subCircle = document.getElementById("subCircle");

	var bigCircleClicked = false;
	var centerButtonHovered = false;
	var state = {
		main : 0, 
		about : 1,
		games : 2,
		prog : 3,
		art : 4
	};
	var appState = state.main;

	//Scope Functions

	$scope.clickOnBigCircle = function() {
		bigCircleClicked = !bigCircleClicked;
		if(bigCircleClicked)
			showMenuItems();
		else
			hideMenuItems();
	};

	$scope.onMouseOverBigCircle = function() {
		centerButtonHovered = true;
		if(!bigCircleClicked)
			document.body.style.backgroundColor = "rgba(239, 108, 0, 0.4)";
	};

	$scope.onMouseOutBigCircle = function() {
		centerButtonHovered = false;
		if(!bigCircleClicked)
			document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
	};

	$scope.changeBackgroundColor = function(color)
	{
		console.log("ChangeColor");
		document.body.style.backgroundColor = color;
	};

	$scope.showAboutMe = function() {
		appState = state.about;
	};

	$scope.showProgramming = function() {

	};

	$scope.showGames = function() {

	};

	$scope.showArt = function() {

	}


	//Style Classes

	$scope.getMainSectionClass = function() {
		return "";
	};

	$scope.getBigCircleClass = function() {
		return bigCircleClicked ? "bigCircle active black" : "bigCircle inactive";
	};

	$scope.getMyNameClass = function() {
		return bigCircleClicked ? "myName active" : "myName inactive";
	};

	$scope.getMenuItemClass = function(index) {
		if(bigCircleClicked)
		{
			if(appState == state.about && index == 1)
			{
				return "menuItem visible selected";
			}
			else
			{
				return "menuItem visible";
			}
			
		}
		else
		{
			return "menuItem hidden";
		}
	};

	$scope.getAboutClass = function() {
		if(appState == state.about)
		{
			return "aboutSection"
		}
		else
		{
			return "aboutSection hidden"
		}
	};

	$scope.getProgrammingSectionClass = function() {
		if(appState == state.prog)
		{
			return "programmingSection"
		}
		else
		{
			return "programmingSection hidden"
		}
	};

	$scope.getGamesSectionClass = function() {
		if(appState == state.games)
		{
			return "gamesSection"
		}
		else
		{
			return "gamesSection hidden"
		}
	};

	$scope.getArtSectionClass = function() {
		if(appState == state.art)
		{
			return "artSection"
		}
		else
		{
			return "artSection hidden"
		}
	};

	$scope.goBack = function () {
		console.log("goBack");
		if(appState != state.main)
		{
			appState = appState.main;
		}
	};

	//Private functions

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

});