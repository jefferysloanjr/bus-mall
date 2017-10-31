'use strict';

var counter = 0;

var picOne = document.getElementById('toy');
var picTwo = document.getElementById('bubblegum');
var picThree = document.getElementById('shark');

function Tracker(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
}

picOne.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('img src:', src);
  console.log('toy total clicks', counter);
});

var images = [];

picTwo.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log(images);
});

picThree.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log('shark total clicks', counter);
});
