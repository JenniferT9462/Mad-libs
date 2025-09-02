//====== Refactoring ======

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", () => {
  pluralNoun.value = "";
  noun1.value = "";
  noun2.value = "";
  song.value = "";
  verb.value = "";

  document.getElementById("madLibInputs").classList.remove("d-none");
  document.getElementById("madLibOutput").classList.add("d-none");
});

//=====Code.org code=====

// onEvent("playBtn", "click", function () {
//   // setScreen("screen1");
//   setText("pNounInput", "");
//   setText("nounInput1", "");
//   setText("nounInput2", "");
//   setText("songInput", "");
//   setText("verbInput", "");

//   document.getElementById("madLibInputs").classList.remove("d-none");
//   document.getElementById("madLibOutput").classList.add("d-none");
// });

// ======JavaScript=====

// window.onload = function() {
//   // Get Madlib from localstorage
//   var madLib = localStorage.getItem("madLibStory");
//   console.log(madLib);

//   if (madLib) {
//     document.getElementById("displayOutput").textContent = madLib;
//   }
// }

// function clickPlay() {
//   console.log("Play Button Clicked!");

//   // Clear from local storage
//   localStorage.removeItem("madLibStory");

//   //Go back to index.html
//   window.location.href = "./index.html";
// }
