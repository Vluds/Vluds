var Interface = {
  ajaxContainer: "",
  notificationPopUp: "",
  backgroundContainer: "",

  init: function(){
    this.ajaxContainer = $('#ajax-loader #ajax-container');
    this.notificationPopUp = $('#notification-popup-container');
    this.backgroundContainer = $('#background-container');
  },

  loadModel: function(modelName, argPage){
    if(modelName){

        this.ajaxContainer.stop().animate({'opacity': '0'}, 400).queue(function(){
          if(Engine.fileExists(App.cssPath+modelName+".css")){
            var currentStylesheet = $('link[name='+modelName+']');
            if(currentStylesheet){
              currentStylesheet.remove();
            }
            $('link.default-stylesheet').after('<link name="'+modelName+'" rel="stylesheet" type="text/css" href="'+App.cssPath+modelName+".css"+'"></link>');
          }
          if(Engine.fileExists(App.animationsPath+modelName+".js")){
            var currentAnimation = $('script[name='+modelName+']');
            if(currentStylesheet){
              currentAnimation.remove();
            }
            $('script.default-animation').after('<script name="'+modelName+'" type="text/javascript" src="'+App.animationsPath+modelName+".js"+'"></script>');
          }
          $.post(App.phpClassPath+"app.php", { className: "Engine", functionName: "loadModel", modelName: modelName, argPage: argPage }, function(data){
            if(!data.error){
              Interface.ajaxContainer.html(data.reply).stop().animate({'opacity': '1'}, 600);
              Engine.historyPushState(modelName);
              Interface.resizeAjaxContainer();
            }
          }, "json");
          $(this).dequeue();
        });
    
    }
  },

  resizeAjaxContainer: function(){
    var ajaxResizableContainerHeight = $('.ajax-resizable-container').height();
    $('.ajax-resizable-container').stop().animate({'margin-top': '-'+ajaxResizableContainerHeight/2}, 200);
  },

  showPopUp: function(title, text){
    $('#title-container h3', $('#notification-popup-container')).html(title);
    $('#text-container p', $('#notification-popup-container')).html(text);

    $('#background-container').fadeIn(200).queue(function(){
      $('#notification-popup-container').fadeIn(400);
      $(this).dequeue();
    });
  },

  closePopUp: function(){
    $('#notification-popup-container').fadeOut(200).queue(function(){
      $('#background-container').fadeOut(400);
      $(this).dequeue();
    });
  }
}
