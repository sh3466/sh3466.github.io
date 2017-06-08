// html = onEvent="someFunc(event)" pattern
// variables to remember and recall states
// small functions into larger functions
// listen for events - click, change, blur ...
// write content to the page based on user action
// manipulate html/css elements


// ! WRITE alert
// ! store inputs (text, radio, checkboxes) ONCLICK === don't refresh
// update completion info ONCLICK
// change state when nothing new vs new ONCHANGE
function save(event) {
	alert("Saved!");
}

// ! clear page elements ONCLICK but don't refresh
// reset completion info ONCLICK
// change state when nothing new vs new ONCHANGE
function clear(event) {
	var text = document.querySelector('#notesClear').placeholder;
	text = "hello";
}

// linkImage - show image from address
// onclick


// uploadImage - show image from upload
// on
