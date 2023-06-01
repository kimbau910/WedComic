//  Switch background
 var isDarkMode = true;
    function changeBackground() {
      var body = document.body;
      var main = document.querySelector('main');
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        body.style.backgroundColor = "black"; 
        body.classList.remove("white-mode");
      } else {
        body.style.backgroundColor = "white";
        body.classList.add("white-mode"); 
      }
    }

// search

const btn = document.querySelector(".search_icon");
const bodyy = document.querySelector("body");

btn.onclick = function(){
  bodyy.classList.toggle("unhide");
}