/*
5. Погода
Переменная - день недели
Многомерный массив для хранения данных о погоде за каждый день недели
Вывести погоду по дню недели
*/
var dayOfTheWeek = {
					"Monday" : {
					"day temperature" : "27C"
					,"night temperature" : "14C"
					,"humidity" : "63%"
					,"wind" : "16 km/h"
					,"precipitation" : "50%"
					}
					,"Tuesday" : {
					"day temperature" : "25C"
					,"night temperature" : "13C"
					,"humidity" : "67%"
					,"wind" : "23 km/h"
					,"precipitation" : "50%"
					}
					,"Wednesday" : {
					"day temperature" : "22C"
					,"night temperature" : "14C"
					,"humidity" : "73%"
					,"wind" : "10 km/h"
					,"precipitation" : "50%"
					}
					,"Thursday" : {
					"day temperature" : "24C"
					,"night temperature" : "15C"
					,"humidity" : "64%"
					,"wind" : "10 km/h"
					,"precipitation" : "10%"
					}
					,"Friday" : {
					"day temperature" : "25C"
					,"night temperature" : "14C"
					,"humidity" : "65%"
					,"wind" : "10 km/h"
					,"precipitation" : "40%"
					}
					,"Saturday" : {
					"day temperature" : "23C"
					,"night temperature" : "13C"
					,"humidity" : "68%"
					,"wind" : "14 km/h"
					,"precipitation" : "20%"
					}
					,"Sunday" : {
					"day temperature" : "22C"
					,"night temperature" : "12C"
					,"humidity" : "64%"
					,"wind" : "16 km/h"
					,"precipitation" : "20%"
					}
}

/* for (var day in dayOfTheWeek) {
console.log("Погода на сегодня:", dayOfTheWeek[day]);
}
;
*/
for (var currentDay in dayOfTheWeek) {
    if (dayOfTheWeek.hasOwnProperty(currentDay)) {
    	console.log("Here is a weather for", currentDay, dayOfTheWeek[currentDay]);
    	}
    }

















