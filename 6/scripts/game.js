function game () {
		var answers = ["rock", "scissors", "paper"]
			,userAnswer = userAnswerSelect.value
			,m = 0
			,n = answers.length
			,computerAnswer = answers [Math.floor(Math.random() * (n - m + 1)) + m]
			,table = {
				"rock" : {
						"rock"			: 0
						, "scissors"	: 1
						, "paper"		: -1
				}
				,"scissors" : { 
						 "rock"			: -1
						, "scissors"	: 0
						, "paper"		: 1

				}
				, "paper" : { 
						 "rock"			: 1
						, "scissors"	: -1
						, "paper"		: 0
				}
			}
			,messages = {
				"-1" : "Вы проиграли"
				,"0" : "Ничья"
				,"1" : "Вы выиграли"
			}
			,result = document.getElementById("result")
			,userAnswerImg = document.getElementById("userAnswerImg")
			,computerAnswerImg = document.getElementById("computerAnswerImg")
			,message = document.getElementById("message")
			; 
		console.log(userAnswer, computerAnswer);
		console.log(messages[table[userAnswer][computerAnswer]]);
		userAnswerImg.src = "images/" + userAnswer + ".jpg";
		computerAnswerImg.src = "images/" + computerAnswer + ".jpg";
		message.innerText = messages[table[userAnswer][computerAnswer]];
		result.style.display = "block"; 

		//console.log(computerAnswer);
}

var userAnswerSelect = document.getElementById("userAnswer");
userAnswer.onchange = game;
























