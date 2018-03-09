const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

var date = new Date();
console.log(date);

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log("Hour: " + hour + " Minute: " + minute + " Second: " + second);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
