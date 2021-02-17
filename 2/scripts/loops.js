var list = "";

// i, j, k

 for (var i = 1; i < 6; i ++) {
 	list += i + "";
 	//console.log(i);
}

console.log(list);

list = "";
 for (var i = 5; i >= 0; i --) {
	list += i + "";
 	//console.log(i);
}
console.log(list);

var nums = [ 4, -7, 8, 0, 10, 5, -3, 0]
	,numsLength = nums.length
	,result  = ""
	;

	for ( i = 0; i < nums.length; i ++ ) {
		result += nums[i] + " ";
	}

console.log(result);
result ="";


var colors = [ "red", "blue", "green", "white", "purple"]
	,numsLength = nums.length
	;

	for ( i = 0; i < colors.length; i ++) {
		result += colors[i] + " ";
	}
console.log(result);
result = "";

for (i = 0; i < numsLength; i ++) {
	if(nums[i] < 0){
		result += nums[i] + " ";
	}
}
console.log("Отрицательные числа:", result);
result = "";

for (i = 0; i < numsLength; i ++) {
	if(nums[i] > -5 && nums[i] < 7) {
		result += nums[i] + " ";
	}
}
console.log("Числа в диапазоне от -5 до 7:", result);
result = "";

for (i = 0; i < numsLength; i ++) {
	if(!(nums[i]%2)) { // !0
		result += nums[i] + " ";
	}
}
console.log("Четные числа:", result);

result = "";

for (i = 0; i < numsLength; i ++) {
	if(nums[i]%2 && nums[i] < 0) {
		result += nums[i] + " ";
	}
}
console.log("Нечетные отрицательные числа:", result);

result = "";

var mul = 1;
for (i = 0; i < numsLength; i ++) {
	mul *= nums[i];
}
console.log("Произведение чисел:", mul);
result = "";

var zeroQty = 0;
 for (i = 0; i < numsLength; i ++) {
 	if(nums[i] === 0) {
 		zeroQty ++;
 	}
 }
 console.log("Количество 0:", zeroQty);

 















