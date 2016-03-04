function timeTillDoomsday () {

var endTime = new Date(2020,6,16,11,11,0,0);
var now = new Date();
var endTimestamp = Date.parse(endTime);
var nowTimestamp = Date.parse(now);
var timeDifference = endTimestamp - nowTimestamp;


var timeStampInSeconds = timeDifference / 1000;

var seconds = Math.floor(timeStampInSeconds % 60);
var minutes = Math.floor(timeStampInSeconds / 60) % 60;
var hours = Math.floor(timeStampInSeconds / (60 * 60) % 24);
var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) %7);
var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));

//set up an object on the fly below

var timeObject = {
	weeks: weeks,
	days: days,
	hours: hours,
	minutes:minutes,
	seconds:seconds
};





return timeObject;


}




function initTimer () {

var timer= document.getElementById('countdown-wrapper');
var weeks= document.getElementById('weeks');
var days= document.getElementById('days');
var hours= document.getElementById('hours');
var minutes= document.getElementById('minutes');
var seconds= document.getElementById('seconds');

var timeObjectReturned = timeTillDoomsday();

console.log (timeObjectReturned);

weeks.innerHTML = timeObjectReturned.weeks;
days.innerHTML = timeObjectReturned.days;
hours.innerHTML = timeObjectReturned.hours;
minutes.innerHTML = timeObjectReturned.minutes;
seconds.innerHTML = timeObjectReturned.seconds;

}

function updateTimer () {



}

initTimer();

setInterval(
	initTimer, 500);




	



	

