var detailImageSelector = '[data-image-role="target"]';
var detailImageTitle = '[detail-image-role="title"]';
var detailImageTriggle = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  var detailImage = document.querySelector(detailImageSelector);
  var detailTitle = document.querySelector(detailImageTitle);

  detailImage.setAttribute('src', imageUrl);
  detailTitle.textContent = titleText;
};

function imageFromThumb(thumbnail) {
 console.log(thumbnail.getAttribute('data-image-url'));
 return thumbnail.getAttribute('data-image-url');
};

// setDetails(imageFromThumb(firstThumbnail));

function thumbAddEventListener(firstThumbnail) {
  firstThumbnail.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event);
  })
};
var firstThumbnail = document.querySelectorAll(detailImageTriggle);
// var arr = [].slice.call(firstThumbnail);
console.log(firstThumbnail);

function getThumbArray() {
  var firstThumbnail = document.querySelectorAll(detailImageTriggle);
  // var arr = [].slice.call(firstThumbnail);
  console.log(firstThumbnail);
};

getThumbArray();