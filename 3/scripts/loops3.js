var goods = {
	// ключ соответствует значению
	 "платье": 1200
	,"юбка": 800
	,"брюки": 900
	,"рубашка": 700
}
, clothesList = ""
;
// для получения значения - имя массива[ключ]
for (var title in goods) {
	if (goods[title]>=900) {
	console.log(title, "-", goods[title], "грн.");
	clothesList += "\n" + title + " - " + goods[title] + " грн."; 
	// \n - спецсимвол enter на консоли
	}
}

console.log("Товары:", clothesList);

var students = {
	"Ваня": 8
	,"Петя": 9
	,"Ира": 7
	,"Надя": 12
	,"Лиля": 10
};

for (var name in students) {
	console.log(name, "-", students[name], "баллов");
}

var num = 5;

while (num > -1) {
	console.log(num --);
}























