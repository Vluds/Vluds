var Interface = {
  ajaxContainer: "",

  init: function(){
    this.ajaxContainer = $('#ajax-loader #ajax-container');
  },

  loadModel: function(modelName, argPage){
    if(modelName){
      if(Engine.fileExists(App.modelsPath+modelName+".php")){
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
    }
  },

  resizeAjaxContainer: function(){
    var ajaxResizableContainerHeight = $('.ajax-resizable-container').height();
    $('.ajax-resizable-container').stop().animate({'margin-top': '-'+ajaxResizableContainerHeight/2}, 200);
  }
}
