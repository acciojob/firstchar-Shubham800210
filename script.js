function firstChar(text) {
  // your code here
	if(text){
	 // ans = text.split("");
		return (text.substring(0, 1));;
	}else{
		return "empty string";

	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
