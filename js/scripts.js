var gallons = parseInt(prompt("How many gallons?"));

var conversion = function(gallons) {
	return gallons * 3.785412;
};

alert(conversion(gallons));
