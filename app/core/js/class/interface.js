var Interface = {
  ajaxContainer: "",
  notificationPopUp: "",
  backgroundContainer: "",

  init: function(){
    this.ajaxContainer = $('#ajax-loader #ajax-container');
    this.notificationPopUp = $('#notification-popup-container');
    this.backgroundContainer = $('#background-container');
  },

  loadTemplate: function(templateName, argPage){
    if(templateName){
      this.ajaxContainer.stop().animate({'opacity': '0'}, 400).queue(function(){
        if(Engine.fileExists(App.rootPath+App.viewPath+templateName+"/"+templateName+".css")){
          var currentStylesheet = $('link[name='+templateName+']');
          if(currentStylesheet){
            currentStylesheet.remove();
          }
          $('link.default-stylesheet').after('<link name="'+templateName+'" rel="stylesheet" type="text/css" href="'+App.rootPath+App.viewPath+templateName+"/"+templateName+".css"+'"></link>');
        }
        if(Engine.fileExists(App.rootPath+App.viewPath+templateName+"/"+templateName+".js")){
          var currentAnimation = $('script[name='+templateName+']');
          if(currentStylesheet){
            currentAnimation.remove();
          }
          $('script.default-animation').after('<script name="'+templateName+'" type="text/javascript" src="'+App.rootPath+App.viewPath+templateName+"/"+templateName+".js"+'"></script>');
        }
        $.post(App.rootPath+App.phpClassPath+"app.php", { className: "Engine", functionName: "loadModel", templateName: templateName, argPage: argPage }, function(data){
          if(!data.error){
            Interface.ajaxContainer.html(data.reply).stop().animate({'opacity': '1'}, 600);
            Engine.historyPushState(templateName);
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
      Interface.resizeAjaxContainer();
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
    $('#nav-bar .nav-bar-button#open-nav-bar').fadeOut(100);
    $('#nav-bar .nav-bar-button#close-nav-bar').fadeIn(100);
  },

  closeNavBar: function(){
    $('#nav-bar').animate({'width': 0}, 300);
    $('#ajax-loader').animate({'padding-right': 0}, 300);
    $('#nav-bar .nav-bar-button#close-nav-bar').fadeOut(100);
    $('#nav-bar .nav-bar-button#open-nav-bar').fadeIn(100);
  }
}
