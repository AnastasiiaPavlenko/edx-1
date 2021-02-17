// описание переменной
var subject="программирование для фронтэнд"
	,length=3
	// простой массив
	,langs = ["javaScript", "C#", "PHP"]
	// массив ассоциативный
	,students = {
		"Иван" : 4
		,"Леша" : 5
		,"Ира" : 3
	}
	,colors = ["red", "blue", "white", "green"]
	;
//вывод на консоль
console.log("курс:",subject);
console.log("длительность курса:", length, "месяца");
console.log("языки программирования", langs);
console.log(langs[0]); // 0- индекс

// переопределение значение переменных
 length=4;
 console.log("новая длительность курса:", length, "месяца");
 langs[2]="Java";
 console.log("языки программирования", langs);

 console.log(students);
 console.log("Оценка Ивана:", students["Иван"]);
 students["Иван"] = 5;
 console.log("Новая оценка Ивана:", students["Иван"]);

 //добавление нового элемента
 langs[5] = "Python";
 console.log("языки программирования", langs);
 students["Катя"] = 4;
 console.log("Студенты", students);


/*
переменная colors - простой массив 
вывести 
предопределить значение второго элемента
вывести этот массив
добавить новый элемента
*/
console.log("Цвета", colors)
colors[1] = "black";
console.log(colors);
colors[4] = "purple";
console.log(colors);