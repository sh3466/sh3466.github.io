// html: onEvent="someFunc(event)" pattern
// listen for events - click, change, blur ...
// write content to the page based on user action
// manipulate html/css elements

// variables to remember and recall states
// small functions into larger functions


// WRITE alert ONCLICK

function save(event) {
	alert("Saved!");
}

function linkInfo(event) {
	alert("Be sure to use the image's URL, not the webpage's URL. You can find the image URL by right-clicking on the image. Then choose \"copy image address\".");
}

// RESET elements ONCLICK

function resetLecture(event) {
	document.getElementById('notebookArea').value = "";
}

function resetStudio(event) {
	document.getElementById('sketchImg').src = "http://placehold.it/500x500/dddddd/dddddd";
	document.getElementById('inputFile').value = "";
	var radioEls = document.querySelectorAll('#rating input[type="radio"]:checked');
		for (var radio of radioEls){
			radio.checked = false;
		}
	document.getElementById('reflectionArea').value = "";
}

function resetCritique(event) {
	document.getElementById('selection1img').src = "http://placehold.it/500x500/dddddd/dddddd";
	document.getElementById('selection2img').src = "http://placehold.it/500x500/dddddd/dddddd";
	var checkboxCritique = document.querySelectorAll('#critiqueInputs input[type="checkbox"]:checked')
		for (var checkbox of checkboxCritique) {
			checkbox.checked = false;
		}
	document.getElementById('critiqueArea').value = "";
}

// DISPLAY image ONCLICK

function displayImgS() {
	var preview = document.getElementById('sketchImg');
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();
	reader.addEventListener("load", function () {
	    preview.src = reader.result;
	  }, false);
	  if (file) {
	    reader.readAsDataURL(file);
	  }
// this code is from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
}

function displayImgC1(event) {
	var imgEl = document.getElementById('selection1img');
	var imgSrc = document.getElementById('selection1URL').value;
	imgEl.src = imgSrc;
}

function displayImgC2(event) {
	var imgEl = document.getElementById('selection2img');
	var imgSrc = document.getElementById('selection2URL').value;
	imgEl.src = imgSrc;
}
