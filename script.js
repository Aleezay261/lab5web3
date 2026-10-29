var el = document.getElementById("typed-name");

if (el) {
  var word = "Aleezay";
  var i = 0;
  el.textContent = "";

  function type() {
    if (i < word.length) {
      i++;
      el.textContent = word.slice(0, i);
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 10000);
    }
  }

  function erase() {
    if (i > 0) {
      i--;
      el.textContent = word.slice(0, i);
      setTimeout(erase, 80);
    } else {
      setTimeout(type, 600);
    }
  }

  setTimeout(type, 400);
}