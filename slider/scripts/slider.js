function Slider(sSelector){
	var s = this;

	/* ***************** свойства *****************  */
	s.init(sSelector);	
	/* s.picture		= s.findObj(".b-picture"); */
	s.image			= s.findObj(".b-picture__image");	
	s.arrowPrev 	= s.findObj(".arrow_prev");
	s.arrowNext 	= s.findObj(".arrow_next");
/* 	s.btnCirc1 		= s.findObj(".circles_1");
	s.btnCirc2 		= s.findObj(".circles_2");
	s.btnCirc3 		= s.findObj(".circles_3");
	s.btnCirc4 		= s.findObj(".circles_4");
	s.btnCirc5 		= s.findObj(".circles_5"); */
	s.btnCircAll 	= s.findObj(".circles");
	s.current      	= 1; // стартовое значение
	s.max          	= s.btnCircAll.length;
	
	
	/* ***************** методы *****************  */
	s.displayImgArrow = function(iShift){
		// шаг, с которым мы двигаемся
		console.log("displayImgArrow:", s.current);
		s.current += iShift;
		console.log("displayImgArrow:", s.current);
		
			if(s.current >= s.max){
				s.current = 1;
			}
			else if(s.current <= 1){
				s.current = s.max;
			}
		
		// метод для изменения пути к картинке
		s.changePath();
/* 		var imgPath = "../images/" + (s.current + 1) + ".jpg";
		s.image.attr("src", imgPath); */
		
		var currentBtn = s.btnCircAll.eq(s.current - 1);
		s.btnCircAll.removeClass("circles_active");
		currentBtn.addClass("circles_active");
	}
	
	s.changePath = function(){
		var imgPath = "../images/" + s.current + ".jpg";
		// console.log(imgPath);
		// подставляем путь картинки
		s.image.attr("src", imgPath);
	}
	
	s.showNext = function(){
		s.displayImgArrow(1);
	}
	s.showPrevious = function(){
		s.displayImgArrow(-1);
	}	

	s.displayImgBtn = function(){
		// кнопка, по которой кликнул пользователь
		var currentBtn = $(this);
		s.current = s.btnCircAll.index(currentBtn) + 1;
		// s.current = s.btnCircAll.index($(this)) + 1;
		console.log(s.current);
		// формируем путь к картинке
		
		// метод для изменения пути к картинке
		s.changePath();

	s.sliderEvents = function(){
		console.log(event.which, event.altKey, event.ctrlKey, event.shiftKey);
			if(event.which == 39){
				s.showNext();
			}
			if(event.which == 37){
				s.showPrevious();
			}
	};
		
/* 		var imgPath = "../images/" + s.current + ".jpg";
		s.image.attr("src", imgPath); */
		
		s.btnCircAll.removeClass("circles_active");
		currentBtn.addClass("circles_active");
	}
	
	
	
	/* ***************** события *****************  */
	s.arrowPrev.click(s.showPrevious);
	s.arrowNext.click(s.showNext);
	s.btnCircAll.click(s.displayImgBtn);
	$("body").keyup(s.sliderEvents);
}
// наследование
Slider.prototype = new Component();

//path = "images/" + g.imageNum + ".jpg";