var x = 5;
//x = 5;
	function test(){
		x = 8;
		var x = 7;// переменная локальная
	}
test();
console.log(x);

//расчет ккал блюда в зависимости от вида и веса

function getCals(name, weight){
	var cals = Math.round(foodData[name] * weight/100);
	return cals;

}

console.log(getCals("Блины с творогом", 200), "ккал");


var myDinner = {
	"Борщ из свежей капусты" : 120
	,"Вареники с картофелем" : 150
};

function getDinnerCals(dinner) {
	var cals = 0;
	for (var name in dinner){
 		cals += Math.round(foodData[name] * dinner[name] / 100);
	}
	return cals;
}

function showDinnerMessage(dinner) {
	var cals = getDinnerCals(dinner);
	if (cals){
		console.log("Обед:", cals, "ккал");
	}
	else {
		console.log("Пожалуйста, проверьте названия блюд, возможно их нет в списке.");
	}

}
showDinnerMessage(myDinner);

function showHowToSpendCals(dinner){
	var cals = getDinnerCals(dinner);
	if (cals <= 100) {
		console.log("Вы почти ничего не съели, а если и съели, то пока жевали - сожгли все калории.");
	}
	else if (cals > 100 && cals < 120) {
		console.log("Вы съели:", cals, "ккал.", "Погуляйте немного. Хотьба со скоростью 4 км/час поможет Вам сжечь те 120 ккал, которые Вы только что съели.");
	}
	else if (cals > 200 && cals < 300){
		console.log("Вы съели:" , cals, "ккал.", "Можете заняться уборкой квартиры, это поможет Вам расходовать 245 ккал в час.");
	}	
	else if (cals > 300 && cals < 400) {
		console.log("Вы съели:", cals, "ккал.", "Потанцуйте час, чтобы израсходовать 300-350 калорий.")
	}
	else if (cals > 400 && cals < 500) {
		console.log("Вы съели:", cals, "ккал.", "Езда на велосипеде или же велотренажёр помогут Вам сжечь 438 калорий за час.");
	}
	else if (cals > 500 && cals < 600){
		console.log("Вы съели:", cals, "ккал.", "Можете смело собирать в бассейн. Час плавания поможет вам сжечь 500 калорий. Если же у Вас нет абонемента или Вы не люите плавать, то можете выйти на пробежку. Бег со скоростью 8км/час сжигает 540 калорий в час.");
	}
	else {
		console.log("Вы съели:", cals, "ккал.", "Похоже, Вы любите вкусно и много поесть. Займитесь активным спортом, а лучше - отправляйтесь в зал, поприсидайте, поотжимайтесь.");
	}
}
showHowToSpendCals(myDinner);

/*
ДЗ:
функция как потратить ккал за обед
на вход подаем результат работы getDinnerCals
сделать прямо в этом файле
массив соответствие активности и калориям, которые тратятся
*/

function getIW(sex, height, weight) {
	var k = {
		"male" 		: [4, 128]
		,"female" 	: [3.5, 108]
	}
	,iw = Math.round((height * k[sex][0] / 2.54 - k[sex][1]) * 0.453)
	,diff = iw - weight
	;
	console.log("Ваш идеальный вес:", iw);
	if (diff  < 0) {
		console.log("Рекомендуем похудеть на", Math.abs(diff), "кг");
	}
	else if (diff > 0) {
		console.log("Рекомендуем поправиться на", diff, "кг");
	}
	else {
		console.log("Вы - идеальны! Поздравляем!") ;
	}
}
getIW("female", 173, 52);

function getTypeOfFigure(sex, cm) {
	var j = {
		"male" 		: [18, 20, 23]
		,"female" 	: [15, 17, 20]
	}
	if (cm <= j[sex][0]) {
	console.log("У Вас астенический тип телосложения");
	}
	else if (cm == j[sex][1]) {
	console.log("У Вас нормостенический тип телосложения");
	}
	else if (cm >= j[sex][2]) {
	console.log("У Вас гиперстенический тип телосложения");
	}
}

getTypeOfFigure("female", 17);

function getFriendsBirthday(){
	var today = new Date()
		,day  = today.getDate()
		,month= today.getMonth() + 1
		,year = today.getFullYear()
		,age = 0
		;
	console.log("Сегодня:", day + "/" + month + "/" + year);

	for (var name in friends[month][day]) {
		age = year - friends[month][day][name];
		console.log(name, "-", age);
	}
}

getFriendsBirthday();


function factorial(N){
 return N<=1 ? 1 : N*factorial(--N); //-N
}
console.log(factorial(5));


function printRange(iNumber){
   if (iNumber){
    console.log(iNumber);
    printRange(--iNumber);  
    }
   }
  printRange(7);

/*
рекурсивно посчитать сумму чисел от нуля до ста
факториал
*/





















