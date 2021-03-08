function Component(){
	this.elem = null;

	this.init = function(sSelector){
		this.elem = $(sSelector);
	}

	this.findObj = function(sSelector){
		return this.elem.find(sSelector);
	}

	this.getVal   = function(oElem){
		var elemType    = oElem.attr("type")
		   ,elemTagName = oElem.prop("tagName").toLowerCase()
		   ;
		 //  console.log(elemType, elemTagName);
		 if(elemType == "radio") {
		 	return oElem.filter(":checked").val();
		 }
		 else if(elemType == "text" || elemTagName == "select" || elemTagName == "textarea") {
		 	return oElem.val();
		 }
		 else if(elemType == "") {
		 	return oElem.val()
		 }
	}

}