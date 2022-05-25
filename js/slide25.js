function month() {
	var input = prompt("Enter a 4-digit year and a number for the month of the year:");
	console.log(input);
	var inputs = input.split(' ');
	for(let i = 0; i < inputs.length; i++) {
		if(isNaN(inputs[i])){
			console.log("Re-Enter Input")
			return month();
		}
	}
	var year = parseInt(inputs[0]);
	var month = parseInt(inputs[1]);
	let leap = true;
	if((year % 4) != 0 || (year % 400) != 0) {
		leap = false;
	}
	if((month % 2) == 1) {
		alert("31 days");
	}else if(month == 2 && leap){
		alert("29 days");
	}else if(month == 2 && !leap){
		alert("28 days");
	}else{
		alert("30 days");
	}
}
