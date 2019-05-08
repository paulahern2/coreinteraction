alert("Welcome! Please view console on your browser.");

var name = "Paul Ahern II"
console.log(name)

var number = 21
console.log(number)

var numberName = "21"
console.log(numberName)

var admin = false
console.log(admin)

console.log(name + number)

console.log(23 - 2)
console.log(21 - 0)
console.log(20 + 1)
console.log(22 - 1)
console.log(11 + 10)

var countries = ["Ireland, Korea, Vietnam, Papua New Guinea"]
console.log(countries)

var currentHour = new Date().getHours()
console.log(currentHour)
	if (currentHour == 21) {
		var msg = "it is 9pm"
		} else {
		var msg = "it is not 9pm"
		}
	console.log(msg);

if (name.length - 1 <= 9) {
 	var response = "My name is relatively short."
} else if (name.length - 1 >= 14) {
 	var response = "My name is relatively long."
} else	{
 	var response = "My name is neither short nor long."
}

console.log(response)
