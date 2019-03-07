# README  

**TABLE OF CONTENTS**  

testing

[project description](#project-description)  
[motivation](#motivation)  
[code features](#code-features)  
[reflection](#reflection)  
[author](#author)  

## Project description  

>INTRODUCTION TO FINE ART TECHNIQUES  
> an interactive learning experience  

**[Introduction to Fine Art Techniques](https://sh3466.github.io/)** introduces students to the application and critique of significant fine art techniques. Each lesson provides students with the opportunity to learn about one technique through engaging real-world activities designed to address how and why that technique is used by artists.  

Each technique's lesson comprised of four parts: **1) a brief introduction** to the technique, **2) a lecture, with note taking**, that emphasizes the technical aspects and vocabulary of the technique, **3) studio work** where students apply the technique and upload their pieces as well as rate and reflect upon their work, and **4)  critiques of other artists'** technical as well as evocative use of the technique.  

Introduction to Fine Art Techniques also provides students with a **profile page** that includes their profile information and a **virtual portfolio**.  

While students can work through the lesson independently, teachers can also use the lessons as part of a **flipped classroom**. By completing the assigned lessons prior to class time, students are already introduced to the technique's application and critique which **saves class time for engaging in more collaborative experiences** such as: feedback and coaching on studio submissions, debating all of the pieces selected for critique, visiting artists locally or virtually to discuss their use of the technique, apply the technique in a community serve project or additional studio time with the teacher  

demo link: **[Introduction to Fine Art Techniques](https://sh3466.github.io/)**  

## Motivation  

This demo project was created for MSTU 5003: Theory and Programming of Interactive Media I at [Teachers College, Columbia University](http://www.tc.columbia.edu/) during Summer Session A,  2017 with [jmk2142](https://github.com/jmk2142).  

## Code features  

### reusable index.html  

`index.html` provides a **reusable structure** for every new lesson page. Once duplicated, only the `document.title` needs to be changed to the name of the given technique.  

As an example, the `definition jumbotron` for each lesson page uses the following structure.  

```
<div class="jumbotron">
    <h1 id="defTitle" class="h1jumbotron">
        <!--- definition() in script_pageGenerator.js --->
    </h1>
    <p><small id="etymology" class="light">
        <!--- definition() in script_pageGenerator.js --->
    </small></p>
    <p id="definition" class="lead">
        <!--- definition() in script_pageGenerator.js --->
    </p>
</div>
```  

### technique specific content in an array of objects  

Technique specific content is stored in an array of objects. The objects, keys and values in the array are **used to populate** each lesson's **content**. An example entry:  

```
var pages = [
...
{
    id: 2,
    technique: "chiaroscuro",
    page: "index.html",
    etymology: "from Italian: chiaro, “light,” and scuro, “dark”",
    definition: "This is an Italian term which literally means 'light-dark'. In paintings the description refers to clear tonal contrasts which are often used to suggest the volume and modeling of the subjects depicted.",
    introDirections: "While you watch the video, consider how you would identify and describe chiaroscuro.",
    introVideo: "https://www.youtube.com/embed/LrUznhnVd2s",
    lectureDirections: "Watch the video and take notes below. Be sure to save your notes when you are finished.",
    lectureVideo: "https://www.youtube.com/embed/V3WmrWUEIJo",
    studioDirections: "Watch the video. Choose 1-2 of the forms to sketch. Feel free to replay the video as you sketch. Upload your sketch below. Rate your sketch's successfulness. Finally, write a reflection on your experience with applying chiaroscuro and your sketch's successfulness in relation to chiaroscuro.",
    studioVideo: "https://www.youtube.com/embed/vMr6eimcolc",
    critiqueDirections: "Watch the video. Consider the artist's technical as well as evocative use of chiaroscuro. Select 2 example pieces to critique. Consider using the <a href=http://www.metmuseum.org/art/collection>Met's</a> online collection or <a href=https://www.behance.net/>behance.net</a>. Provide links to the selected pieces below. Finally, write a critique on the pieces. Further directions below.",
    critiqueVideo: "https://www.youtube.com/embed/9whgBqmELIk",
    critiqueSubDirections: "For each selection, describe the piece in terms of artist, medium, title, date, location and subject matter. Then analyze each piece in terms of how the work is constructed with regards to chiaroscuro, including points of emphasis. Finally, describe how each piece makes you think or feel. Be sure to compare and contrast your selections."
},  
...
```  

### javascript for page generation  

Using the reusable `.html` structure and the array of objectives, technique **specific page content is generated with javascript**. In the following example, a function is declared and called that generates the content for the `definition jumbotron` discussed above. This function will call the correct technique content by comparing the technique name in the array with the page title.  

```
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
```  

### javascript for user interaction  

Javascript is also used to **save, call and reset user inputs**. In the following example, the user's notes are saved onclick and recalled on page load.  

```
// HTML

<textarea id="notebookArea" rows="10" class="form-control" placeholder="Your notes here."></textarea>
<button class="btn btn-success" onclick="saveLecture()">
    Save
</button>

// JAVASCRIPT SAVE ONCLICK

function saveLecture(event) {
  var loc = document.getElementById("notebookArea").value;
  localStorage.setItem(document.title + ".notes", loc);
  alert("Saved!");
}

// JAVASCRIPT RECALL ON PAGE LOAD

function loadPreviousInputs() {
  for (tech of pages) {
    var title = document.title;
    if (tech.technique === document.title) {
      var stringNotes = ".notes";
      var itemNameNotes = title + stringNotes;
      document.getElementById("notebookArea").value = localStorage.getItem(itemNameNotes);

      ...   
```  

### local storage  

This project didn't venture into external databases so `localStorage` was **used to store and retrieve user inputs** for use in the above JS.  

### an interactive array of objects  

`script_profilePage.js` contains both an array of objects as well as the JS for `profilePage.html`. As in the above examples the html, array of objects and JS work together to generate page content and to react to user input. Here **users** are additionally able to **add to the array of objects** and manipulate the page content created by that array. The following example looks at one object in the array as well as the html and JS that allows user's to add to the array.

```
// ARRAY OF OBJECTS EXAMPLE

var portfolio = [{
    id: 1498379282233,
    title: "Drawing of an Interior: Cabinet du Salon",
    artist: "Mona Lisa",
    url: "http://images.metmuseum.org/CRDImages/dp/mobile-large/DP809355.jpg",
    medium: "Graphite, pen and blue ink, watercolor, heightened with white",
    view: false
  },
...

// HTML

<div class="form-group">
    <input id="newItemTitle" type="text" class="form-control" placeholder="title" />
</div>
<div class="form-group">
    <input id="newItemMedium" type="text" class="form-control" placeholder="medium" />
</div>
<div class="form-group">
    <input id="newItemURL" type="url" class="form-control" placeholder="url" />
</div>
<button type="button" onclick="addCollectionItem()">
    enter
</button>

// JS TO ADD ITEM TO ARRAY

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

// JS TO UPDATE PAGE CONTENT

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
```  

## Author  

[@heinitz](https://twitter.com/heinitz)
