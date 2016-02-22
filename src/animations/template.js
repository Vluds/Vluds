$(document).ready(function() {
  var toolBoxUlLi = '#tool-box ul li';

  $(document).on("mouseenter", toolBoxUlLi, function() {
    $(this).parent().find('ul').slideDown(200);
  }).on("mouseleave", "#tool-box ul", function() {
    $(this).find('ul').slideUp(200);
  });

  var toolBoxUlUlLi = '#tool-box ul ul li';
  var liBackgroundColor;

  $(document).on("mouseenter", toolBoxUlUlLi, function() {
    liBackgroundColor = $(this).css('background-color');
    $(this).stop().animate({
      'background-color': 'rgba(255, 255, 255, 0.2)'
    }, 200);
  }).on("mouseleave", toolBoxUlUlLi, function() {
    $(this).stop().animate({
      'background-color': liBackgroundColor
    }, 400);
  });

  $(document).on("click", '#edition-area .edition-block.body > .edition-block', function() {
    if(!$(this).hasClass("selected")){
      $(this).addClass("selected");
    }else{
      $(this).removeClass("selected");
    }
  });
});
