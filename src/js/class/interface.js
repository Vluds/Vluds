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
            $('link.default-stylesheet').append('<link name="'+modelName+'" rel="stylesheet" type="text/css" href="'+App.cssPath+modelName+".css"+'"></link>');
          }
          $(this).load(App.modelsPath+modelName+".php").queue(function(){
            $(this).fadeIn(400);
            $(this).dequeue();
          });
          $(this).dequeue()
        });
      }
    }
  }
}
