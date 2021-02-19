var m = 0
   ,n = 6
   ,randNum = Math.floor(Math.random() * (n - m + 1)) + m
   ,str = ""
   ,dayOff = 0
   ,price = 567.9081
   ;
 console.log(randNum);
 console.log(price.toFixed(2), "грн.");

 /*for(var i = 0; i < 100; i++) {
 	str += (Math.floor(Math.random() * (n - m + 1)) + m) + " " ;
 }
  console.log(str);*/

var dayWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday", "Sunday"]      
    ,week = {
		"Monday" :  ["golf, spa, cinema"]
		, "Tuesday" : ["theatre, party"]
		,"Wednesday" : ["bowling, soccer"]
		,"Thursday" : ["fishing, PSP"]
		, "Friday" : ["riding, city tour"]
		,"Saturday" : ["chess, spa"]
		, "Sunday" : ["skate, sewing"]
	}
 ;
console.log("Выходной день:", dayWeek[randNum]);
console.log("Развлечения:", week[dayWeek[randNum]]);
// make at home!!!!



