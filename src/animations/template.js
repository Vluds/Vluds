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

  $(document).on("click", '#edition-area .edition-layout', function() {
    if(!$(this).hasClass("selected")){
      editionBoxSelect($(this));
    }else{
      editionBoxUnselect($(this));
    }
  });

  function editionBoxSelect(div){
    div.addClass("selected");

    var divId = div.attr('class');
    $('#tool-box #options-box #options-box-title p').html(divId);

    var argArray = new Array (['argName', 'argValue'],['argName', 'argValue']);
    var divHeight;
    var divWidth;
    if(divHeight = div.css('height')){
      argArray[0]['argName'] = 'Height';
      argArray[0]['argValue'] = divHeight;
    }
    if(divWidth = div.css('width')){
      argArray[1]['argName'] = 'Width';
      argArray[1]['argValue'] = divWidth;
    }

    $('#tool-box #options-box #options-box-arguments ul').html('');

    var argCount = 0;
    while(argCount < argArray.length){
      $('#tool-box #options-box #options-box-arguments ul').append('<li><span class="first_arg"><p>'+argArray[argCount]['argName']+' :</p></span><input type="text" value="'+argArray[argCount]['argValue']+'"/></li>');
      argCount++;
    }
  }

  function editionBoxUnselect(div){
    $('#tool-box #options-box #options-box-title p').html('None selected');
    $('#tool-box #options-box #options-box-arguments ul').html('');
    div.removeClass("selected");
  }
});
