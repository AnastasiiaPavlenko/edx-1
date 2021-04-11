function Clock(sSelector){
	var c = this; 
	c.init(sSelector);

c.getTimeRemaining = function(){
	var today = new Date()
		,futureDate = new Date(2018, 7, 11, 14, 30)
		,currentTime = today.getTime() //Возвращает число миллисекунд
		,eventTime = futureDate.getTime()
		,remTime = eventTime - currentTime 
		,s = Math.floor((remTime/1000)%60)
		,m = Math.floor((remTime/1000/60)%60)
		,h = Math.floor((remTime/(1000*60*60))%24)
		,d = Math.floor(remTime/(1000*60*60*24))
		;

		(s < 10) ? document.getElementById('sec').innerHTML = "0" + s : document.getElementById('sec').innerHTML = s;
		(m < 10) ? document.getElementById('min').innerHTML = "0" + m :  document.getElementById('min').innerHTML = m;
		(h < 10) ? document.getElementById('hours').innerHTML = "0" + h : document.getElementById('hours').innerHTML = h;
		(d < 10) ? document.getElementById('days').innerHTML =  "0" + d : document.getElementById('days').innerHTML = d;

		}	

setInterval(c.getTimeRemaining, 1000);


c.getTimeRemaining();

};


Clock.prototype = new Component();