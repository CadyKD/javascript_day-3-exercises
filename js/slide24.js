function leapYear() {
	var input = prompt("Enter a 4-digit Integer that represents a year:");
	console.log(input);
	if(isNaN(input)){
		console.log("Re-Enter Input")
		return leap();
	}
	var year = parseInt(input)
	let leap = true;
	if((year % 4) != 0 || (year % 400) != 0) {
		leap = false;
	}
	if (leap) {
		alert("Leap year");
	} else {
		alert("Common year");
	}
}