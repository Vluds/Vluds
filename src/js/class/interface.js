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
    var headerHeight = $('header').height();

    var ajaxResizableContainerHeight = $('.ajax-resizable-container').height();
    $('.ajax-resizable-container').stop().animate({'margin-top': '-'+(ajaxResizableContainerHeight/2)-headerHeight}, 200);

    var notificationPopUpHeight = $('#notification-popup-container').height();
    var notificationPopUpWidth = $('#notification-popup-container').width();
    $('#notification-popup-container').stop().animate({'margin-top': '-'+(notificationPopUpHeight/2)}, 200).animate({'margin-left': '-'+(notificationPopUpWidth/2)}, 200);
  },

  showPopUp: function(title, text){
    $('#title-container h3', $('#notification-popup-container')).html(title);
    $('#text-container p', $('#notification-popup-container')).html(text);

    $('#background-container').fadeIn(200);
    $('#notification-popup-container').fadeIn(400, function(){
      resizeAjaxContainer();
    });
  },

  closePopUp: function(){
    $('#notification-popup-container').fadeOut(200, function(){
      $('#background-container').fadeOut(400);
    });
  },

  showNavBar: function(){
    var navBarWidth = $('#nav-bar').css('max-width');
    $('#nav-bar').animate({'width': navBarWidth}, 250);
    $('#ajax-loader').animate({'padding-right': navBarWidth}, 250);
  },

  closeNavBar: function(){
    $('#nav-bar').animate({'width': 0}, 300);
    $('#ajax-loader').animate({'padding-right': 0}, 300);
  }
}
