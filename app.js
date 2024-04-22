function askFriend() {
	let input = document.getElementById('userInput').value;
	let response = "";
	let friendImage = document.getElementById('friendIMG');

	switch(input){

case "Como andas padrino":
	response = "Ando al 100 pa, espero q tú también";
	break;
case "ps q día es hoy":
	response = "hoy es " + new Date().toLocaleDateString();
	break;
case "cuentanos un chiste o q":
	response = "¿Qué le dice una iguana a su hermana gemela? Iguanita que tú.";
	break;

default:
	response = "La neta no te entiendo hable bien"
	break


	}

friendImage.classList.add('active');
setTimeout(function () {
	friendImage.classList.remove('active');
},500)

document.getElementById('friendResponse').innerText = response

}