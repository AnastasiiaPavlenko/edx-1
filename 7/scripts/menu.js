// класс ES5
function Menu(sSelector){ // sSelector - хранит идентификатор меню
	//идентификатор меню
	console.log(this);
	var m = this;
	//***************************  свойства  ***************************
	m.menu = $(sSelector);
	m.menuItems = m.menu.children("li");
	//console.log($(this.menuItems[0]));

	//***************************  методы  ***************************
	m.showSubMenu = function(event){ //event всегда подается на вход функции, чтобы не было проблем в FireFox
		//$(this).children("ul").addClass("b-submenu_shown");
		//console.log(event.currentTarget);//всегда покажет непосредственный элемент, на который мы наводим
		//console.log(event.target); //возьмет вложенный элемент, в данном случае- ссылку
		//$(this).children("ul").stop().slideDown();
		$(this).children("ul")
		.addClass("b-submenu_shown")
		.stop()
		.animate({"opacity" : 1}, 400);
	}
	m.hideSubMenu = function(){
		//$(this).children("ul").removeClass("b-submenu_shown");
		//$(this).children("ul").stop().slideUp();
		$(this).children("ul")
		.stop()
		.animate({"opacity" : 0}, 400, function(){
			console.log(this);
			$(this).removeClass("b-submenu_shown");
		});
	}

	m.showHideSubMenu = function(){
		m.menuItems.children("ul").stop().slideUp();
		$(this).children("ul").stop().slideToggle();

	}
	//***************************  события  ***************************
	m.menuItems
		.mouseover(m.showSubMenu) //то, что написано в menuItems (в событии) в this и попадет
		.mouseout(m.hideSubMenu); 

	/* m.menuItems.click(m.showHideSubMenu); */
}