var contSio = 0;
document.getElementById("button1").onclick = function() {
	contSio++;
	document.getElementById("contNo").innerHTML = contSio;
};

var contNoo = 0;
document.getElementById("button2").onclick = function() {
	contNoo++;
	document.getElementById("contSi").innerHTML = contNoo;
};