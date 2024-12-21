

//--------------- fadein with time------------------------------------//

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('1000');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    
    });

});
//--------------- fadein without time------------------------------------//

$(document).ready(function(){
    $(".showme").fadeIn("slow");
});
       



 
    

//--------------- fadein without time------------------------------------//



$(document).ready(function() {
    
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.ddiv').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({ 'left': '90px',},1000);
                    
            }
            
        }); 
    
    });
    
});



///////////////////////button Scroll////////////////////


$("#myBtn").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});


/*/////////////////////button go////////////////////

/*window.onscroll = function() {scrollFunctio()};

function scrollFunctio() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("cap").style.opacity = .5;
        
    }else {
        document.getElementById("cap").style.opacity = 1;
         
    }

}*/

// When the user clicks on the button, scroll to the top of the document


///////////////////////filter////////////////////

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}







// When the user clicks on the button, scroll to the element of the document


$("[data-target=nav]").click(function() {

  $('html, body').stop().animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);

});



/*======== wow.js========*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


/*==go to top when you do refreash for page===*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}