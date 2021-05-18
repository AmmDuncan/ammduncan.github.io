function load_js() {
  var body = document.getElementsByTagName("body")[0];
  var script = document.createElement("script");
  script.setAttribute("id", "toRemove");
  script.src = "./js/masonry.js";
  body.append(script);
  //   console.log("script added");
}
let curMasonryScript;
let counter = 1;
let reloadInterval = setInterval(() => {
  if (counter === 15) {
    clearInterval(reloadInterval);
  }
  curMasonryScript = document.querySelector("#toRemove");
  curMasonryScript.parentNode.removeChild(curMasonryScript);
  //   console.log("script removed");
  load_js();
  counter++;
}, 500);
