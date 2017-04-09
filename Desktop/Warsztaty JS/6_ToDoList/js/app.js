/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener("DOMContentLoaded", function() {

// ************ zmnienne  *********************

var ul = document.querySelector("ul");
var li = document.createElement('li');
var h1 = document.createElement('h1');
var deleteButton = document.createElement('button');
var completeButton = document.createElement('button');
var addButon = document.getElementById("addTaskButton");
var removeFinishedButton = document.getElementById("removeFinishedTasksButton");
var input = document.getElementById("taskInput");
var body = document.querySelector('body');



// ******* Li element ************************

deleteButton.innerText = "Delete";
completeButton.innerText = "Complete";

li.appendChild(h1);
li.appendChild(deleteButton);
li.appendChild(completeButton);


// ******* Div licznik  ************************

var licznik = document.createElement('div');
licznik.innerText = 0;

// *********** Eventy ************************

addButon.addEventListener('click', function(e){
   ul.appendChild(li);
   h1.innerText = input.value;
   input.value = "";
   body.appendChild(licznik);
   licznik.innerText++;

}); // addbutton click

completeButton.addEventListener('click', function(){
   li.classList.toggle('complete');

   if(li.hasAttribute('class')) {
       licznik.innerText--;
   }

}); // complbutton click

deleteButton.addEventListener('click', function(){
   ul.removeChild(li);

}); // complbutton click


removeFinishedButton.addEventListener('click', function(){
  if(li.hasAttribute('class')) {
     ul.removeChild(li);
  }

}); //removebutton



}); // dom
