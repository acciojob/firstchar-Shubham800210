function firstChar(text) {
  // your code here
	let newText = text.trim();
	return newText.charAt(0);
	
	
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
