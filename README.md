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

## 🙌 Credits

- Built as part of Code.org CSP curriculum

- Extended with vanilla JavaScript & Bootstrap styling

