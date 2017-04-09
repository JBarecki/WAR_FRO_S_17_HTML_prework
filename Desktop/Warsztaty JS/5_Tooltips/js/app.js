/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function() {


var tooltips = Array.from(document.querySelectorAll('.tooltip'));
var tooltip1 = tooltips[0];
var tooltip2 = tooltips[1];
var tooltip3 = tooltips[2];

var text = tooltip1.datset;

var span1 = document.createElement('span');
span1.classList.add("tooltipText");
span1.innerText = tooltip1.dataset.text;

var span2 = document.createElement('span');
span2.classList.add("tooltipText");
span2.innerText = tooltip2.dataset.text;

var span3 = document.createElement('span');
span3.classList.add("tooltipText");
span3.innerText = tooltip3.dataset.text;

tooltip1.addEventListener('mouseover', function(){
  tooltip1.appendChild(span1);

}); // t1 over


tooltip1.addEventListener('mouseout', function(){
  tooltip1.removeChild(span1);

}); // t1 out


tooltip2.addEventListener('mouseover', function(){
  tooltip2.appendChild(span2);

}); // t2 over


tooltip2.addEventListener('mouseout', function(){
  tooltip2.removeChild(span2);

}); // t2 out

tooltip3.addEventListener('mouseover', function(){
  tooltip3.appendChild(span3);

}); // t3 over


tooltip3.addEventListener('mouseout', function(){
  tooltip3.removeChild(span3);

}); // t3 out


 });  // dom
