/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function(){


//---------- element html------------------

var div = document.createElement("div");
var image = document.createElement("img");
var button = document.createElement("button");


div.classList.add("fullScreen");
image.setAttribute('src', document.querySelector('img').getAttribute('src'));
button.classList.add('close');
button.innerText = 'Close';

div.appendChild(image);
div.appendChild(button);


//------------------------------

var li = Array.from(document.querySelectorAll("li"));
var body = document.querySelector('body');

for(var i=0; i<li.length; i++) {
    li[i].addEventListener("click", function funkcja1(){

console.log(this.querySelector('img').getAttribute('src'));

    body.appendChild(div);

}); //funkcja1
} // for






//-------
 });
