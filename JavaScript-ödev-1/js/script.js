let messageDOM = document.querySelector('.message');
let clockDOM = document.querySelector('.clock');
console.log(clockDOM)
let currentName = prompt("isminiz?");

messageDOM.innerHTML = `Merhaba, <strong>${currentName}</strong> hoş geldin!`;


setInterval(showTime, 1000);
function showTime() {
    days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    let day = days[time.getDay()];
	
	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = `${hour}:${min}:${sec}  ${day}`;

	clockDOM.innerHTML = currentTime;
}
showTime();
