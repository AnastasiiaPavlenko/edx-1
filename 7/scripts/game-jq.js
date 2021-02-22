function Game(sSelector) {
	var g = this;
	console.log(this);
	//***************************  свойства  ***************************
	g.game = $(sSelector); 
	console.log(g.game);
	g.userAnswer = g.game.children("select");
	console.log(userAnswer);
	g.result    = g.game.children("#result");

    g.userAnswerImg  = g.game.find("#userAnswerImg");
  	g.computerAnswerImg = g.game.find("#computerAnswerImg");
  	g.message   = g.game.find("#message");
  	console.log(message);

  	//***************************  методы  ***************************
  	g.play = function(){
  		var answers   = ["rock", "scissors", "paper"]
  			,m = 0
  			,n = answers.length
 			,computerAnswer = answers[Math.floor(Math.random() * (n - m + 1)) + m]
 			,table = {
  				"rock"  : {
    				 "rock"  : 0
      				 ,"scissors" : 1
      				 ,"paper" : -1
  					 }
 				,"scissors" : {
     				  "rock"  : -1
				      ,"scissors" : 0
				      ,"paper" : 1
				     } 
				,"paper" : {
				      "rock"  : 1
				      ,"scissors" : -1
				      ,"paper" : 0
				     } 
  			}
  			,messages  = {
    				 "-1"  : "Вы проиграли"
   					 ,"0"  : "Ничья"
  					 ,"1"  : "Вы выиграли"
 			}
 			;
 	console.log(g.userAnswer.val());
  	g.userAnswerImg.attr("src", "../images/" + g.userAnswer.val() + ".jpg");
 	g.computerAnswerImg.attr("src", "../images/" + computerAnswer + ".jpg");
 	g.message.text(messages[table[g.userAnswer.val()][computerAnswer]]);
 	g.result.css("display", "block");
 	console.log("я молодец")

  }
  g.userAnswer.change(g.play);
}






