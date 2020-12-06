var element = document.getElementById("big-small");
$( document ).ready(function() {
	element.classList.add("big");
	setTimeout(function() {
  element.classList.add("rotate")
  }, 2000);
  setTimeout(function() {
  element.classList.add("small");}, 3000);
});
