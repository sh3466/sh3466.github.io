// save - WRITE alert, store inputs (text, radio, checkboxes) ONCLICK, update completion info ONCLICK, change state when nothing new vs new ONCHANGE

function save(event) {
	alert("Saved!");
	event.stopPropagation();
}

// reset - WRITE alert, reset page elements ONCLICK, reset completion info ONCLICK, change state when nothing new vs new ONCHANGE

function clear(event) {
	document.querySelector('#notes') = "reset";
}



// linkImage - show image from address
// onclick


// uploadImage - show image from upload
// on


