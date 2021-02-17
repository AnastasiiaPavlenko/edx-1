var   num1 = 5
	, num2 = 7
	, result = 0
	;

	result = num1 + num2;
	console.log(num1, "+", num2, "=", result);

result *= 2; // result = result + 2;
console.log("result *= 2:", result);
 
result ++; //result = result + 1; result += 1;
console.log("result ++:", result);
 
num1 = 0;
num2 = 0;

// сначала операция присвоения (=), затем инкримент (++)
result = num1 ++;
console.log("num1:", num1, "result:", result);

// сначала операция инкримент (++), затем присвоение (=)
result = ++ num2;
console.log("num2:", num2, "result:", result);

console.log("num1 == num2:", num1 != num2);

num2 = "1";
console.log("num2:", num2);
console.log("num1 == num2:", num1 == num2);

/* тройнное ровно === сравнение и по значению, и по типу данных
   двойное ровно == сравнение по значению
*/
result = 10;
console.log("result:", result);
console.log("!result", result = !result);
console.log("result:", result);

