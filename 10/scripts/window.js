function Window(sSelector){
	var w = this;
	w.init(sSelector);
	//console.table(this);

	 /* ***************** свойства *****************  */

	w.startCountdownBtn = w.findObj(".b-mywindow__start-countdown");
	w.stopCountdownBtn 	= w.findObj(".b-mywindow__stop-countdown");
	w.startTickerBtn 	= w.findObj(".b-mywindow__start-ticker");
	w.stopTickerBtn 	= w.findObj(".b-mywindow__stop-ticker");
	w.openWindowBtn 	= w.findObj(".b-mywindow__open-window");
	w.closeWindowBtn 	= w.findObj(".b-mywindow__close-window");
	w.ticker 			= null;//периодический таймер
	w.countdown         = null;//счетчик обратного отсчета
	w.tickerTime        = 0;//время таймера (накопитель)
	w.tickerPeriod		= 2; //шаг таймера
	w.newWindow 		= null;//указатель окна

	/* ***************** методы *****************  */

	w.startCountdown = function(){ //обратный отсчет
		var mayIStart = window.confirm("Можно приступать?"); //можно просто написать confirm без window.
		if(mayIStart){
			w.countdown = window.setTimeout(
				w.countdownNotification, 3000
				)
			}
			else {
				alert("Ну, не хотите, как хотите");
			}
		};
	

	w.stopCountdown = function(){
		window.clearTimeout(w.countdown);
		alert("Таймер остановлен");
	}

	w.startTicker = function(){ //таймер
		w.ticker =
		window.setInterval(w.tickerNotification, 
			w.tickerPeriod*1000);
	}

	w.stopTicker = function(){
		window.clearInterval(w.ticker);
		console.log("Таймер на паузе");
	}
	w.openWindow = function(){ //окно
		w.newWindow = window.open(
			"gallery.html"
			,"_blank"
			,"width=300, height=300"
			)
	}
	w.closeWindow = function(){
		w.newWindow.close();
	}
	//Эти методы будут использовать:
	w.countdownNotification = function(){ //уведомления
		alert("Время иссякло");
	}
	w.tickerNotification = function(){
		w.tickerTime += w.tickerPeriod;
		console.log("Прошло " + w.tickerTime + " секунд");
	}

	/* ***************** события *****************  */
	w.startCountdownBtn.click(w.startCountdown);
	w.stopCountdownBtn.click(w.stopCountdown);
	w.startTickerBtn.click(w.startTicker);
	w.stopTickerBtn.click(w.stopTicker);
	w.openWindowBtn.click(w.openWindow);
	w.closeWindowBtn.click(w.closeWindow);
}

Window.prototype = new Component();