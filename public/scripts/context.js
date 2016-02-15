var ContextMenuModule = (function () {
	var self = {};

	self.ContextMenu = function (_itemClass, _menuItems, _dataActions) {
		this.html = "";
		this.menuItems = typeof _menuItems !== 'undefined' ? _menuItems : [""];
		this.dataActions = typeof _dataActions !== 'undefined' ? _dataActions : [""];
		this.contextItems;
		this.itemClassName = typeof _itemClass !== 'undefined' ? _itemClass : "";
		this.itemInContext;
		this.menu;
		this.menuState = 0;
		this.activeClassName = "context-menu--active";
		this.contextMenuItemClassName = "context-menu__item"
		this.contextMenuLinkClassName = "context-menu__link";

		this.menuPosition;
		this.menuPositionX;
		this.menuPositionY;

		this.menuWidth;
		this.menuHeight;

		this.windowWidth;
		this.windowHeight;

		this.touchPos;

		this.clickCoords;
		this.clickCoordsX;
		this.clickCoordsY;

		this._initialize();
	}

	self.ContextMenu.prototype = {
		_initialize : function () {
			this.html = '<nav class="context-menu" id="context-menu"><ul class="context-menu__items">';
			for(var a = 0;a<this.menuItems.length;a++) {
				this.html+= '<li class="context-menu__item"><a href="#" class="context-menu__link" data-action="'+this.dataActions[a]+'"><i class="fa fa-'+ this.menuItems[a] +'"></i>' + this.menuItems[a] + '</a></li>';
			}			    
			this.html +='</ul></nav>';

			document.body.innerHTML += this.html;

			this.contextItems = document.querySelectorAll("." + this.itemClassName);

			for(var i=0, len=this.contextItems.length;i<len;i++) {
				var cItem = this.contextItems[i];
				this.contextMenuListener(cItem);
			}

			this.menu = document.querySelector("#context-menu");

			this.contextListener();
			this.clickListener();
			this.keyupListener();
			this.resizeListener();

		},
		contextMenuListener : function (el) {
			var t = this;
			document.addEventListener("contextmenu", function (e) {
				//e.preventDefault();
    			t.toogleMenuOn();
			});
		},
		contextListener : function () {
			var t = this;
			document.addEventListener("contextmenu", function (e) {
				t.itemInContext = t.clickInsideElement(e, t.itemClassName);
				if(t.itemInContext) {
					e.preventDefault();
					t.toogleMenuOn();
					t.positionMenu(e);
				}else {
					this.itemInContext = null;
					t.toggleMenuOff();
				}
			});
		},
		clickListener : function () {
			var t=this;
			
			document.addEventListener( "click", function(e) {
				var clickeElIsLink = t.clickInsideElement(e, t.contextMenuLinkClassName);

				if(clickeElIsLink) {
					e.preventDefault();
					t.menuItemListener(clickeElIsLink);
				} else {
					var button = e.which || e.button;
					if(button===1) {
						t.toggleMenuOff();
					}
 				}

			});
		},
		keyupListener : function () {
			var t = this;
			window.onkeyup = function(e) {
		    if ( e.keyCode === 27 ) {
		      t.toggleMenuOff();
		    }
		  }
		},
		clickInsideElement : function (e, className) {
			var el = e.srcElement || e.target;

			if ( el.classList.contains(className) ) {
			return el;
			} else {
			while ( el = el.parentNode ) {
			  if ( el.classList && el.classList.contains(className) ) {
			    return el;
			  }
			}
			}

			return false;
		},
		toogleMenuOn : function () {
			if ( this.menuState !== 1 ) {
			    this.menuState = 1;
			    this.menu.classList.add(this.activeClassName);
			}
		},
		toggleMenuOff : function () {
			if(this.menuState !== 0) {
				this.menuState = 0;
				this.menu.classList.remove(this.activeClassName)
			}
		},
		getPosition : function (e) {
			var posx = 0;
			var posy = 0;

			if(!e) var e = window.event;

			if(e.pageX || e.pageY) {
				posx = e.pageX + document.body.scrollLeft;
				posy = e.pageY + document.body.scrollTop;
			} else if (e.clientX || e.clientY) {
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}

			return {
				x : posx,
				y : posy
			}
		},
		positionMenu : function (e) {
			this.clickCoords = this.getPosition(e);
			this.clickCoordsX = this.clickCoords.x;
			this.clickCoordsY = this.clickCoords.y;

			this.menuWidth = this.menu.offsetWidth +  4;
			this.menuHeight = this.menu.offsetHeight +  4;

			this.windowWidth = window.innerWidth;
			this.windowHeight = window.innerHeight;

			console.log(document.body.scrollTop);

			if( (this.windowWidth - this.clickCoordsX) < this.menuWidth) {
				this.menu.style.left = this.windowWidth - this.menuWidth + "px";
			} else {
				this.menu.style.left = this.clickCoordsX + "px";
			}

			if( (this.windowHeight - this.clickCoordsY) < this.menuHeight) {
				this.menu.style.top = this.windowHeight - this.menuHeight + "px";
			} else {
				this.menu.style.top = this.clickCoordsY + "px";
			}
			
		},
		resizeListener : function () {
			var t = this;
			window.onresize = function(e) {
				t.toggleMenuOff();
			}
		},
		menuItemListener : function (link) {
			console.log(link);
			console.log("Object ID : " +  this.itemInContext.getAttribute("data-id")  + " Action : " +  link.getAttribute("data-action") );
			this.toggleMenuOff();
		}

	}

	return self;

})();