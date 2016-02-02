var Interface = {
  ajaxContainer: "",

  init: function(){
    this.ajaxContainer = $('#ajax-loader #ajax-container');
  },

  loadModel: function(modelName){
    if(modelName){
      if(Engine.fileExists(App.modelsPath+modelName+".php")){
        this.ajaxContainer.fadeOut(400).queue(function(){
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
          $(this).load(App.modelsPath+modelName+".php").queue(function(){
            $(this).fadeIn(400);
            $(this).dequeue();
          });
          $(this).dequeue()
        });
      }
    }
  },

  scrollDown: function(){
    $("html, body").animate({ scrollTop: $(document).height() }, 500);
  }
}
