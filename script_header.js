// HEADER AND NAVIGATION

// SITE HEADER

function siteHeader() {
  document.getElementById("logInSyllabus").innerHTML = `<a href="logIn.html"><span class="light">login</span></a> | <a href="syllabus.html"><span class="light">syllabus</span></a>`;
}
siteHeader();

function siteTitle() {
  document.getElementById("siteTitle").innerHTML = `<a href="index.html"><span class="siteTitle">Introduction to <br>Fine Art Techniques</span></a>`
}
siteTitle();

// MAIN NAVIGATION

var mainNavEl = document.querySelector("#mainNavUl");
function updateMainNav() {
  var mainNavHTML = "";
  for (nav of pages) {
      if (nav.technique === document.title) {
        mainNavHTML += `<li class="nav-item active" id="${ nav.id }" >`;
        mainNavHTML += `<a class="nav-link" data-toggle="pill" href="${ nav.page }" role="pill"> ${ nav.technique } </a>`;
        mainNavHTML += `</li>`;
      }
      else {
        mainNavHTML += `<li class="nav-item" id="${ nav.id }" >`;
        mainNavHTML += `<a class="nav-link" data-toggle="pill" href="${ nav.page }" role="pill"> ${ nav.technique } </a>`;
        mainNavHTML += `</li>`;
      }
    }
    mainNavEl.innerHTML = mainNavHTML;
}
updateMainNav();

// SUB NAVIGATION

var intro = document.getElementById('introContent');
var lecture = document.getElementById('lectureContent');
var studio = document.getElementById('studioContent');
var critique = document.getElementById('critiqueContent');

function showIntro(event){
    if (intro.style.display === 'none' || 'block') {
        intro.style.display = 'block';
        lecture.style.display = 'none';
        studio.style.display = 'none';
        critique.style.display = 'none';
        setIntroButton();
        resetLectureButton();
        resetStudioButton();
        resetCritiqueButton();
    } else {
        intro.style.display = 'none';
    }
}

function showLecture(event){
    if (lecture.style.display === 'none' || 'block') {
      intro.style.display = 'none';
      lecture.style.display = 'block';
      studio.style.display = 'none';
      critique.style.display = 'none';
      resetIntroButton();
      setLectureButton();
      resetStudioButton();
      resetCritiqueButton();
    } else {
        lecture.style.display = 'none';
    }
}

function showStudio(event){
    if (studio.style.display === 'none' || 'block') {
      intro.style.display = 'none';
      lecture.style.display = 'none';
      studio.style.display = 'block';
      critique.style.display = 'none';
      resetIntroButton();
      resetLectureButton();
      setStudioButton();
      resetCritiqueButton();
    } else {
        studio.style.display = 'none';
    }
}

function showCritique(event){
    if (critique.style.display === 'none' || 'block') {
      intro.style.display = 'none';
      lecture.style.display = 'none';
      studio.style.display = 'none';
      critique.style.display = 'block';
      resetIntroButton();
      resetLectureButton();
      resetStudioButton();
      setCritiqueButton();
    } else {
        critique.style.display = 'none';
    }
}

function setIntroButton() {
  $("#introButton").css({backgroundColor: '#ED6237', color: 'white', outline:'none'});
}

setIntroButton();

function setLectureButton() {
  $("#lectureButton").css({backgroundColor: '#ED6237', color: 'white', outline:'none'});
}

function setStudioButton() {
  $("#studioButton").css({backgroundColor: '#ED6237', color: 'white', outline:'none'});
}

function setCritiqueButton() {
  $("#critiqueButton").css({backgroundColor: '#ED6237', color: 'white', outline:'none'});
}

function resetIntroButton() {
  $("#introButton").css({backgroundColor: 'white', color: '#337AB7'});
}

function resetLectureButton() {
  $("#lectureButton").css({backgroundColor: 'white', color: '#337AB7'});
}

function resetStudioButton() {
  $("#studioButton").css({backgroundColor: 'white', color: '#337AB7'});
}

function resetCritiqueButton() {
  $("#critiqueButton").css({backgroundColor: 'white', color: '#337AB7'});
}
