//многомерные массивы
var nums = [
			[1, 2, 3], 
			[-1, -2, -3]
			]
	,users = [
			{ 
				"name": "Ivan"
				,"age" : 34
			}
			,{
				"name": "Mila"
				,"age" : 41

			}
		]
		,clothes = {
			"QSC123" : {
				"title" : "платье"
				,"brand" : "Dior"
				,"size" : ["S","M"]
				,"price" : "40000"
			}
			,"ZDT456" : {
				"title" : "юбка"
				,"brand" : "Chanel"
				,"size" : ["XS","L"]
				,"price" : "35000"
			}
		}
;

console.log(nums);
console.log(nums[1][2]);
console.log(users);
console.log(users[0]["name"]);
console.log(clothes);
console.log(clothes["ZDT456"]);
console.log(clothes["ZDT456"]["brand"]);
console.log(nums[0][1]);
console.log(users[1]["age"]);
console.log(clothes["QSC123"]["title"], ",", clothes["QSC123"]["price"]);
console.log(clothes["QSC123"]["size"][0]);

//добавление нового элемента в многомерный массив
clothes["ASD789"] = {
				"title" : "блуза"
				,"brand" : "Red Valentino"
				,"size" : ["XS","M", "XL"]
				,"price" : "48000"
}
;


console.log(clothes);

clothes["QSC123"]["price"] = 50000;
console.log(clothes["QSC123"]);

var clothesList = "";
	for (var id in clothes) {
	console.log(clothes[id]["title"], clothes[id]["brand"], 
		clothes[id]["size"], clothes[id]["price"]);
		clothesList += "\n" + id + " " + clothes[id]["title"]
		 + " " + clothes[id]["brand"] + " " +  clothes[id]["size"] 
		 + " " + clothes[id]["price"];
 }
 
console.log(clothesList);













