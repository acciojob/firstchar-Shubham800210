function firstChar(text) {
  // your code here
	if(text){
		return text.split("");
	}else{
		return empty string;
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
