var Interface = {
  ajaxContainer: "",

  init: function(){
    this.ajaxContainer = $('#ajax-loader #ajax-container');
  },

  loadModel: function(modelName){
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
          $(this).load(App.modelsPath+modelName+".php", function() {
            Interface.resizeAjaxContainer();
          });
  				$(this).stop().animate({'opacity': '1'}, 600);
          $(this).dequeue();
        });
      }
    }
  },

  resizeAjaxContainer: function(){
    var ajaxResizableContainerHeight = $('.ajax-resizable-container').height();
    console.log($('.ajax-resizable-container').height());
    $('.ajax-resizable-container').stop().animate({'margin-top': '-'+ajaxResizableContainerHeight/2}, 200);
  }
}
