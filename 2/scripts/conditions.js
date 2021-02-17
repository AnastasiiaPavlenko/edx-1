var orderSum = 155
	,discount = 0
	,economy = 0
	,vipClient = true
	,message = ""
	,promoCode = true
	,bonusCard = 1500
	,bonusesInUah = 0
	,deliverySum = orderSum <= 500 ? 0 : 40
	;

	/*
	orderSum >= 500 - условие
 	0 - значение переменной deliverySum, если условие выполнится
  	40 - значение переменной deliverySum, если условие НЕ выполнится
	*/


	if (orderSum >= 500) {
		console.log("Бесплатная доставка");
	}

	else {
		console.log("Доставка - 40 грн.");
	}

	if (orderSum >= 700 && orderSum < 2000) {
		discount = 3;
	}
	else if (orderSum >= 2000 && orderSum < 5000) {
		discount = 5;
	}

	else if (orderSum >= 5000) {
		discount = 7;
			if (vipClient) { // vipClient == true
				discount = 10;
				message = "Специальная скидка для ВИП-клиента!"
			}
	}

	if (promoCode) {
		discount += 5;
    }

	console.log("Сумма заказа:", orderSum, "грн.");
	console.log("Ваша скидка:", discount, "%", message);

	economy = orderSum * discount / 100;
	console.log("Вы экономите:", economy, "грн.");

	orderSum -= economy;
	console.log("Сумма заказа со скидкой:", orderSum,"грн." );

	console.log("На Вашей бонусной карте:", bonusCard, "бонусов");

	if (bonusCard) {
		bonusesInUah = bonusCard / 100;
		console.log("Бонусы в гривнах:", bonusesInUah);
		orderSum -= bonusesInUah;
		console.log("Сумма заказа после снятия бонусов:", orderSum, "грн.");
		bonusCard = 0;
	}
	
var orderSum = 9000
		,intention = true
		,bringFriend = true
		,discount = 0
		,finalSum = 0
		;

	if (intention) {
		discount = 10;
		finalSum = orderSum - (orderSum * discount)/100;
		console.log("Ваша сумма скидки, с учетом единоразовой оплаты всего круса:", finalSum, "грн.");
	}
	if (bringFriend) {
		discount += 5 ;
		finalSum = orderSum - (orderSum * discount)/100;
				console.log("Спасибо, что привели друга! Ваша сумма к оплате:", finalSum, "грн.");
	} 
console.log("Сумма с учетом всех Ваших скидок:", finalSum, "грн.");
orderSum += deliverySum;
console.log("Сумма к оплате с доставкой:", orderSum);

	


/* if (intention){
	 discount = 10;
	}
if (friend){
   discount += 5;
  }
  sum -= sum*discount/100;
 console.log("Сумма к оплате", sum, "грн.")

*/

























