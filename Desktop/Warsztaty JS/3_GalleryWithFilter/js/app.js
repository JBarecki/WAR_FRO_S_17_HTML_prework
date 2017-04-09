/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function() {

var allImages = Array.from(document.querySelectorAll('img'));
var hideButton = document.getElementById('hideButton');
var showButton = document.getElementById('showButton');
var tagInput = document.getElementById('tagInput');


showButton.addEventListener('click', function() {

for(var i =0; i<allImages.length; i++) {
       var inputValue = tagInput.value;

      if(allImages[i].dataset.tag.indexOf(inputValue) > 0) {
         allImages[i].classList.add('invisible');


      } // if
    tagInput.value = "";

    } // for i
}); // funkcja 1 dla showButton


hideButton.addEventListener('click', function() {

  for(var i =0; i<allImages.length; i++) {

      var inputValue = tagInput.value;
        console.log(inputValue);
        tagInput.value = "";

    } //for i 2

}); // funkcja 1 dla hideButton









 }); //domcontent
