var detailImageSelector = '[data-image-role="target"]';
var detailImageTitle = '[detail-image-role="title"]';
var detailImageTriggle = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  var detailImage = document.querySelector(detailImageSelector);
  var detailTitle = document.querySelector(detailImageTitle);

  detailImage.setAttribute('src', imageUrl);
  console.log(detailImage.setAttribute('src', imageUrl));
  detailTitle.textContent = titleText;
};

detailImageTriggle.on('click', function(){
   alert('run');
});

function takeUrlImage() {

}
setDetails();