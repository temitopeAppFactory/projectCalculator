function Digz (num){
	document.Calculator.Display.value += num;
}



function equal(){
	document.Calculator.Display.value = eval(document.Calculator.Display.value);
}

function del(){
				var word = document.Calculator.Display.value;
				epp = word.length;
				a = epp - 1;
				word = word.substring(0, a);
				document.Calculator.Display.value = word;
			}

function ruth (){
	word = document.Calculator.Display.value;
	result = Math.sqrt(word);
	document.Calculator.Display.value = result;
	
}	

function equal(){
	result = eval (document.Calculator.Display.value);
	document.Calculator.Display.value = result;
}

function sqre(){
	word = document.Calculator.Display.value;
	word = Math.pow(word,2);
	document.Calculator.Display.value = word;
}

function Dot(){
	word = document.Calculator.Display.value;
	/* if (word.indexOf('.') > -1 ){
		
	}else{ } */
	if (word.length == 0){
		document.Calculator.Display.value = "0.";
	}else{
		document.Calculator.Display.value = word + '.';
	}
	
}

function clearScreen(){
	document.Calculator.Display.value = "";
}

function DoInverse(){
	word = document.Calculator.Display.value;
	document.Calculator.Display.value = 1/word;
}



function ToggleSign(){
	word = document.Calculator.Display.value;
	ridi = word.length - 1;
	if (word.length > 0){
		if (word.indexOf('-') == -1){
			document.Calculator.Display.value = "-" + word;
		}else if (word.indexOf('-') == 0) {
			document.Calculator.Display.value = word.substring(1);
		}else{
			document.Calculator.Display.value = word;
		}
	}
}