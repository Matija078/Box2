/*variabler for poeng*/
let poeng = 0;
let poengtrekk = 0;
let trekkPoeng = true;

/* setInterva for poengtelling*/
setInterval(function () {
  poeng += 1;
  if (trekkPoeng && poeng > 0) {
    poeng -= poengtrekk;
  }
  document.getElementById('poengtelling').innerHTML = 'Poeng: ' + poeng;
}, 1000);

/* variabler for firekantene */
let firkant1 = document.getElementById('firkant1');
let firkant2 = document.getElementById('firkant2');
let maxX = window.innerWidth - firkant2.offsetWidth;
let maxY = window.innerHeight - firkant2.offsetHeight;
let posX = firkant2.offsetLeft;
let posY = firkant2.offsetTop;
let moveX = 1;
let moveY = 1;

/*Bevegelse function for kvadratene */
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

  let rect1 = firkant1.getBoundingClientRect();
  let rect2 = firkant2.getBoundingClientRect();
  let avstand = Math.sqrt(
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
  let rect1 = firkant1.getBoundingClientRect();
  let maxX = window.innerWidth - firkant1.offsetWidth;
  let maxY = window.innerHeight - firkant1.offsetHeight;

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
