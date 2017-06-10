
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
	document.getElementById('selection1URL').value = "";
	document.getElementById('selection2URL').value = "";
	var checkboxCritique = document.querySelectorAll('#critiqueInputs input[type="checkbox"]:checked')
		for (var checkbox of checkboxCritique) {
			checkbox.checked = false;
		}
	document.getElementById('critiqueArea').value = "";
}

// DISPLAY image ONCLICK or ONCHANGE

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
}
// above code is from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

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

// log in page

function welcomeMessage(event) {
	alert("The email you've entered isn't in our system. Please use the \"Sign up\" form to register.");
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
}

function makeUserName() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var userName = firstName + " " + lastName;
	return userName;
}

function registrationMessage(event) {
	var fullName = makeUserName();
	var email = document.getElementById("email").value;
	alert("Welcome, " + fullName + "! We've sent your password to " + email + ".");
}
