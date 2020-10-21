
// room class including its id and position on the cave map
class room {

	constructor(id, x, y){
		this.id = id;
		this.x = x;
		this.y = y;
	}
	
	// return one part of the id
	get(index){

		return charToInt(this.id[index]);

	}

	// changes one part of the id to a different amount
	change(index, amount){

		var newString = ""
		var length = 0;
		while(length < index){
			newString += this.id[length];
			length++;
		}
		newString += intToChar(amount);
		length++;
		while(length < 3){
			newString += this.id[length];
			length++;
		}

		this.id = newString;

	}

	// return the sum of all the id parts 
	sum() {

		return charToInt(this.id.charAt(0)) + charToInt(this.id.charAt(1)) + charToInt(this.id.charAt(2));

	}

	// converts any chars to ints and formats the id in (x,y,z) form
	format() {

		return "(" + charToInt(this.id.charAt(0)) + ", " + charToInt(this.id.charAt(1)) + ", " + charToInt(this.id.charAt(2)) + ")";

	}

	// returns the residue of the room
	residue() {

		return Math.abs(charToInt(this.id.charAt(0)) - charToInt(this.id.charAt(1))) + Math.abs(charToInt(this.id.charAt(1)) - charToInt(this.id.charAt(2))) + Math.abs(charToInt(this.id.charAt(0)) - charToInt(this.id.charAt(2)));

	}

}
