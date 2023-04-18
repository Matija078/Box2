/*variabler for poeng*/
var poeng = 0;
var poengtrekk = 0;
var trekkPoeng = true;

/* setInterva for poengtelling*/
setInterval(function () {
  poeng += 1;
  if (trekkPoeng && poeng > 0) {
    poeng -= poengtrekk;
  }
  document.getElementById('poengtelling').innerHTML = 'Poeng: ' + poeng;
}, 1000);

/* variabler for firekantene */
var firkant1 = document.getElementById('firkant1');
var firkant2 = document.getElementById('firkant2');
var maxX = window.innerWidth - firkant2.offsetWidth;
var maxY = window.innerHeight - firkant2.offsetHeight;
var posX = firkant2.offsetLeft;
var posY = firkant2.offsetTop;
var moveX = 1;
var moveY = 1;

/*Bevegelse function for kvadrat */
function moveSquare() {
  posX += moveX;
  posY += moveY;
  if (posX > maxX || posX < 0) {
    moveX *= -1;
  }
  if (posY > maxY || posY < 0) {
    moveY *= -1;
  }
  firkant2.style.left = posX + 'px';
  firkant2.style.top = posY + 'px';

  var rect1 = firkant1.getBoundingClientRect();
  var rect2 = firkant2.getBoundingClientRect();
  var avstand = Math.sqrt(
    Math.pow(rect1.left - rect2.left, 2) + Math.pow(rect1.top - rect2.top, 2)
  );
  if (avstand < 100) {
    if (poeng > 0) {
      poengtrekk = 10;
    }
  } else {
    poengtrekk = 0;
  }
}

/*setInterval function for bevegelse av kvadrat */
setInterval(function () {
  moveSquare();
}, 10);

/*function for å beveg firekant med w,s,a,d*/

document.addEventListener('keydown', function (event) {
  var rect1 = firkant1.getBoundingClientRect();
  var maxX = window.innerWidth - firkant1.offsetWidth;
  var maxY = window.innerHeight - firkant1.offsetHeight;

  if (event.key == 'w') {
    firkant1.style.top = Math.max(rect1.top - 10, 0) + 'px';
  } else if (event.key == 's') {
    firkant1.style.top = Math.min(rect1.top + 10, maxY) + 'px';
  } else if (event.key == 'a') {
    firkant1.style.left = Math.max(rect1.left - 10, 0) + 'px';
  } else if (event.key == 'd') {
    firkant1.style.left = Math.min(rect1.left + 10, maxX) + 'px';
  }

  // Sjekk om firkant1 går utenfor skjermen, og juster hvis nødvendig
  rect1 = firkant1.getBoundingClientRect();
  if (rect1.left < 0) {
    firkant1.style.left = '0px';
  } else if (rect1.right > window.innerWidth) {
    firkant1.style.left = window.innerWidth - firkant1.offsetWidth + 'px';
  }
  if (rect1.top < 0) {
    firkant1.style.top = '0px';
  } else if (rect1.bottom > window.innerHeight) {
    firkant1.style.top = window.innerHeight - firkant1.offsetHeight + 'px';
  }
});
