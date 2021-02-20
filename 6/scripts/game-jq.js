function game(){
	var answers 		= ["rock", "scissors", "paper"]
		,userAnswer		= $("#userAnswer").val()
		,m = 0
		,n = answers.length
		,computerAnswer	= answers[Math.floor(Math.random() * (n - m + 1)) + m]
		,table = {
			"rock"		: {
						"rock"		: 0
						,"scissors" : 1
						,"paper"	: -1
					}
			,"scissors"	: {
						"rock"		: -1
						,"scissors" : 0
						,"paper"	: 1
					}	
			,"paper"	: {
						"rock"		: 1
						,"scissors" : -1
						,"paper"	: 0
					}	
		}
		,messages 	= {
			 "-1" 	: "Вы проиграли"
			,"0" 	: "Ничья"
			,"1" 	: "Вы выиграли"
		}
		,result				= $("#result")
		,userAnswerImg		= $("#userAnswerImg")
		,computerAnswerImg	= $("#computerAnswerImg")
		,message			= $("#message")
		;

	console.log(userAnswer, computerAnswer);	
	console.log(messages[table[userAnswer][computerAnswer]]);
	userAnswerImg.attr("src", "images/" + userAnswer + ".jpg");
	computerAnswerImg.attr("src", "images/" + computerAnswer + ".jpg");
	message.text(messages[table[userAnswer][computerAnswer]]); // innerText, innerHTML
	result.css("display", "block");
}

$("#userAnswer").change(game);

























