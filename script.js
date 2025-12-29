let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let ampm = document.getElementById("ampm");

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    
    hours = hours % 12;
    hours = hours ? hours : 12;

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    mins.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    secs.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampm.innerHTML = period;

}, 1000);