//your JS code here. If required.
const getName = document.getElementById("fname");

getName.addEventListener("blur", function(){
	this.value = this.value.toUpperCase()
})