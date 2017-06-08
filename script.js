// html: onEvent="someFunc(event)" pattern
// listen for events - click, change, blur ...
// write content to the page based on user action
// manipulate html/css elements

// variables to remember and recall states
// small functions into larger functions


// ! WRITE alert ONCLICK
// ! "store" inputs (text, radio, checkboxes) ONCLICK === don't refresh
function save(event) {
	alert("Saved!");
}

// clear page elements ONCLICK but don't refresh
function clearTextNB(event) {
	document.getElementById('notebookArea').value = "";
}
function clearTextR(event) {
	document.getElementById('reflectionArea').value = "";
}
function clearTextC(event) {
	document.getElementById('critiqueArea').value = "";
}

// linkImage - show image from address
// onclick


// uploadImage - show image from upload
// on
