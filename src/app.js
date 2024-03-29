/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("executeb").addEventListener(
  "click",

  (window.onload = function() {
    //write your code here
    let who = ["My friend", "My dog", "My uncle", "My friend", " I am"];
    let action = [
      "is listening to",
      "drank",
      "is traveling to",
      "reads",
      "working on"
    ];
    let what = [
      "my juice",
      "all the food",
      "music",
      "Canada",
      "a book",
      "my project"
    ];
    let when = [
      "Today",
      "Tomorrow",
      "Yesterday",
      "last month",
      "Now",
      "Next year",
      "This morning",
      "Next week",
      "This weekend",
      "To night"
    ];
    let tColor = [
      "black",
      "blue",
      "red",
      "brown",
      "firebrick3",
      "rgb(0, 149, 255)"
    ];
    let dColor = [
      "honeydew",
      "dark slate grey",
      "lavender",
      "BlanchedAlmond",
      "gainsboro",
      "LightSlateBlue",
      "wheat3",
      "honeydew1",
      "thistle3",
      "white"
    ];
    let image = [
      "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",
      "https://www.everland-petfood.com/wp-content/uploads/AdobeStock_203576107.jpeg"
    ];
    function ranNum(num) {
      return Math.floor(Math.random() * num);
    }

    let excuseGEn =
      who[ranNum(who.length)] +
      " " +
      action[ranNum(action.length)] +
      " " +
      what[ranNum(what.length)] +
      " " +
      when[ranNum(when.length)] +
      ".";

    const text = document.querySelector(".text");
    text.innerHTML = excuseGEn;

    //change background color
    let divColor = dColor[ranNum(dColor.length)];
    document.getElementById("body").style.backgroundColor = divColor;
    //change border color

    //change text color
    let textColor = tColor[ranNum(tColor.length)];
    document.getElementById("body").style.color = textColor;
  })
);
