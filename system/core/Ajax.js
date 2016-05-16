var Ajax = {
  rootPath: $(location).attr('pathname'),
  pagePath: $(location).attr('pathname').split('/')[2],
  templatesPath: "app/templates/",
  corePath: "system/core/",
  modelPage: "",
  ajaxContainer: "",

  init: function(){
    this.ajaxContainer = $("#ajax-container");
  },

  loadTemplate: function(templateName){
    if(templateName){
      this.ajaxContainer.stop().animate({'opacity': '0'}, 400).queue(function(){
        if(Ajax.fileExists(Ajax.templatesPath+templateName+"/style.css")){
          var currentStylesheet = $('link[name='+templateName+']');
          if(currentStylesheet){
            currentStylesheet.remove();
          }
          $('link.default-stylesheet').after('<link name="'+templateName+'" rel="stylesheet" type="text/css" href="'+Ajax.templatesPath+templateName+"/"+"style.css"+'"></link>');
        }
        $.post(Ajax.corePath+"Executor.php", { className: "App", functionName: "loadTemplate", templateName: templateName }, function(data){
          if(!data.error){
            Ajax.ajaxContainer.html(data.reply).stop().animate({'opacity': '1'}, 600);

            if(Ajax.fileExists(Ajax.templatesPath+templateName+"/script.js")){
              var currentAnimation = $('script[name='+templateName+']');
              if(currentStylesheet){
                currentAnimation.remove();
              }
              $('script.default-animation').after('<script name="'+templateName+'" type="text/javascript" src="'+Ajax.templatesPath+templateName+"/script.js"+'"></script>');
            }
          }else{
            Ajax.ajaxContainer.html(data.reply).stop().animate({'opacity': '1'}, 600);
          }
        }, "json");

        $(this).dequeue();
      });
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
