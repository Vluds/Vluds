$(document).ready(function() {
  var buttonBackgroundColor;
  var buttonBorderColor;
  var inputBackgroundColor;
  var inputBorderColor;

  $(document).on("mouseenter", ".button", function() {
    buttonBackgroundColor = $(this).css('background-color');
    buttonBorderColor = $(this).css('border-left-color');
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.3)',
      'border-color': 'transparent'
    }, 200);
  }).on("mouseleave", ".button", function() {
    $(this).stop().animate({
      'background-color': buttonBackgroundColor,
      'border-color': buttonBorderColor
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
    inputBackgroundColor = $(this).css('background-color');
    inputBorderColor = $(this).css('border-left-color');
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.3)',
      'border-color': 'transparent'
    }, 200);
  }).on("focusout", "input", function() {
    $(this).stop().animate({
      'background-color': inputBackgroundColor,
      'border-color': inputBorderColor
    }, 400);
  });
});
