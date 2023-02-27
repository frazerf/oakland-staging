// Test JavaScript, to ensure Babel is working.

/* ------------------------------------ */
/* Scroll To Functionality */
/* ------------------------------------ */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/* ------------------------------------ */
/* Waypoints */
/* ------------------------------------ */

// Header waypoint
var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    $( "header" ).toggleClass( "active" );
    $( ".scroll-to-top" ).fadeToggle(300);
  }
})

// About waypoint
var waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: function() {
    $( "#about" ).addClass( "fader" );
  },
  offset: '50%' 
})

// Services waypoint
var waypoint = new Waypoint({
  element: document.getElementById('services'),
  handler: function() {
    $( "#services" ).addClass( "fader" );
  },
  offset: '50%' 
})

// Clients waypoint
var waypoint = new Waypoint({
  element: document.getElementById('clients'),
  handler: function() {
    $( "#clients" ).addClass( "fader" );
  },
  offset: '50%' 
})

// Contact waypoint
var waypoint = new Waypoint({
  element: document.getElementById('contact'),
  handler: function() {
    $( "#contact" ).addClass( "fader" );
  },
  offset: '50%' 
})
/* ------------------------------------ */
/* Accordion */
/* ------------------------------------ */

$('.head').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('.arrow').toggleClass('arrow-animate');
  $(this).parent().find('.content').slideToggle(280);
});

document.getElementById("year").innerHTML = new Date().getFullYear();