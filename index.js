//====== Refactoring ======
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", () => {
  // Get DOM Elements
  const pluralNoun = document.getElementById("pNounInput").value;
  const noun1 = document.getElementById("nounInput1").value;
  const noun2 = document.getElementById("nounInput2").value;
  const song = document.getElementById("songInput").value;
  const verb = document.getElementById("verbInput").value;

  var madLib =
    "Learning to drive is a tricky process. There " +
    "are a few rules you must follow.\n\n" +
    "1. Keep two " +
    pluralNoun +
    " on the steering " +
    "wheel at all times.\n\n2. Step on the " +
    noun1 +
    " to speed up and the " +
    noun2 +
    " to slow down.\n\n" +
    "3. Your parents will just LOVE it if you play " +
    song +
    " on the radio.\n\n4. Make sure to honk " +
    "your horn when you see " +
    verb +
    " on a street sign.";

  console.log(madLib);

  // Find the element with the ID "displayOutput" and set its text content 
  // to the value stored in the variable madLib (shows the completed story).
  const displayOutput = document.getElementById("displayOutput");
  displayOutput.textContent = madLib;

  // Add "d-none" class to the MadLib inputs, which prevents from displaying
  document.getElementById("madLibInputs").classList.add("d-none");
  // Removes the "d-none" class and makes the madLibOutput visible
  document.getElementById("madLibOutput").classList.remove("d-none");
});


//=====Code.org code======
// Lesson on code.org...https://studio.code.org/courses/csp5-virtual/units/1/lessons/7/levels/8

// onEvent("nextBtn", "click", function () {
//   var pluralNoun = getValue("pNounInput");
//   var noun1 = getValue("nounInput1");
//   var noun2 = getValue("nounInput2");
//   var song = getValue("songInput");
//   var verb = getValue("verbInput");

//   console.log(pluralNoun);
//   var madLib =
//     "Learning to drive is a tricky process. There " +
//     "are a few rules you must follow.\n\n" +
//     "1. Keep two " +
//     pluralNoun +
//     " on the steering " +
//     "wheel at all times.\n\n2. Step on the " +
//     noun1 +
//     " to speed up and the " +
//     noun2 +
//     " to slow down.\n\n" +
//     "3. Your parents will just LOVE it if you play " +
//     song +
//     " on the radio.\n\n4. Make sure to honk " +
//     "your horn when you see " +
//     verb +
//     " on a street sign.";

//   console.log(madLib);
//   setText("displayOutput", madLib);
//   document.getElementById("madLibInputs").classList.add("d-none");
//   document.getElementById("madLibOutput").classList.remove("d-none");
// });



//======JavaScript======

// function clickNext() {
//   console.log("Next button clicked!");
//   var pNoun = document.getElementById("pNounInput").value;
//   var noun1 = document.getElementById("nounInput1").value;
//   var noun2 = document.getElementById("nounInput2").value;
//   var song = document.getElementById("songInput").value;
//   var verb = document.getElementById("verbInput").value;

//   console.log(pNoun);

//   var madLibDisplay = document.getElementById("displayOutput");
//   var madLib = "Learning to drive is a tricky process. There " +
//                "are a few rules you must follow.\n\n" +
//                "1. Keep two " + pNoun +
//                " on the steering wheel at all times.\n\n" +
//                "2. Step on the " + noun1 +
//                " to speed up and the " + noun2  +
//                " to slow down.\n\n3. Your parents will just " +
//                "LOVE it if you play " + song  +
//                " on the radio.\n\n4. Make sure to honk " +
//                "your horn when you see " + verb  +
//                " on a street sign.";

//    // ✅ Save the mad lib into localStorage
//   localStorage.setItem("madLibStory", madLib);

// }
