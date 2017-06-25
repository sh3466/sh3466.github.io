// ARRAY FOR PORTFOLIO

var portfolio = [
	{
		id: 1498379282233,
		title: "Drawing of an Interior: Cabinet du Salon",
		artist: "Mona Lisa",
		url: "http://images.metmuseum.org/CRDImages/dp/mobile-large/DP809355.jpg",
		medium: "Graphite, pen and blue ink, watercolor, heightened with white",
		view: false
	},
	{
		id: 1498379294232,
		title: "A Young Man",
		artist: "Mona Lisa",
		url: "http://images.metmuseum.org/CRDImages/rl/mobile-large/SF-1975-1-804f.jpg",
		medium: "Pen and brush in brown ink; the verso printed in brown",
		view: false
	},
	{
		id: 1498379305057,
		title: "Feeding the Dog",
		artist: "Mona Lisa",
		url: "http://images.metmuseum.org/CRDImages/dp/mobile-large/DP820560.jpg",
		medium: "Black chalk, highlighted with white chalk, on blue-gray paper faded to brown",
		view: true
	},
	{
		id: 1498379323104,
		title: "Hilly landscape with rocks",
		artist: "Mona Lisa",
		url: "http://images.metmuseum.org/CRDImages/dp/mobile-large/DP805044.jpg",
		date: "May 10, 2017",
		medium: "Pen and ink, brush",
		view: true
	},
	{
		id: 1498379331288,
		title: "Cattle Resting in a Mountainous Landscape",
		artist: "Mona Lisa",
		url: "http://images.metmuseum.org/CRDImages/dp/web-large/DP804757.jpg",
		medium: "Watercolor over graphite with stopping out, touches of bodycolor and gum",
		view: true
	}
];

// PROFILE

function setPortfolioCount() {
	var pieces = portfolio.filter(function(shown){
	  return shown.view === true;
	});

	sp = pieces.length;

	if (sp === 0) {
		document.getElementById('showPieces').innerHTML = "Portfolio coming soon!";
	} else {
		document.getElementById('showPieces').innerHTML = sp + " pieces in collection";
	}
}
setPortfolioCount();

// PORTFOLIO OPTIONS

function portfolioGallery() {
	document.getElementById("galleryUL").innerHTML = "";
	var imageLI = "";
	for (image of portfolio) {
		if (image.view) {
			imageLI = `<li id="${ image.id }"><img src=${ image.url } class="galleryImg"; /></li>`;
			document.getElementById("galleryUL").innerHTML += imageLI;
		}
	}
}
portfolioGallery();

function portfolioList() {
	var imageListLI = "";
	document.getElementById('listUL').innerHTML = "";
	for (image of portfolio) {
		if (image.view) {
			imageListLI = `<li id="${ image.id }"><img src=${ image.url } class="listImg"; /></li>`;
			imageTitleLi = `<li id="${ image.id }" class="imgTitle">${ image.title }</li>`
			imageMediumLi = `<li id="${ image.id }" class="imgMedium">${ image.medium }</li>`
			document.getElementById("listUL").innerHTML += imageListLI;
			document.getElementById("listUL").innerHTML += imageTitleLi;
			document.getElementById("listUL").innerHTML += imageMediumLi;
		}
	}
}
portfolioList();

var galleryDiv = document.getElementById("galleryContent");
var listDiv = document.getElementById("listContent");

function showGallery (event) {
	if (galleryDiv.style.display === 'none' || 'block') {
		galleryDiv.style.display = 'block';
		listDiv.style.display = 'none';
	} else {
		galleryDiv.style.display = 'none';
	}
}

function showList (event) {
	if (listDiv.style.display === 'none' || 'block') {
		galleryDiv.style.display = 'none';
		listDiv.style.display = 'block';
	} else {
		listDiv.style.display = 'none';
	}
}

function sort(event) {
	var sortSel = document.getElementById('sort');
	if (sortSel.value === "light"){
    document.getElementById('portfolio').classList.add('lightSort');
		document.getElementById('portfolioT').classList.add('lightSort');
		document.getElementById('galleryButton').classList.add('lightSort');
		document.getElementById('listButton').classList.add('lightSort');
    document.getElementById('portfolio').classList.remove('darkSort');
		document.getElementById('portfolioT').classList.remove('darkSort');
		document.getElementById('galleryButton').classList.remove('darkSort');
		document.getElementById('listButton').classList.remove('darkSort');
	} else if (sortSel.value === "dark") {
    document.getElementById('portfolio').classList.add('darkSort');
		document.getElementById('portfolioT').classList.add('darkSort');
		document.getElementById('galleryButton').classList.add('darkSort');
		document.getElementById('listButton').classList.add('darkSort');
    document.getElementById('portfolio').classList.remove('lightSort');
		document.getElementById('portfolioT').classList.remove('lightSort');
		document.getElementById('galleryButton').classList.remove('lightSort');
		document.getElementById('listButton').classList.remove('lightSort');
  } else {}
}

function collectionList() {
	var item = "";
	for (x of portfolio) {
		if (x.view) {
			item += `<li id="${ x.id }" onclick="toggleComplete(event)">`;
			item += `<span id="space" class="glyphicon glyphicon-check"></span>`;
		} else {
			item += `<li id="${ x.id }" class="selected" onclick="toggleComplete(event)">`;
			item += `<span id="space" class="glyphicon glyphicon glyphicon-unchecked
"></span>`;
		}
		item += `${ x.title }`;
		item += `</li>`;
	}
	document.getElementById('collectionList').innerHTML = item;
}
collectionList();

function toggleComplete(event) {
	var itemID = parseInt(event.currentTarget.id);
	var itemData = getItemData(itemID);
	itemData.view = !itemData.view;
	collectionList();
	portfolioGallery();
	portfolioList();
	setPortfolioCount();
}

function getItemData(id) {
	var itemFound;
	for (var i=0; i < portfolio.length; i++) {
		if (portfolio[i].id === id) {
			itemFound = portfolio[i];
			indexAt = i;
			break;
		}
	}
	if (itemFound) {
		return itemFound;
	} else {
		return null;
	}
}

function addCollectionItem() {
	var newItem = {
		id: Date.now()
	};
	newItem.title = document.getElementById('newItemTitle').value;
	newItem.artist = "Mona Lisa";
	newItem.url = document.getElementById('newItemURL').value;
	newItem.medium = document.getElementById('newItemMedium').value;
	newItem.view = true;
	portfolio.push(newItem);
	collectionList();
	portfolioGallery();
	portfolioList();
	setPortfolioCount();
	reset();
}

function reset() {
	document.getElementById('newItemTitle').value = "";
	document.getElementById('newItemURL').value = "";
	document.getElementById('newItemMedium').value = "";
}

function selectAll(event) {
	for (select of portfolio) {
		if (select.view === false) {
			select.view = true;
		}
	}
	collectionList();
	portfolioGallery();
	portfolioList();
	setPortfolioCount();
}

function deselectAll(event) {
	for (select of portfolio) {
		if (select.view === true) {
			select.view = false;
		}
	}
	collectionList();
	portfolioGallery();
	portfolioList();
	setPortfolioCount();
}
