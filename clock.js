document.addEventListener("DOMContentLoaded", function(){

var secondDegrees = 348;
var minuteDegrees = 354;
var hourDegrees = 0;


var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

second.style.transform = "rotate(" + secondDegrees + "deg)";
minute.style.transform = "rotate(" + minuteDegrees + "deg)";
hour.style.transform = "rotate(" + hourDegrees + "deg)";

var rotate = function(){
	var now = new Date();
	console.log(now);
	var currentSecond = now.getSeconds();
	var currentMinute = now.getMinutes();
	var currentHour = now.getHours();

	console.log(currentSecond);


	second.style.transform = "rotate(" + currentSecond * 6 + "deg)";
	minute.style.transform = "rotate(" + currentMinute * 6 + "deg)";
	hour.style.transform = "rotate(" + currentHour * 30 + "deg)";
// 	console.log(secondDegrees, secondDegrees % 360 === 0)
// 	if (secondDegrees % 360 === 0){
// 		minuteDegrees = minuteDegrees +6;
// 		minute.style.transform = "rotate(" + minuteDegrees + "deg)";
// 			}
// 		console.log(hourDegrees, hourDegrees);
// 	if (minuteDegrees % 360 === 0 && secondDegrees % 360 === 0) {
// 		hourDegrees = hourDegrees + 30;

// 		hour.style.transform = "rotate(" + hourDegrees + "deg)";
// }
// secondDegrees = secondDegrees + 6;
}

rotate();
setInterval(rotate, 1000);
// setInterval(rotateMinute, 5000);
});

