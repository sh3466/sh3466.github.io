// for testing
// localStorage.clear()

// USER INTERACTIONS

// setup from script_pageGenerator.js
setStudioImage();
setCritiqueImage1();
setCritiqueImage2();
loadPreviousInputs();

// SAVE TO LOCALSTORAGE

function saveLecture(event) {
  var loc = document.getElementById("notebookArea").value;
  localStorage.setItem(document.title + ".notes", loc);
  alert("Saved!");
}

function saveStudio(event) {
  var locS = document.getElementById("sketchImg").src;
  localStorage.setItem(document.title + ".sketch", locS);
  var locR = document.getElementById("reflectionArea").value;
  localStorage.setItem(document.title + ".reflection", locR);
  var locRS = document.querySelector("[name='optionsRadios']:checked").value;
  localStorage.setItem(document.title + ".rating", locRS);
  alert("Saved!");
}

function saveCritique(event) {
  var loc1URL = document.getElementById("selection1URL").value;
  localStorage.setItem(document.title + ".sel1URL", loc1URL);
  var loc1IMG = document.getElementById("selection1img").src;
  localStorage.setItem(document.title + ".sel1IMG", loc1IMG);
  var loc2URL = document.getElementById("selection2URL").value;
  localStorage.setItem(document.title + ".sel2URL", loc2URL);
  var loc2IMG = document.getElementById("selection2img").src;
  localStorage.setItem(document.title + ".sel2IMG", loc2IMG);
  var locC = document.getElementById("critiqueArea").value;
  localStorage.setItem(document.title + ".critique", locC);
  alert("Saved!");
}

// RESET ELEMENTS AND LOCALSTORAGE

function resetLecture(event) {
  localStorage.removeItem(document.title + ".notes");
  document.getElementById('notebookArea').value = "";
}

function resetStudio(event) {
  localStorage.removeItem(document.title + ".sketch");
  document.getElementById('sketchImg').src = "https://placehold.it/500x500/dddddd/dddddd";
  localStorage.removeItem(document.title + ".rating");
  var radios = document.querySelectorAll('#rating input[type="radio"]:checked');
  for (var option of radios) {
    option.checked = false;
  }
  localStorage.removeItem(document.title + ".reflection");
  document.getElementById('reflectionArea').value = "";
}

function resetCritique(event) {
  localStorage.removeItem(document.title + ".sel1IMG");
  document.getElementById('selection1img').src = "https://placehold.it/500x500/dddddd/dddddd";
  localStorage.removeItem(document.title + ".sel2IMG");
  document.getElementById('selection2img').src = "https://placehold.it/500x500/dddddd/dddddd";
  localStorage.removeItem(document.title + ".sel1URL");
  document.getElementById('selection1URL').value = "";
  localStorage.removeItem(document.title + ".sel2URL");
  document.getElementById('selection2URL').value = "";
  localStorage.removeItem(document.title + ".critique");
  document.getElementById('critiqueArea').value = "";
}

// DISPLAY ONCLICK OR ONCHANGE

function displayImgS() {
  var preview = document.getElementById('sketchImg');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function() {
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
