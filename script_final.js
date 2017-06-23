// localStorage.clear()

// INTERACTIONS

// setup from script_pageGenerator.js
setStudioImage();
setCritiqueImage1();
setCritiqueImage2();
loadPreviousInputs();

// SAVE TO LOCALSTORAGE

function saveLecture(event) {
  localStorage.notes = document.getElementById("notebookArea").value;
  alert("Saved!");
}

function saveStudio(event) {
  localStorage.sketch = document.getElementById("sketchImg").src;
//  var radioSetResponse = document.querySelector("[name='optionsRadios']:checked").value;
//  localStorage.setItem("response", radioSetResponse);
  localStorage.reflection = document.getElementById("reflectionArea").value;
  alert("Saved!");
}

function saveCritique(event) {
  localStorage.sel1URL = document.getElementById('selection1URL').value;
  localStorage.sel1img = document.getElementById("selection1img").src;
  localStorage.sel2URL = document.getElementById('selection2URL').value;
  localStorage.sel2img = document.getElementById("selection2img").src;
  localStorage.checkboxes = document.getElementById('#critiqueInputs input[name="license"]:checked').value;
  alert(checkboxes);
  localStorage.critique = document.getElementById("critiqueArea").value;
  alert("Saved!");
}

// RESET ELEMENTS AND LOCALSTORAGE

function resetLecture(event) {
  localStorage.removeItem('notes');
  document.getElementById('notebookArea').value = "";
}

function resetStudio(event) {
  localStorage.removeItem('sketch');
  document.getElementById('sketchImg').src = "http://placehold.it/500x500/dddddd/dddddd";
  localStorage.sketch = document.getElementById('sketchImg').src;
  localStorage.removeItem('response');
  $("input:checked").removeAttr("checked");
  localStorage.removeItem('reflection');
  document.getElementById('reflectionArea').value = "";
}

function resetCritique(event) {
  localStorage.removeItem('sel1img');
  document.getElementById('selection1img').src = "http://placehold.it/500x500/dddddd/dddddd";
  localStorage.removeItem('sel2img');
  document.getElementById('selection2img').src = "http://placehold.it/500x500/dddddd/dddddd";
  localStorage.removeItem('sel1URL');
  document.getElementById('selection1URL').value = "";
  localStorage.removeItem('sel2URL');
  document.getElementById('selection2URL').value = "";
  var checkboxCritique = document.querySelectorAll('#critiqueInputs input[type="checkbox"]:checked')
  for (var checkbox of checkboxCritique) {
    checkbox.checked = false;
  }
  localStorage.removeItem('critique');
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

// LOGIN PAGE

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

// INFO ICON

function linkInfo(event) {
  alert("Be sure to use the image's URL, not the webpage's URL. You can find the image URL by right-clicking on the image. Then choose \"copy image address\".");
}
