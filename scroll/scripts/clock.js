function Clock(sSelector){
	var c = this; 
	c.init(sSelector);

/* свойства */

/* методы */
c.getTimeData = function(timeSelector, methodType){
	var today = new Date()
		,time = today[methodType]()//вызов метода, который хранится в переменной
		,timePlace = c.findObj("." + timeSelector)
		;
		//timePlace.html(time); 
		timePlace.text(time < 10 ? "0" + time : time);
};
c.main = function(){
	c.getTimeData("hours", "getHours");
	c.getTimeData("min", "getMinutes");
	c.getTimeData("sec", "getSeconds");
}

c.main();

setInterval(c.main, 1000);
/* события */


};


Clock.prototype = new Component();