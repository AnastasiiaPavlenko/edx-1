/*
Простой массив чисел:
1. вывести положительные числа ++
2. вывести числа через одно ++
3. вывести чётные числа в диапазоне от -1 до 10 ++
4. вывести сумму всех чисел массива ++
5. вывести максимальное число в массиве
6*.попарно переставить элементы массива и вывести конечный результат
4 -7 8 0 10 5 -3 0
-7 4 0 8 5 10 0 -3
*/

var nums = [ 4, -7, 8, 0, 10, 5, -3, 0]
	,numsLength = nums.length
	,sum = 0
	,result = ""
	;

for (i = 0; i < numsLength; i ++) {
	if(nums[i] > 0){
		result += nums[i] + " ";
	}
}
console.log("Положительные числа:", result);
result = "";
 
for (i = 0; i < numsLength; i ++) {
	result += nums[i++] + " ";
}
console.log("Числа через одно:", result);
result = "";

for (i = 0; i < numsLength; i ++) {
	if (!(nums[i]%2) && nums[i] > -1 && nums[i] < 10 ) {
		result += nums[i] + " ";
		}
	}
console.log("Чётные числа в диапазоне от -1 до 10:", result);
result = "";

for (i = 0; i < numsLength; i ++) {
	 sum += parseInt(nums[i]); //parseInt преобразует строку в целочисленное значение
}
console.log("Сумма всех чисел массива:", sum);
result = "";

console.log("Выводим максимальное число массива:", Math.max.apply({},nums));

for (i = 0; i < numsLength; i += 2 ) {
	var j = nums[i];
	nums[i] = nums[i+1];
	nums[i+1] = j;
}
console.log("Попарно переставили элементы массива:", nums);







