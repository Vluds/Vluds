$(document).ready(function() {
  var buttonBackgroundColor;
  var buttonBorderColor;
  var inputBackgroundColor;
  var inputBorderColor;
  var headerIconOpacity;
  var userAvatarOpacity;

  var buttonBackgroundColor = $('.button').css('background-color');
  var buttonBorderColor = $('.button').css('border-left-color');

  var inputBackgroundColor = $('input').css('background-color');
  var inputBorderColor = $('input').css('border-left-color');

  $(document).on("mouseenter", ".button", function() {
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

    var redirectValue = $(this).attr("href");
    if(redirectValue !== null){
      Interface.loadTemplate(redirectValue);
    }
  });

  $(document).on("focusin", "input", function() {
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

  $(document).on("mouseenter", "#header-icon", function() {
    headerIconOpacity = $(this).css('opacity');
    $(this).stop().animate({
      'opacity': '1'
    }, 400);
  }).on("mouseleave", "#header-icon", function() {
    $(this).stop().animate({
      'opacity': headerIconOpacity
    }, 400);
  });

  $(document).on("mouseenter", ".user-avatar img", function() {
    userAvatarOpacity = $(this).css('opacity');
    $(this).stop().animate({
      'opacity': '1'
    }, 400);
  }).on("mouseleave", ".user-avatar img", function() {
    $(this).stop().animate({
      'opacity': userAvatarOpacity
    }, 400);
  });
});
