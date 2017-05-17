
document.addEventListener('DOMContentLoaded', function(){

// Menu elements
let home = document.querySelector(".home");
var contact = document.querySelector(".contact");
let aboutUs = document.querySelector(".aboutUs");
let gallery = document.querySelector(".gallery");
let seeds = document.querySelector(".seeds");
let growing = document.querySelector(".growing");
let peppers = document.querySelector(".peppers");

//Main page
var mainHeader = document.querySelector('.headerClass');
var mainSectionMenu = document.querySelector('section');
var mainFooter = document.querySelector('.footerContainer');

//About Us
var aboutUsHeader = document.querySelector(".aboutUsHeader");
var aboutUsSection = document.querySelector(".aboutUsSection");
var aboutUsFooter = document.querySelector(".aboutUsFooter");
var aboutUsFooterBack = document.querySelector(".aboutUsFooterBack");

// main In/Out functions
function mainPageIn() {
  mainHeader.classList.remove("headerOut");
  mainHeader.classList.add("headerIn");
  mainHeader.classList.toggle("hide");

  mainSectionMenu.classList.remove("sectionOut");
  mainSectionMenu.classList.add("sectionIn");
  mainSectionMenu.classList.toggle("hide");
     home.classList.add("sectionIn");
     contact.classList.add("contactIn");
     gallery.classList.add("galleryIn");
     growing.classList.add("growingIn");
     seeds.classList.add("seedsIn");
     peppers.classList.add("peppersIn");
     aboutUs.classList.add("aboutUsIn");

     mainFooter.classList.remove("FooterOut");
     mainFooter.classList.add("FooterIn");
     mainFooter.classList.toggle("hide");
}

function mainPageOut() {
  mainHeader.classList.remove("headerIn");
  mainHeader.classList.add("headerOut");
  setTimeout( function(){
    mainHeader.classList.add("hide");
      }, 1100);

  mainSectionMenu.classList.add("sectionOut");
    setTimeout( function(){
      mainSectionMenu.classList.add("hide");
        }, 1100);

  mainFooter.classList.remove("footerIn");
  mainFooter.classList.add("footerOut");
    setTimeout( function(){
      mainFooter.classList.add("hide");
        }, 1100);
}


//Events
aboutUs.addEventListener("click", function(){
  mainPageOut();

    aboutUsHeader.classList.remove("aboutUsHeaderOut");
    aboutUsHeader.classList.add("aboutUsHeaderIn");
    aboutUsHeader.classList.toggle("hide");

    aboutUsSection.classList.remove("aboutUsSectionOut");
    aboutUsSection.classList.add("aboutUsSectionIn");
    aboutUsSection.classList.toggle("hide");

    aboutUsFooter.classList.remove("aboutUsFooterOut");
    aboutUsFooter.classList.add("aboutUsFooterIn");
    aboutUsFooter.classList.toggle("hide");

   });

aboutUsFooterBack.addEventListener("click", function() {
   console.log("click");

  aboutUsHeader.classList.remove("aboutUsHeaderIn");
  aboutUsHeader.classList.add("aboutUsHeaderOut");
   setTimeout( function(){
     aboutUsHeader.classList.add("hide");
       }, 1100);

  aboutUsSection.classList.remove("aboutUsSectionOn");
  aboutUsSection.classList.add("aboutUsSectionOut");
  setTimeout( function(){
    aboutUsSection.classList.add("hide");
      }, 1100);

      aboutUsFooter.classList.remove("aboutUsFooterOn");
      aboutUsFooter.classList.add("aboutUsFooterOut");
      setTimeout( function(){
        aboutUsFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1200);
});







}); // DOMContentLoaded
