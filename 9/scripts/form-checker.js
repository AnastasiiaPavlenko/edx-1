function FormChecker(sSelector){
	var f = this;
    f.init(sSelector);

    /* ***************** свойства *****************  */
    f.textfields 		= f.findObj(".b-textfield");
    f.errorMessage		= f.findObj(".b-form__message_error");


	/* ***************** методы *****************  */
	f.checkTextfield 	= function(textfield){
		var currentTextfield 	 = textfield.length ? textfield : $(this)
			,currentTextfieldVal = currentTextfield.val()
			,regexps             = Settings.get("regexps")
			,currentRegExp 		 = regexps [currentTextfield.attr("name")]
			,oCurrentRegExp      = new RegExp(currentRegExp)
			,textFieldError      = !currentTextfieldVal.match(oCurrentRegExp)
			;
			
		currentTextfield.toggleClass("b-textfield_error", textFieldError);
		return textFieldError;
	}
	f.checkTextfields   = function(event){ //предотвращаем событие по умолчанию
		event.preventDefault();
		var formError = false;
		f.textfields.each(function(){
			var currentTextfield = $(this)
			textfieldError = f.checkTextfield(currentTextfield);
			//console.log(textfieldError);
			if(textfieldError){
				formError = true;
			}
		});
		var methodType = formError ? "slideDown" : "slideUp"
		;
		f.errorMessage[methodType](); //способ подстановки названия метода через переменную
	}

	/* ***************** события *****************  */
	f.textfields.blur(f.checkTextfield);
	f.elem.submit(f.checkTextfields);
}

FormChecker.prototype = new Component();