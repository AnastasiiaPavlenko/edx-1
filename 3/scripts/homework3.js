/* 1. массив меню
{
 имя_файла : 
  {
   "text" : название пункта меню
   ,"keywords" : ключевые слова
  }
}

- вывести пункты меню
- вывести только ключевые слова по каждому пункту меню
*/

var menu = [
	
		{	"title" : "Главная"
			,"keywords" : "main page, home"
		}
		,{
			"title" : "История компании"
			,"keywords" : "history, our story"
		}
		,{
			 "title" : "О нас"
			 ,"keywords" : "about us"
		}
		,{
			 "title" : "Стоимость услуг"
			,"keywords" : "prices"
		}
		,{
			"title" : "Контакты"
			,"keywords" : "contacts, contact us, location"
		}
]
,menuList = ""
,keyWords = ""
;

keyWords = "";
// решение без запятой:
for (var name in menu) {
 if(keyWords){
  		keyWords += ", ";
 		}
keyWords += menu[name]["keywords"];
}

for (var name in menu) {
menuList += menu[name]["title"] + ", ";
/*	if (menu[name][4]) {
	menuList += menu[name]["title"] ;
	} */
}
console.log("Выводим пункты меню:", menuList);

//или так
for (var name in menu) {
console.log(menu[name]["title"]);
}

for (var name in menu) {
keyWords += menu[name]["keywords"] + ", ";
}
console.log("Ключевые слова:", keyWords);











