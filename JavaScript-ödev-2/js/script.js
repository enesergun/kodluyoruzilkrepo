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


// checked

ul.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
}, false);


function newElement() {
	var listElement = document.createElement("li");
	var inputValue = document.getElementById("task").value;
	var t = document.createTextNode(inputValue);
	listElement.appendChild(t);
	if (inputValue === "") {
		$(".error").toast("show");
	} else {
		$(".success").toast("show");
	  	document.getElementById("list").appendChild(listElement);
	}
	document.getElementById("task").value = "";
  
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	listElement.appendChild(span);
  
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}
  }