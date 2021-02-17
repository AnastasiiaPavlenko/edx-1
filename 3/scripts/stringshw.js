/*
3. Строка несколько предложений
- вывести количество предложений
- вывести количество слов
- перемешать слова в строке
4. Строка "казнить нельзя помиловать"
вставить запятую
*/
var str = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам. Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса."
	,words = str.split(" ")
	;
console.log ("Количество предложений:", str.split(".").length-1);
console.log ("Количество слов:", str.split(" ").length-1);
var re = /(\S+)(\s+)(\S+)/g;
var result = str.replace(re, "$3$2$1");
console.log("Перемешиваем слова в строке:", result);

var str1 = "Казнить нельзя помиловать"
	,coma = ","
	;
//var newResult = (str1.charAt(7).replace(coma));
//var newResult = (str1.substr(7, 1).replace(","));

console.log("Вставляем запятую:", str1.replace(" ", ", "));

