// класс ES6
class Menu { 
	//конструктор класса
	constructor(sSelector){
		// свойства
		this.menu = $(sSelector);
		this.menuItems = this.menu.children("li");
		//события
		this.createEvents();
	}

	//***************************  методы  ***************************
	showSubMenu(event){ 
		$(event.currentTarget).children("ul")
		.addClass("b-submenu_shown")
		.stop()
		.animate({"opacity" : 1}, 400);
	}
	hideSubMenu(event){
		let subMenu = $(event.currentTarget);
		subMenu.children("ul")
			.stop()
			.animate({"opacity" : 0}, 400, () => {
			$(event.currentTarget).removeClass("b-submenu_shown");
		});
	}

	showHideSubMenu(event){
		this.menuItems.children("ul").slideUp();
		$(event.currentTarget).children("ul").slideToggle();

	}

	createEvents(){
		this.menuItems
			.mouseover(this.showSubMenu.bind(this)) //то, что написано в menuItems (в событии) в this и попадет
			.mouseout(this.hideSubMenu.bind(this))
		this.menuItems.click(this.showHideSubMenu.bind(this));
	}


	//***************************  события  ***************************

	/* m.menuItems.click(m.showHideSubMenu); */
}