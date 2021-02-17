/*
3. Электроэнергия
< 100 - x
100 - 600 - y
> 600 - z
потребляемое количество: текущее - предыдущего
вывести сколько оплатить
*/

var prevConsumption = 200
	,curConsumption = 700
	,finalConsumption = 0
	,sum1 = 0
	,sum2 = 0
	,sum3 = 0
	,finalSum = 0
	;

finalConsumption = curConsumption - prevConsumption

if (finalConsumption <= 100) {
		sum1 = finalConsumption * 10; //10 -тариф	
	}

if (finalConsumption > 100 && finalConsumption <= 600) {
		sum2 = (100 * 10) + (finalConsumption - 100) * 12 ;
	}

if (finalConsumption > 600) {
		sum3 = (100 * 10) + (500 * 12) + (finalConsumption - 600) * 18; 
	}


console.log("Вы потребили в этом месяце:", finalConsumption, "кВт")

 finalSum = sum1 + sum2 + sum3;
console.log("К оплате в этом месяце:", finalSum, "грн.");
