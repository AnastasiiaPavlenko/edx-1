/*
1. Гороскоп
название знака зодиака пользователя
текущий знак зодиака
вывести сообщение, если знак зодиака совпадает


var horoscope = "Телец";

console.log("Какой Ваш знак зодиака?")
	if (horoscope == "Телец") {
		console.log("Это Ваш месяц, поздравляем!");
	}
	
	else {
		console.log("Это не Ваш месяц :(");
	}
*/
// через алерт

var horoscope = prompt ("Какой Ваш знак зодиака?", "")
	if (horoscope == "Телец") {
		alert ("Это Ваш месяц, поздравляем!");
	}
	else {
		alert("Это не Ваш месяц :(");
	}