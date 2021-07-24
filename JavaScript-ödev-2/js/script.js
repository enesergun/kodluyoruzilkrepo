let ul = document.getElementById('list');
let li = ul.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
	console.log(i)
	let span = document.createElement('span');
	let spanHTML = `×`
	span.classList.add('close')
	span.innerHTML = spanHTML;
	li[i].appendChild(span)
}









/* let span = document.createElement('span');
	let spanHTML = `<button type="button" class="btn-close" aria-label="Close"></button>`
	span.innerHTML = spanHTML;
	element.appendChild(span) */