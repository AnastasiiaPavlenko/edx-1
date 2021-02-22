function Calc(sSelector) {
	var c = this;
	console.log(this);
	
	c.calc = $(sSelector); 
	console.log(c.calc);

	c.num1 = c.calc.find("#num1");
	console.log(num1);

	c.operators = c.calc.children("select");
	console.log(operators);

	c.num2 = c.calc.find("#num2");
	console.log(num2);

	c.result = c.calc.find("#result");
	console.log(result);

	c.button = c.calc.find("#calc_btn");
	console.log(calc_btn);

c.calculate = function(){
	var num1 		= $(".num1")
		,num2 		= $(".num2")
		,operators  = $(".operators")
		,result 	= $(".result")
		;
	num2.css("box-shadow", "none");

		if(operators.val() == "+") {
			result.val((+ num1.val()) + (+ num2.val()));
		}
		else if	(operators.val() == "-") {
			result.val((+ num1.val()) - (+ num2.val()));
		}
		else if (operators.val() == "*") {
			result.val((+ num1.val()) * (+ num2.val()));
		}	
		else if (operators.val() == "/") {
			if(+ num2.val()) {
				result.val((+ num1.val()) / (+ num2.val()));
			}
			else {
				result.val("");
				num2.css("box-shadow", "0 0 3px #ff0000");
			}
		}
		else if (operators.val() == "%") {
			result.val((+ num1.val()) % (+ num2.val()));

		}
		else if(operators.val() == "^"){
   			result.val(Math.pow((+ num1.val()), (+ num2.val())));
		}
	}

	c.button.click(c.calculate);
}




























