
window.addEventListener ('load', calculateTime)
function calculateTime(){
var date = new Date();
var daynumber = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var ampm = hour >= 12 ? 'PM' : 'AM';
var dayNames = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

hour = hour % 12;
hour == hour ? 12 : '12';
hour = hour < 10 ? '0' + hour : hour;
minute = minute < 10 ? '0' + minute : minute;

document.getElementById("daynumber").innerHTML = 
dayNames[daynumber];
document.getElementById("hour").innerHTML = 
hour;
document.getElementById("minutes").innerHTML = 
minute;
document.getElementById("ampm").innerHTML =
 ampm;

setTimeout(calculateTime, 200);}

