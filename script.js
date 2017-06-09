// html: onEvent="someFunc(event)" pattern
// listen for events - click, change, blur ...
// write content to the page based on user action
// manipulate html/css elements
// variables to remember and recall states

// small functions into larger functions


// ! WRITE alert ONCLICK

function save(event) {
	alert("Saved!");
}

// RESET elements ONCLICK

function resetTextNB(event) {
	document.getElementById('notebookArea').value = "";
}

function resetTextR(event) {
	var radioEls = document.querySelectorAll('#rating input[type="radio"]:checked');
		for (var radio of radioEls){
			radio.checked = false;
		}
	document.getElementById('reflectionArea').value = "";
}

function resetTextC(event) {
	var checkboxCritique = document.querySelectorAll('#critiqueInputs input[type="checkbox"]:checked')
		for (var checkbox of checkboxCritique) {
			checkbox.checked = false;
		}
	document.getElementById('critiqueArea').value = "";
}

// DISPLAY image ONCLICK

function displayImgC1(event) {
	alert("just checking");
	var imgEl = document.getElementById('selection1img');
	imgEl.src = document.getElementById('selection1URL').src;
}
