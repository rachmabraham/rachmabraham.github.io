//This will be where I do date calculations. Let's begin by defining today, along with the year and date.
var today = new Date();

dayOfMonth = today.getDate();
year = today.getFullYear();

//This is where I define the month portion.

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
function assignMonth() {
	return monthNames[today.getMonth()];
}
var month = assignMonth();
//This is where I define the day.

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function assignDay () {
	return dayNames[today.getDay()];
}
var day = assignDay();

//let's put it all together to culminate in a date display!
function displayDate() {
	return `Today is ${day} ${month} ${dayOfMonth}, ${year}.`;
	setTimeout(displayDate, 1000);
}
displayDate = displayDate();
console.log(displayDate);

//now let's move on to defining our time variables
function hourOfDay() {
	if (today.getHours() > 12) {		
		return today.getHours() - 12;
	}
	else {
		return today.getHours();
	}
}
var hour = hourOfDay();
console.log(hour);
var minutes = today.getMinutes();
var seconds = today.getSeconds();
function displayTime () {
	return `It is ${hour}:${minutes}:${seconds}`;
}
function continuousTime() {
	setInterval(displayTime,1000);
	console.log(displayTime());
}
console.log(continuousTime());




