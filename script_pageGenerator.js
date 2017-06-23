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

// LOAD PLACEHOLDER IMAGES

function setStudioImage() {
  if (localStorage.getItem("sketch") === null) {
    document.getElementById('sketchImg').src = "http://placehold.it/500x500/dddddd/dddddd";
    localStorage.sketch = document.getElementById('sketchImg').src;
  }
}

function setCritiqueImage1() {
  if (localStorage.getItem("sel1img") === null) {
    document.getElementById('selection1img').src = "http://placehold.it/500x500/dddddd/dddddd";
    localStorage.sel1img = document.getElementById('selection1img').src;
  }
}

function setCritiqueImage2() {
  if (localStorage.getItem("sel2img") === null) {
    document.getElementById('selection2img').src = "http://placehold.it/500x500/dddddd/dddddd";
    localStorage.sel2img = document.getElementById('selection2img').src;
  }
}

// LOAD LOCALSTORAGE

function loadPreviousInputs() {
  document.getElementById("notebookArea").value = localStorage.getItem("notes");
  document.getElementById("sketchImg").src = localStorage.getItem("sketch");
//document.querySelector("[name='optionsRadios']:checked").value = localStorage.getItem("response");
  document.getElementById("reflectionArea").value = localStorage.getItem("reflection");
	document.getElementById('selection1URL').value = localStorage.getItem("sel1URL");
	document.getElementById("selection1img").src = localStorage.getItem("sel1img");
	document.getElementById('selection2URL').value = localStorage.getItem("sel2URL");
  document.getElementById("selection2img").src = localStorage.getItem("sel2img");
  document.getElementById("critiqueArea").value = localStorage.getItem("critique");
}
