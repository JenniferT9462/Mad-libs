function clickNext() {
  console.log("Next button clicked!");
  var pNoun = document.getElementById("pNounInput").value;
  var noun1 = document.getElementById("nounInput1").value;
  var noun2 = document.getElementById("nounInput2").value;
  var song = document.getElementById("songInput").value;
  var verb = document.getElementById("verbInput").value;
  
  console.log(pNoun);

  var madLibDisplay = document.getElementById("displayOutput");
  var madLib = "Learning to drive is a tricky process. There " +
               "are a few rules you must follow.\n\n" +
               "1. Keep two " + pNoun +
               " on the steering wheel at all times.\n\n" +
               "2. Step on the " + noun1 +
               " to speed up and the " + noun2  +
               " to slow down.\n\n3. Your parents will just " + 
               "LOVE it if you play " + song  +
               " on the radio.\n\n4. Make sure to honk " +
               "your horn when you see " + verb  +
               " on a street sign.";


    
   // ✅ Save the mad lib into localStorage
  localStorage.setItem("madLibStory", madLib);
   
}


// Code.org code....

// onEvent("nextBtn", "click", function(){
//   // setScreen("screen2");
//   var pluralNoun = getText("pNounInput");
//   var noun1 = getText("nounInput1");
//   var noun2 = getText("nounInput2");
//   var song = getText("songInput");
//   var verb = getText("verbInput");

//   var madLib = "Learning to drive is a tricky process. There " +
//              "are a few rules you must follow.\n\n" +
//              "1. Keep two " + pluralNoun + " on the steering " +
//              "wheel at all times.\n\n2. Step on the " + noun1  +
//              " to speed up and the " + noun2 +  " to slow down.\n\n" +
//              "3. Your parents will just LOVE it if you play " +
//              song + " on the radio.\n\n4. Make sure to honk " +
//              "your horn when you see " +  verb +  " on a street sign.";

  
//   setText("messageArea", madLib);
// });
