/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function() {

var mainListElements = Array.from(document.querySelectorAll('.liMain'));

for(var i=0; i<mainListElements.length; i++) {

  mainListElements[i].addEventListener('mouseover', function() {

    var secondList = Array.from(document.querySelectorAll('.innerList'));

for(j=0; j<secondList.length; j++) {

     if (secondList[j] != null) {
     secondList[j].classList.add('.nav');
     secondList[j].style.display = 'block';

       } //if i
    } // for j
  }); // 0 over



  mainListElements[i].addEventListener('mouseout', function () {

    var secondList = Array.from(document.querySelectorAll('.innerList'));

      for (var k=0; k<secondList.length; k++) {
             secondList[k].style.display = "none";

         } //for k
       }); // 0 out
  } // for main

 }); // dom
