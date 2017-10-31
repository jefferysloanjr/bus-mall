'use strict';

// images use to be selected
var allImages = ['bag.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var firstSet = document.getElementById('first-set');
var secondSet = document.getElementById('second-set');
var thirdSet = document.getElementById('third-set');

function Tracker(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
}

function choosePic() {
  var randomNum = Math.floor(math.random() * allImages.length);
}

firstSet.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('img src', src);
  console.log('total clicks', counter);
});

var images = [];

secondSet.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log(images);
});

thirdSet.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log('shark total clicks', counter);
});
