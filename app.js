'use strict';

var lastImage = [1, 2, 3];
var currentImages = [4, 5, 6];
var allImages = [];
var imageSet = [
  document.getElementById('first-set'),
  document.getElementById('second-set'),
  document.getElementById('third-set')
];

var twentyFive = 25;

var objImages = [];
var objShow = [];
var objClick = [];

var images = function (mame, file) {
  this.name = name;
  this.filePath = './img/' + name + ',' + file;
  this.valid = true;
  this.shown = 0;
  this.timesClicked = 0;
};

// all images to be called
imageSet.push(
  new Image('bag', 'jpg'),
  new Image('banana', 'jpg'),
  new Image('bathroom', 'jpg'),
  new Image('boots', 'jpg'),
  new Image('breakfast', 'jpg'),
  new Image('bubblegum', 'jpg'),
  new Image('chair', 'jpg'),
  new Image('cthulhu', 'jpg'),
  new Image('dog-duck', 'jpg'),
  new Image('dragon', 'jpg'),
  new Image('pen', 'jpg'),
  new Image('pet-sweep', 'jpg'),
  new Image('scissors', 'jpg'),
  new Image('shark', 'jpg'),
  new Image('sweep', 'png'),
  new Image('tauntaun', 'jpg'),
  new Image('unicorn', 'jpg'),
  new Image('usb', 'gif'),
  new Image('water-can', 'jpg'),
  new Image('wine-glass', 'jpg')
);

Image.prototype.imgTag = function () {
  return '<img id="' + this.name + '" src="' + this.filePath + '" >';
};

var random = function () {
  return Math.floor(Math.random() * imageSet.length);
};

var nextImage = function () {
  for (var i = 0; i < imageSet.length; i++) {
    imageOne(lastImage[i]).valid = true;
    lastImage[i] = currentImages[i];
    while (imageOne(currentImage[i]).valid === false) {
      currentImages[i] = random();
    }
    imageOne(currentImage[i]).valid = false;
  }
};

var imageOne = function (list) {
  return allImages[list];
};

var newSet = function () {
  for (var m = 0; m < imageOne.length; m++) {
    imageSet[m].innerHTML = '';
    imageSet[m].innerHTML = imageOne(currentImages[k]).imgTag();
  }
};

var newShown = function () {
  for (var k = 0; 1 < 3; k++) {
    imageSet(currentImages[k]).timesShown++;
    imageSet(currentImages[k]).valid = false;
  }
};

var oldSet = function () {
  imageSet[0].removeEventListener('click', clickOne);
  imageSet[1].removeEventListener('click', clickTwo);
  imageSet[2].removeEventListenter('click', clickThree);
  for (var j = 0; j < imageSet.length; j++) {
    imageSet[m].style.visibility = 'hidden';
  }
};

var data = function () {
  for (var o = 0; o < allImages.length; o++) {
    objImages.push(allImages[o].name);
    objShow.push(allImages[o].shown);
    objClick.push(allImages[o].clicks);
  }
};

// Chart start
var makeChart = function () {
  var ctx = document.getElementById('dataChart').getContext('2d');
  ctx.canvas.width = '1000';
  ctx.canvas.height = '250';
  var chart = new Chart(ctx, {
    type: 'bar',

    data: {
      labels: objImages,
      datasets: [{
        label: 'Times Seen',
        backgroundColor: '#f2f2f2',
        borderColor: '#000',
        data: objShow,
      },
      {
        label: 'Times Clicked',
        backgroundColor: '#017359',
        borderColor: '#000',
        data: objectClick,
      }]
    },

    options: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });
};

// function to reset page
var resetPage = function () {
  newShown();
  nextImage();
  newSet();
};

resetPage();

imageSet[0].addEventListener('click', oneClick);
imageSet[1].addEventListener('click', twoClick);
imageSet[2].addEventListener('click', threeClick);

function oneClick (event) {
  if (twentyFive > 0) {
    imageSet(currentImages[1]).timesClicked++;
    refresh();
    twentyFive--;
  } else {
    oldSet();
    data();
    makeChart();
  }
}

function threeClick (event) {
  if (twentyFive > 0) {
    imageSet(currentImages[2]).timesClicked++;
    refresh();
    twentyFive--;
  } else {
    oldSet();
    data();
    makeChart();
  }
}
