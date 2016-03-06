  initDragAndDrop();

  var toolBoxUlLi = '#tool-box ul li';

  $(document).on("mouseenter", toolBoxUlLi, function() {
    $(this).parent().find('ul').stop().slideDown(200);
  }).on("mouseleave", "#tool-box ul", function() {
    $(this).find('ul').stop().slideUp(200);
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
    $('#options-box #options-box-title p').html(divId);

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

    $('#options-box #options-box-arguments ul').html('');

    var argCount = 0;
    while(argCount < argArray.length){
      $('#options-box #options-box-arguments ul').append('<li><span class="first_arg"><p>'+argArray[argCount]['argName']+' :</p></span><input type="text" value="'+argArray[argCount]['argValue']+'"/></li>');
      argCount++;
    }
  }

  function editionBoxUnselect(div){
    $('#options-box #options-box-title p').html('None selected');
    $('#options-box #options-box-arguments ul').html('');
    div.removeClass("selected");
  }

  function initDragAndDrop(){
    $( "#edition-area" ).droppable({
      accept: '#tool-box ul ul li',
      drop: function(event, ui) {
         ui.draggable.data('dropped', true);
         ui.draggable.data('droppedDiv', $(this).attr('name'));
      }
    });

    $( ".edition-layout" ).droppable({
      accept: '#tool-box ul ul li',
      drop: function(event, ui) {
         ui.draggable.data('dropped', true);
         ui.draggable.data('droppedDiv', $(this).attr('name'));
      }
    });

    $('#tool-box ul ul li').draggable({
        revert: true,
        start: function(event, ui) {
            ui.helper.data('dropped', false);
        },
        stop: function(event, ui) {
            console.log('stop: dropped=' + ui.helper.data('dropped'));
            var droppedDiv = ui.helper.data('droppedDiv');
            var draggableName = ui.helper.attr('name');

            $(document).find('[name="'+droppedDiv+'"]').append('<div class="'+draggableName+'" name="'+draggableName+'"><h1>Some Text</h1></div>');

        }
    });
  }
