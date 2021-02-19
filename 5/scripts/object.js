//ES5

//класс
function Person(height, weight){
	console.log("this", this);
	// свойства
	this.height = height || 0;
	this.weight = weight || 0;
	var name 	= "no name"; //глобальная переменная локально

	//методы
	this.breathe = function() {
		console.log("дышит");
	}

	this.sleep = function(){
		console.log("спит");
	}

	this.eat = function(){
		console.log("ест");
	}

	this.setName = function(personName){
		name = personName;
		console.log("Имя:", name);
	}

//вызов метода
  	this.breathe();
}


var person1 = new Person(50, 3200);
console.log(person1);
person1.weight = 3500;
console.log(person1.weight, person1.height);
person1.sleep();
person1.setName("Акакий");

console.log("###############################");


var person2 = new Person(52, 4000);
console.log(person2);
person2.eat;

/*
Класс Bird
создать 2 вида птиц (два объекта) пингвина и соловья, отличительные особенности: 
пингвин-не летает, соловей - поет
создать разные методы, но вызывать только те, которые подходят к конкретной птице
*/








