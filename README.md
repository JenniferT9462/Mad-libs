# Mad Libs! 🎉  

A simple **Mad Lib generator** built as part of a Code.org lesson.  
This project lets users fill in words (nouns, verbs, etc.) to generate a funny story about *learning to drive*.  

---

## 🚗 Project Overview  
This project was inspired by [Code.org CSP Unit 1 Lesson 7 Level 8](https://studio.code.org/courses/csp5-virtual/units/1/lessons/7/levels/8).  

Users enter words into text fields (plural noun, nouns, verb, and a song).  
When they click **Next**, their words are inserted into a pre-written story template.  

They can then:
- Read their personalized Mad Lib story  
- Click **Play Again** to reset the inputs and create a new one  

---

## 🛠️ Tech Stack  
### HTML/JS Version  
- **HTML5** – structure of the app  
- **CSS / Bootstrap 5** – layout & styling  
- **Vanilla JavaScript** – event handling, input collection, and story generation  

### Code.org App Lab Version  
- **App Lab JavaScript** – using `onEvent`, `getText`, and `setText`  
- Built directly in the [Code.org App Lab](https://code.org/educate/applab) environment  

---

## 📂 File Structure (HTML/JS Version)  
    madlib-app/
    │
    ├── index.html # Main page with inputs and story display
    ├── index.js # Handles input collection and story generation
    ├── screen2.js # Handles reset / play again functionality
    ├── helpers.js # Helper functions (getValue, setText, etc.)
    ├── style.css # Custom styles
    └── README.md # Project documentation


---

## 🚀 How to Run  

### Option 1: Run Locally (HTML/JS)  
1. Clone or download this repository  
2. Open `index.html` in your browser  
3. Enter your words and click **Next**  
4. Enjoy your funny Mad Lib story!  
5. Click **Play Again** to reset and try different words  

### Option 2: Run in Code.org App Lab  
1. Open [Code.org App Lab](https://studio.code.org/projects/applab)  
2. Create a **new App Lab project**  
3. Add **input elements** (`Text Input` and `Button`) for:  
   - Plural Noun  
   - Noun (x2)  
   - Song  
   - Verb  
   - Next button  
   - Text area for story output  
   - Play Again button  
4. Copy the **Code.org version of the JavaScript**:  

```javascript
// Next button click
onEvent("nextBtn", "click", function () {
  var pluralNoun = getText("pNounInput");
  var noun1 = getText("nounInput1");
  var noun2 = getText("nounInput2");
  var song = getText("songInput");
  var verb = getText("verbInput");

  var madLib =
    "Learning to drive is a tricky process. There " +
    "are a few rules you must follow.\n\n" +
    "1. Keep two " + pluralNoun +
    " on the steering wheel at all times.\n\n" +
    "2. Step on the " + noun1 +
    " to speed up and the " + noun2 +
    " to slow down.\n\n3. Your parents will just LOVE it if you play " +
    song + " on the radio.\n\n" +
    "4. Make sure to honk your horn when you see " +
    verb + " on a street sign.";

  setText("displayOutput", madLib);
  setScreen("outputScreen");
});

// Play again button
onEvent("playBtn", "click", function () {
  setText("pNounInput", "");
  setText("nounInput1", "");
  setText("nounInput2", "");
  setText("songInput", "");
  setText("verbInput", "");
  setScreen("inputScreen");
});
```
---

## ✨ Features

- Input fields for Plural Noun, Noun (x2), Song, and Verb

- Generates a complete story about learning to drive

- Toggle between Input Screen and Story Screen

- Option to reset and play again

- Works in both Code.org App Lab and local HTML/JS environment

---

## 📸 Demo (Example Story)

- **Inputs:**

    * Plural Noun: bananas

    * Noun 1: pedal

    * Noun 2: brick

    * Song: Baby Shark

    * Verb: dance

- **Output:**
Learning to drive is a tricky process. There are a few rules you must follow.

    1. Keep two bananas on the steering wheel at all times.

    2. Step on the pedal to speed up and the brick to slow down.

    3. Your parents will just LOVE it if you play Baby Shark on the radio.

    4. Make sure to honk your horn when you see dance on a street sign.

---

## Refactoring

Refactoring the Mad Libs app from Code.org to standard JavaScript involves updating the syntax for event handling, getting and setting element values, and managing the display. The core logic of creating the Mad Lib string remains the same, but the methods for interacting with the web page change.

### 1. Update Event Listeners
Code.org's `onEvent` function is a simplified way to attach event handlers. In standard JavaScript, you use the addEventListener method on an element. You first get a reference to the element and then call addEventListener on it.

- Code.org: `onEvent("nextBtn", "click", function () { ... });`

- JavaScript:
  ```js
  const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
      //...
  });
  ```
You'll do the same for the "playBtn" to reset the game. This approach is more flexible and is the standard for modern web development.

### 2. Get Input Values

Code.org's `getValue()` function simplifies getting the text from an input field. In standard JavaScript, you must first get the element using document.getElementById() and then access its value property.

- Code.org: `var pluralNoun = getValue("pNounInput");`

- JavaScript: `const pluralNoun = document.getElementById("pNounInput").value;`

This change is applied to all input fields (pNounInput, nounInput1, nounInput2, etc.).

### 3. Update Text Content

Similarly, Code.org's `setText()` is a convenience function for updating an element's text. In standard JavaScript, you get a reference to the element and then set its textContent or innerText property. textContent is generally preferred as it's more performant and less prone to unexpected behavior.

- Code.org: `setText("displayOutput", madLib);`

- JavaScript: 
  ```js
  const displayOutput = document.getElementById("displayOutput"); 
  displayOutput.textContent = madLib;
  ```

For clearing the input fields, you'd set the value property to an empty string ('') rather than textContent. 

- Corrected JavaScript:
  ```js
  const playBtn = document.getElementById("playBtn");
  playBtn.addEventListener("click", () => {
    document.getElementById("pNounInput").value = "";
    document.getElementById("nounInput1").value = "";
    // ... and so on for the other inputs
    });
  ```
### 4. Manage Element Visibility

Both the Code.org and standard JavaScript versions use the classList property to manage the visibility of elements by adding or removing CSS classes. This is a common and effective technique that remains consistent between the two versions. The syntax for this part of the code is the same.

- `document.getElementById("madLibInputs").classList.add("d-none");`

- `document.getElementById("madLibOutput").classList.remove("d-none");`

The d-none class is likely a utility class (like those found in frameworks like Bootstrap) that sets display: none;, effectively hiding the element.


## 🙌 Credits

- Built as part of Code.org CSP curriculum

- Extended with vanilla JavaScript & Bootstrap styling

