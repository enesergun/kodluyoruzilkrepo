let ul = document.getElementById('list');
let li = ul.getElementsByTagName('li');

// close button
for (let i = 0; i < li.length; i++) {
	let span = document.createElement('span');
	let spanHTML = `×`
	span.classList.add('close')
	span.innerHTML = spanHTML;
	li[i].appendChild(span)
}

//when click close button hide the list element
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
	}
}

