
// char to int converter
function charToInt(char){

	if(isNaN(parseInt(char))){
		return (char.charCodeAt(0) - 55);
	} else {
		return parseInt(char);
	}

}

// int to char converter
function intToChar(int){

	if(int < 10){
		var temp = int + ""
		return temp[0]
	}
	return String.fromCharCode(int + 55)[0];

}