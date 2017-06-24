// PAGE SETUP

// DEFINITION SECTION

function definition() {
	for (object of pages) {
		if (object.technique === document.title) {
			var defTitle = object.technique;
			document.getElementById("defTitle").innerHTML = defTitle;
			var ety = object.etymology;
			document.getElementById("etymology").innerHTML = ety;
			var def = object.definition;
			document.getElementById("definition").innerHTML = def;
		}
	}
}
definition();

// SECTION TITLES

function introductionTitle() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var title = tech.technique;
			document.getElementById("introTitle").innerHTML = "Introduction to " + '<span class="text-capitalize">' + title + '</span>';
		}
	}
}
introductionTitle();

function lectureTitle() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var title = tech.technique;
			document.getElementById("lectureTitle").innerHTML = title + " lecture";
		}
	}
}
lectureTitle();

function studioTitle() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var title = tech.technique;
			document.getElementById("studioTitle").innerHTML = title + " studio";
		}
	}
}
studioTitle();

function critiqueTitle() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var title = tech.technique;
			document.getElementById("critiqueTitle").innerHTML = title + " critique";
		}
	}
}
critiqueTitle();

// SECTION DIRECTIONS

function introDirections() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var directions = tech.introDirections;
			document.getElementById("introDir").innerHTML = '<p class="lead">Directions:</p>' + directions;
		}
	}
}
introDirections();

function lectureDirections() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var directions = tech.lectureDirections;
			document.getElementById("lectureDir").innerHTML = '<p class="lead">Directions:</p>' + directions;
		}
	}
}
lectureDirections();

function studioDirections() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var directions = tech.studioDirections;
			document.getElementById("studioDir").innerHTML = '<p class="lead">Directions:</p>' + directions;
		}
	}
}
studioDirections();

function critiqueDirections() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var directions = tech.critiqueDirections;
			document.getElementById("critiqueDir").innerHTML = '<p class="lead">Directions:</p>' + directions;
		}
	}
}
critiqueDirections();

// SECTION VIDEOS

function introVideo() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var video = tech.introVideo;
			document.getElementById("introV").src = video;
		}
	}
}
introVideo();

function lectureVideo() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var video = tech.lectureVideo;
			document.getElementById("lectureV").src = video;
		}
	}
}
lectureVideo();

function studioVideo() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var video = tech.studioVideo;
			document.getElementById("studioV").src = video;
		}
	}
}
studioVideo();

function critiqueVideo() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var video = tech.critiqueVideo;
			document.getElementById("critiqueV").src = video;
		}
	}
}
critiqueVideo();

// SECTION SUB DIRECTIONS

function studioNum2() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var dir = tech.technique;
			document.getElementById("studioNum2").innerHTML = "2. How successful is your sketch in relation to " + dir + "?";
		}
	}
}
studioNum2();

function studioNum3() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var dir = tech.technique;
			document.getElementById("studioNum3").innerHTML = "3. Write a reflection on your experience with applying " + dir + " and your sketch's successfulness in relation to " + dir + ".";
		}
	}
}
studioNum3();

function critiqueNum2() {
	for (tech of pages) {
		if (tech.technique === document.title) {
			var dir = tech.technique;
			document.getElementById("critiqueNum2").innerHTML = "For each selection, describe the piece in terms of artist, medium, title, date, location and subject matter. Then analyze each piece in terms of how the work is constructed with regards to " + dir + ", including points of emphasis. Finally, describe how each piece makes you think or feel. Be sure to compare and contrast your selections.";
		}
	}
}
critiqueNum2();

// INFO ICONS

function linkInfo(event) {
  alert("Be sure to use the image's URL, not the webpage's URL. You can find the image URL by right-clicking on the image. Then choose \"copy image address\".");
}

function uploadInfo(event) {
  alert("Images size should not exceed 4 MB.");
}

// LOAD PLACEHOLDER IMAGES

function setStudioImage() {
  if (localStorage.getItem(document.title + ".sketch") === null) {
    var locSS = "https://placehold.it/500x500/dddddd/dddddd";
		localStorage.setItem(document.title + ".sketch", locSS);
  }
}

function setCritiqueImage1() {
  if (localStorage.getItem(document.title + ".sel1IMG") === null) {
		var loc1IMGS = "https://placehold.it/500x500/dddddd/dddddd";
		localStorage.setItem(document.title + ".sel1IMG", loc1IMGS);
  }
}

function setCritiqueImage2() {
  if (localStorage.getItem(document.title + ".sel2IMG") === null) {
		var loc2IMGS = "https://placehold.it/500x500/dddddd/dddddd";
		localStorage.setItem(document.title + ".sel2IMG", loc2IMGS);
  }
}

// LOAD LOCALSTORAGE

function loadPreviousInputs() {
	for (tech of pages) {
		var title = document.title;
		if (tech.technique === document.title) {
			var stringNotes = ".notes";
			var itemNameNotes = title + stringNotes;
			document.getElementById("notebookArea").value = localStorage.getItem(itemNameNotes);

			var stringSketch = ".sketch";
			var itemNameSketch = title + stringSketch;
			document.getElementById("sketchImg").src = localStorage.getItem(itemNameSketch);

			var stringRadio = ".rating";
		 	var itemNameRadio = title + stringRadio;
			var input = document.querySelector('[name="optionsRadios"][value="' + localStorage.getItem(itemNameRadio) + '"]');
			input.checked = true;

			var stringReflection = ".reflection";
			var itemNameReflection = title + stringReflection;
			document.getElementById("reflectionArea").value = localStorage.getItem(itemNameReflection);

			var string1URL = ".sel1URL";
			var itemName1URL = title + string1URL;
			document.getElementById("selection1URL").value = localStorage.getItem(itemName1URL);

			var string1IMG = ".sel1IMG";
			var itemName1IMG = title + string1IMG;
			document.getElementById("selection1img").src = localStorage.getItem(itemName1IMG);

			var string2URL = ".sel2URL";
			var itemName2URL = title + string2URL;
			document.getElementById("selection2URL").value = localStorage.getItem(itemName2URL);

			var string2IMG = ".sel2IMG";
			var itemName2IMG = title + string2IMG;
			document.getElementById("selection2img").src = localStorage.getItem(itemName2IMG);

			var stringCritique = ".critique";
			var itemNameCritique = title + stringCritique;
			document.getElementById("critiqueArea").value = localStorage.getItem(itemNameCritique);
		}
	}
}
