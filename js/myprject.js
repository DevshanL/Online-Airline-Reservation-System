function enableSubbtn(){
	if(document.getElementById("adcharges").checked){
		document.getElementById("bttn1").disabled=false;
	}
	else{
		document.getElementById("bttn1").disabled=true;
	}
}