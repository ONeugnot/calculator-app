const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button0 = document.getElementById("0");
const egal = document.getElementById("egal");
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const fois = document.getElementById("fois");
const divise = document.getElementById("divise");

//window.addEventListener("keypress", (e) => {
//console.log(e.key);//
//});//

let resultat = 0;
let nombre1 = 0;
let nombre2 = 0;
let operator = "";
let NumberAlreadyClicked = false;

button7.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button7.textContent);
		console.log(nombre1);
	} else {
		nombre2 = parseInt(button7.textContent);
	}

	NumberAlreadyClicked = true;
});

button8.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button8.textContent);
	} else {
		nombre2 = parseInt(button8.textContent);
	}

	NumberAlreadyClicked = true;
});
button9.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button9.textContent);
	} else {
		nombre2 = parseInt(button9.textContent);
	}
	NumberAlreadyClicked = true;
});
button5.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button5.textContent);
	} else {
		nombre2 = parseInt(button5.textContent);
	}

	NumberAlreadyClicked = true;
});
button4.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button4.textContent);
	} else {
		nombre2 = parseInt(button4.textContent);
	}

	NumberAlreadyClicked = true;
});
button6.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button6.textContent);
	} else {
		nombre2 = parseInt(button6.textContent);
	}
	NumberAlreadyClicked = true;
});
button1.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button1.textContent);
	} else {
		nombre2 = parseInt(button1.textContent);
	}

	NumberAlreadyClicked = true;
});
button2.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button2.textContent);
	} else {
		nombre2 = parseInt(button2.textContent);
	}
	NumberAlreadyClicked = true;
});
button3.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button3.textContent);
	} else {
		nombre2 = parseInt(button3.textContent);
	}

	NumberAlreadyClicked = true;
});
button0.addEventListener("click", () => {
	if (NumberAlreadyClicked != true) {
		nombre1 = parseInt(button0.textContent);
	} else {
		nombre2 = parseInt(button0.textContent);
	}

	NumberAlreadyClicked = true;
});

plus.addEventListener("click", () => {
	operator = "+";
});

moins.addEventListener("click", () => {
	operator = "-";
});

fois.addEventListener("click", () => {
	operator = "*";
});

divise.addEventListener("click", () => {
	operator = "/";
});

egal.addEventListener("click", () => {
	if (operator == "+") {
		resultat = nombre1 + nombre2;
	} else if (operator == "*") {
		resultat = nombre1 * nombre2;
	} else if (operator == "-") {
		resultat = nombre1 - nombre2;
	} else if (operator == "/") {
		resultat = nombre1 / nombre2;
	}
	console.log(resultat);
});

reset.addEventListener("click", () => {
	resultat = 0;
	nombre1 = 0;
	nombre2 = 0;
	operator = "";
	NumberAlreadyClicked = false;
	console.clear();
});

del.addEventListener("click", () => {
	nombre2 = 0;
});
