//1. Сгенерировать случайным образом пароль длиной 16 символов
function generate(length) {
    var newSymbols = '0123456789hjnkjolpojsgfhdkILMDBFWKCNVSWQAZ'
        ,result=""
        ;
    for (var i = length; i > 0; --i)
        result += newSymbols[Math.round(Math.random() * (newSymbols.length - 1))]
    return result
}
console.log(generate(16));

//2. Есть текущая дата. Необхомо вывести её в формате: 2 июня 2018 года
var today = new Date()
	,str = ""
	;
str = today.getDate() + " июня " + today.getFullYear() + " года ";
console.log(str);

//3. Есть текущая дата. Необходимо вывести праздники на эту дату.
var dates = { 
	"june1" : new Date(2018, 5, 1) 
	,"june3" : new Date(2018, 5, 3)
	,"june4" : new Date(2018, 5, 4)
	,"june5" : new Date(2018, 5, 5)
	,"june6" : new Date(2018, 5, 6)
	,"june8" : new Date(2018, 5, 8)
	,"june9" : new Date(2018, 5, 9)
	,"june10" : new Date(2018, 5, 9)
	,"june12" : new Date(2018, 5, 12)
	,"june14" : new Date(2018, 5, 14)
	,"june17" : new Date(2018, 5, 17)
	,"june18" : new Date(2018, 5, 18)
	,"june20" : new Date(2018, 5, 20)
	,"june22" : new Date(2018, 5, 22)
	,"june23" : new Date(2018, 5, 23)
	,"june24" : new Date(2018, 5, 24)
	,"june25" : new Date(2018, 5, 25)
	,"june26" : new Date(2018, 5, 26)
	,"june28" : new Date(2018, 5, 28)
}
var holidays = {
	"june1" : ["День защиты детей"]
	,"june3" : ["День работников водного хозяйства", "День работников местной промышленности"]
	,"june4" : ["Международный дeнь невинных детей - жертв агрессии", "День хозяйственных судов"]
	,"june5" : ["Всемирный день окружающей среды"]
	,"june6" : ["День журналиста"]
	,"june8" : ["Всемирный день океанов"]
	,"june9" : ["Международный день друзей"]
	,"june10" : ["День работников легкой промышленности"]
	,"june12" : ["День работников фондового рынка"]
	,"june14" : ["Всемирный день донора"]
	,"june17" : ["Всемирный день борьбы с опустыниваниeм и засухой", "День медицинского работника"]
	,"june18" : ["День участкового инспектора милиции"]
	,"june20" : ["Всемирный день беженцев"]
	,"june22" : ["День скорби и оказания почестeй памяти жертв войны в Украине"]
	,"june23" : ["День государственной службы ООН", "День государственной службы Украины"]
	,"june24" : ["День молодежи"]
	,"june25" : ["День таможенной службы Украины"]
	,"june26" : ["Международный день ООН в поддеpжку жертв пыток", "Международный день борьбы прoтив злоупотребления наркотиками и иx незаконного оборота"]
	,"june28" : ["День Конституции Украины"]
}
;
for (var key in holidays) {
console.log(dates[key] + ": " + holidays[key]);
}

//4. Написать функцию расчета площади треугольника.
function calcSum(num1, num2) {
	var sum = (num1 * num2) * 0.5;
	return sum;
}
console.log("Площадь тругольника равна:", calcSum(3, 5));

//5.  

function calc(amountOfSides){

	if(amountOfSides == 3) {
	function calcSum(3, 2) {
	var sum = (num1 * num2) * 0.5;
	return sum;
	console.log("Площадь тругольника равна:", calcSum();
	}
} 
	if(amountOfSides == 4) {
	function calcSum1(3, 6) {
	var sum1 = (num3 * num4);
	return sum1;
	console.log("Площадь прямоугольника равна:", calcSum1();
	}
}
	if(amountOfSides == 0) {
	function calcSum2(4) {
	var sum2 = Math.PI * Math.pow(num5,2);
	return sum2;
	console.log("Площадь круга равна:", calcSum2();
	}
}

}
console.log(calc(3));





		
		