var App = {
  rootPath: $(location).attr('pathname'),
  pagePath: $(location).attr('pathname').split('/')[2],
  templatesPath: "app/templates/",
  phpCorePath: "app/core/php/",
  modelPage: "",
  ajaxContainer: "",

  init: function(){
    this.ajaxContainer = $("#ajax-container");
  },

  loadTemplate: function(templateName){
    if(templateName){
      this.ajaxContainer.stop().animate({'opacity': '0'}, 400);
        if(this.fileExists(this.templatesPath+templateName+"/style.css")){
          var currentStylesheet = $('link[name='+templateName+']');
          if(currentStylesheet){
            currentStylesheet.remove();
          }
          $('link.default-stylesheet').after('<link name="'+templateName+'" rel="stylesheet" type="text/css" href="'+this.templatesPath+templateName+"/"+"style.css"+'"></link>');
        }
        $.post(this.phpCorePath+"Executor.php", { className: "App", functionName: "loadTemplate", templateName: templateName }, function(data){
          if(!data.error){
            App.ajaxContainer.html(data.reply).stop().animate({'opacity': '1'}, 600);

            if(App.fileExists(App.templatesPath+templateName+"/script.js")){
              var currentAnimation = $('script[name='+templateName+']');
              if(currentStylesheet){
                currentAnimation.remove();
              }
              $('script.default-animation').after('<script name="'+templateName+'" type="text/javascript" src="'+App.templatesPath+templateName+"script.js"+'"></script>');
            }
          }
        }, "json");

    }else{
      console.log("empty TEMPLATEnAME");
    }
  },

  fileExists: function(filePath){
    if(filePath){
      var http = new XMLHttpRequest();
      http.open('HEAD', filePath, false);
      http.send();
      return http.status==200;
    }else {
      return false;
    }
  }
}
