function calcSum(num1, num2) { //num1, num2 - аргументы функции
	var sum = num1 + num2; 
	console.log("local sum:", sum);
	return sum;
} 

console.log("function return:", calcSum (7, 9)); // 7 и 9 - параметры функции