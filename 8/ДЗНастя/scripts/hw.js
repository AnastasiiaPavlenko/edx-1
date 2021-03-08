function Form(sSelector){
	var f = this;
//***************************************************** свойства **************************************************

//	f.form = $(sSelector);
	f.init(sSelector);

	f.name = f.findObj(".form__name");
	f.surname = f.findObj(".form__surname");
	f.email = f.findObj(".form__email");
	f.number = f.findObj(".form__number");
	f.address = f.findObj(".form__address");
	f.question = f.findObj(".form__question");
	f.button = f.findObj(".form__submit-button");
    f.img = f.findObj(".langs__lang");

//***************************************************** методы **************************************************

	f.showInfo = function(){
	/*	    console.log(
				f.name.val() 
				+ "\n" 
				+ f.surname.val()
				+ "\n" 
				+ f.email.val()
				+ "\n" 
				+ f.number.val()
				+ "\n" 
				+ f.address.val()
				+ "\n" 
				+ f.button.val()
				+ "\n" 
				+ f.question.filter(":checked").val()
		);
		f.getVal(f.name); */
           console.log(
				f.getVal(f.name)
				+ "\n" 
				+ f.getVal(f.surname)
				+ "\n" 
				+ f.getVal(f.email)
				+ "\n" 
				+ f.getVal(f.number)
				+ "\n" 
				+ f.getVal(f.address)
				+ "\n" 
				+ f.getVal(f.button)
				+ "\n" 
				+ f.getVal(f.question)
				+ "\n"
				+ f.elem
		);
	}

	f.translate = function(){
		var currentLang = $(this).data("lang")
			,langs = Settings.get("langs")
			;
		console.log(currentLang);

		$.each(langs, function(className, textData){
				f.findObj("." + className).text(textData[currentLang]);
			});
	}

	f.message = function(){
		var message = alert(f.name.val()+f.surname.val()+", спасибо, что совершили покупку в нашем магазине! Мы выслали Вам сообщение с деталями Вашего заказа на "+ 
			f.email.val()); 
	}

	

//***************************************************** события **************************************************

f.button.click(f.showInfo);
f.img.click(f.translate);
f.button.click(f.message);



}

Form.prototype = new Component();
