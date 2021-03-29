function Scroll(sSelector){
	var s = this; 
	s.init(sSelector);

	/* свойства */
	s.topLink = s.findObj(".topLink");
	/* методы */
	s.showHideTopLink = function(){
		($(window).scrollTop() > 300 ? show
	};
	s.clowScroll = function(){};

	/* события */
$(window).scroll(s.showHideTopLink);
s.topLink.click(s.slowScroll);

};

Scroll.prototype = new Component();
