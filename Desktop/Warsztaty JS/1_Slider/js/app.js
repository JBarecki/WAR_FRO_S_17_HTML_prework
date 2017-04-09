/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener('DOMContentLoaded', function(){

var nextButton = document.getElementById('nextPicture');
var prevButton = document.getElementById('prevPicture');

var listArray = Array.from(document.querySelectorAll("li"));
var pictureCounter = 0;

var pictureVisalbe = listArray[pictureCounter];
pictureVisalbe.classList.add('visible');



nextButton.addEventListener('click', function(){
console.log('Next Button click!')

listArray[pictureCounter].classList.remove("visible");
  pictureCounter++;

  if(pictureCounter>=6){
      pictureCounter = 0;
    }

  listArray[pictureCounter].classList.add('visible');

});


prevButton.addEventListener('click', function(){
console.log('Prev Button click!')

listArray[pictureCounter].classList.remove("visible");
  pictureCounter--;

  if(pictureCounter<0){
      pictureCounter = 5;
    }

  listArray[pictureCounter].classList.add('visible');

});



//-----
});
//-----
