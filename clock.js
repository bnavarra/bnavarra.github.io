"use strict";
/*
   Countdown Clock
   Author: Bryce Navarra
   Date: 2023-04-13

*/

runClock();
setInterval("runClock()", 1000);

function runClock(){
   var currentDay =  new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   // current date amd time
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   // countdown
   var newYear = new Date("May 10, 2023");
  
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}