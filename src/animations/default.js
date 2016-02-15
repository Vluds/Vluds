$(document).ready(function() {
  $(document).on("mouseenter", ".button", function() {
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.3)',
      'border-color': 'transparent'
    }, 200);
  }).on("mouseleave", ".button", function() {
    $(this).stop().animate({
      'background-color': 'transparent',
      'border-color': 'rgba(255, 255, 255, 0.9)'
    }, 400);
  }).on("click", ".button", function() {
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.6)',
      'border-color': 'transparent'
    }, 100).animate({
      'background-color': 'rgba(255, 255, 255, 0.3)',
      'border-color': 'transparent'
    }, 400);
  });

  $(document).on("focusin", "input", function() {
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.3)',
      'border-color': 'transparent'
    }, 200);
  }).on("focusout", "input", function() {
    $(this).stop().animate({
      'background-color': 'transparent',
      'border-color': 'rgba(255, 255, 255, 0.9)'
    }, 400);
  });
});
