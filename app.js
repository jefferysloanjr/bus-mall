'use strict';

var lastImage = [1, 2, 3];
var currentImages = [4, 5, 6];

var allImages = [];

var imageSet = [
  document.getElementById('first-set'),
  document.getElementById('second-set'),
  document.getElementById('third-set')
];

var reset = document.getElementById('rst-btn');

var twentyFive = 25;

var objImages = [];
var objShow = [];
var objClick = [];

var Images = function (mame, file) {
  this.name = name;
  this.filePath = './bm-img/' + name + ',' + file;
  this.valid = true;
  this.shown = 0;
  this.timesClicked = 0;
};

<<<<<<< HEAD
// all images to be called
imageSet.push(
  new Images('bag', 'jpg'),
  new Images('banana', 'jpg'),
  new Images('bathroom', 'jpg'),
  new Images('boots', 'jpg'),
  new Images('breakfast', 'jpg'),
  new Images('bubblegum', 'jpg'),
  new Images('chair', 'jpg'),
  new Images('cthulhu', 'jpg'),
  new Images('dog-duck', 'jpg'),
  new Images('dragon', 'jpg'),
  new Images('pen', 'jpg'),
  new Images('pet-sweep', 'jpg'),
  new Images('scissors', 'jpg'),
  new Images('shark', 'jpg'),
  new Images('sweep', 'png'),
  new Images('tauntaun', 'jpg'),
  new Images('unicorn', 'jpg'),
  new Images('usb', 'gif'),
  new Images('water-can', 'jpg'),
  new Images('wine-glass', 'jpg')
);

Images.prototype.imgTag = function () {
  return '<img id="' + this.name + '" src="' + this.filePath + '" >';
};

var random = function () {
  return Math.floor(Math.random() * imageSet.length);
};

// loop for next set of images
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
// end of next image loop

var imageOne = function (list) {
  return imageSet[list];
};

var newSet = function () {
  for (var m = 0; m < imageOne.length; m++) {
    imageSet[m].innerHTML = '';
    imageSet[m].innerHTML = imageOne(currentImages[m]).imgTag();
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
};

=======
// random pic generator
function choosePic() {
  var randomNum = Math.floor(math.random() * allImages.length);
}
// click counter for pictures.
firstSet.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('img src', src);
  console.log('total clicks', counter);
});
>>>>>>> made some changes

// array for data
var data = function () {
  for (var o = 0; o < allImages.length; o++) {
    objImages[o] = localStorage['image name' + o];
    objShow[o] = parseInt(localStorage['image showing' + o]);
    objClick[o] = parseInt(localStorage['image clicked' + o]);
  }
};

// a refresh for the page
var refresh = function () {
  newShown();
  nextImage();
  newSet();
};

// local storage functions

var saveData = function () {
  localStorage.saveCounter = twentyFive;
  for (var saveOne = 0; saveOne < imageSet.length; saveOne++) {
    localStorage['image name' + saveOne] = imageOne(saveOne).name;
    localStorage['image shown' + saveOne] = imageOne(saveOne).imageOne.timesShown;
    localStorage['image click' + saveOne] = imageOne(saveOne).timesClicked;
  }
};

// loading data from local storage
var loadData = function () {
  twentyFive = parseInt(localStorage.savedTwentyFive);
  for (var load = 0; load < imageSet.length; load++)
    imageOne(load).name = localStorage['image name' + load];
  imageOne(load).timesShown = parseInt(localStorage['image shown' + load]);
  imageOne(load).timesClicked = parseInt(localStorage['image clicked' + load]);
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
  localStorage.firstTime = false;
};

makeChart();


var start = function () {
  refresh();
  if (localStorage.savedTwentyFive) {
    loadData();
  }
};

start();

imageSet[0].addEventListener('click', oneClick);
imageSet[1].addEventListener('click', twoClick);
imageSet[2].addEventListener('click', threeClick);
reset.addEventListener('click', resetData);

function oneClick (event) {
  if (twentyFive > 0) {
    imageSet(currentImages[0]).timesClicked++;
    refresh();
    saveData();
    twentyFive--;
  } else {
    oldSet();
    data();
    makeChart();
  }
}

function twoClick (event) {
  if (twentyFive > 0) {
    imageOne(currentImages[1]).timesClicked++;
    refresh();
    saveData();
    twentyFive--;
  } else {
    oldSet();
    data();
    makeChart();
  }
};

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
};

function resetData (event) {
  start();
  twentyFive();
  localStorage.savedTwentyFive = twentyFive;
  imageOne[0].addEventListener('click', oneClick);
  imageOne[1].addEventListener('click', twoClick);
  imageOne[2].addEventListener('click', threeClick);
};
console.log('click', oneClick);
console.log('click', twoClick);
console.log('click', threeClick);
