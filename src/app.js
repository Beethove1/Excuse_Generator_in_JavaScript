/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My friend", "My dog", "My uncle", "The driver"];
  let action = ["ate", "drunk", "fly"];
  let what = ["my food", "Juice", "plane"];
  let when = ["Today", "last month", "Yesterday"];
  let image = [];
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
    when[ranNum(when.length)];
  console.log(excuseGEn);
  const text = document.querySelector(".text");
  text.innerHTML = excuseGEn;
};
