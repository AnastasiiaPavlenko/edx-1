/*
Класс Bird
создать 2 вида птиц (два объекта) пингвина и соловья, отличительные особенности: 
пингвин-не летает, соловей - поет
создать разные методы, но вызывать только те, которые подходят к конкретной птице
*/

function Bird(type, size, color) {
	this.type  = type || "неопознанная птица";
	this.size  = size || 0;
	this.color = color || 0;

	this.breathe = function() {
		console.log("дышит");
	}
	this.cantswim = function(){
		console.log("не плавает, а если и умеет, то очень хорошо это скрывает");
	}
	this.fly = function() {
		console.log("быстро летает")
	}
	this.cantfly = function(){
		console.log("не летает, но хочет")
	}
	this.swim = function() {
		console.log("хорошо плавает")
	}
	this.eat = function() {
		console.log("кушает что-то, что обычно кушают птицы")
	}
	this.sing = function() {
		console.log("красиво поет")
	}
	this.squeak = function() {
		console.log("громко пищит")
	}

	this.breathe();
	this.eat();
}

var luscinia = new Bird ("соловей", "17см.", "бурый");
console.log(luscinia);
luscinia.fly();
luscinia.sing();
luscinia.cantswim();

console.log("---------------------------------------------------------------");

var penguin = new Bird ("пингвин", "70см.", "черно-белый");
console.log(penguin);
penguin.cantfly();
penguin.swim();
penguin.squeak();

//2. написать рекурсивную функцию для суммы чисел от 0 до 100

function sumToNum(x) {
	return x > 1 ?  (x + sumTo(x - 1)) : x;
}

console.log(sumToNum(100));



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







