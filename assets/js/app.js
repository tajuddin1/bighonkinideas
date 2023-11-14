function myFunction(x) {
  x.classList.toggle("change");

  var menu = document.getElementById('mobileMenuContainer');
  var body = document.getElementById('body');
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');

  menu.classList.toggle("open");
  body.classList.toggle("hidden");
  bar1.classList.toggle("white");
  bar2.classList.toggle("white");
}