$("#home-container").ready(function() {
  $(document).on("mouseenter", ".button", function() {
    $(this).stop().animate({
      'background-color': 'rgba(100, 58, 222, 0.8)',
      'border-color': 'transparent'
    }, 200);
    $('h3', this).stop().animate({
      'color': 'rgba(238, 238, 238, 1)'
    }, 200);
  }).on("mouseleave", ".button", function() {
    $(this).stop().animate({
      'background-color': 'transparent',
      'border-color': 'rgba(238, 238, 238, 0.8)'
    }, 400);
    $('h3', this).stop().animate({
      'color': 'rgba(238, 238, 238, 0.8)'
    }, 400);
  });
});
