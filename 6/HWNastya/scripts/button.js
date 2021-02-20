
function showMW(state){
document.getElementById("modal-window").style.display = state;
}

var button = document.getElementById("button");
button.onclick = function(){
 showMW('block');
}

//function closeMW() {
//document.getElementById("close").onclick = showMW("none");
//}


