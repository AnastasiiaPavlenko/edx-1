function calcSum(num1, num2){
	var q1 = prompt ("Площадь какой геометрической фигуры Вым расчитать?", "");
	if (q1 = "треугольник") {
		var q2 = prompt ("Напишите значение основания", "0");
		var num1 = parseInt(q2);
		var q3 = prompt ("Напишите значение высоты", "0");
		var num2 = parseInt(q3);
		var sum = (num1 * num2) * 0.5;
		return sum;
		var result = prompt ("Площадь Вашего треугольника равна:", sum);
	}
}
