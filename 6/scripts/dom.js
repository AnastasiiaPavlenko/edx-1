function showMessage(){
	console.log("my message");
}
// ставим объект в соответствие html-элементу с id msgBtn1
var 
	msgBtn1 = document.getElementById("msgBtn1")
	,listLi = document.getElementsByTagName("li") //li в кавычках, потому что это строка
	;
console.log(listLi);
console.log(msgBtn1);
//свойства кнопки
console.log(msgBtn1.type, msgBtn1.value, msgBtn1.tagName);

//на событие click НАЗНАЧАЕМ функцию showMessage
msgBtn1.onclick = showMessage;

for (var i in listLi){
	//на событие наведение мышки НАЗНАЧАЕМ функцию showMessage
	listLi[i].onmouseover = showMessage;
}

console.log("#####################################");

function translit () {
	var message  = document.getElementById("msg")
 	,newMessage = document.getElementById("newMsg")
 	,symbols  = {"н" : "n", "а" : "a", "ч" : "ch", "л" : "l", "о" : "o", "е" : "e", "т" : "t"}
 	;
 	newMessage.value = "";
 
 	for(var i = 0; i < message.value.length; i ++){
 	 newMessage.value += symbols[message.value[i]] ? symbols[message.value[i]] : message.value[i];
 	}
//console.log(newMessage);
}

var btn = document.getElementById("btn");
btn.onclick = translit;