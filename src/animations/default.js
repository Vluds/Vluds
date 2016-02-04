$(document).ready(function() {
  $(document).on("mouseenter", ".button", function() {
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.83)',
      'border-color': 'transparent'
    }, 200);
    $('h3', this).stop().animate({
      'color': 'rgba(41, 212, 186, 1)'
    }, 200);
  }).on("mouseleave", ".button", function() {
    $(this).stop().animate({
      'background-color': 'transparent',
      'border-color': 'rgba(255, 255, 255, 0.9)'
    }, 400);
    $('h3', this).stop().animate({
      'color': 'rgba(255, 255, 255, 0.9)'
    }, 400);
  }).on("click", ".button", function() {
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 1)',
      'border-color': 'transparent'
    }, 100).animate({
      'background-color': 'rgba(255, 255, 255, 0.83)',
      'border-color': 'transparent'
    }, 400);
  });


});
