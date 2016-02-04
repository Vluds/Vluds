var Engine = {
  documentTitle: "",

  init: function(){
    this.documentTitle = document.title;
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
  },

  historyPushState: function(modelName){
    if(modelName){
      document.title = this.documentTitle + ' | ' + modelName.toUpperCase();
      window.history.pushState({'pageName': modelName}, modelName, modelName);
    }
  },

  checkFormEmail: function(input){
    var signupEmailValue = input.val();
    if((signupEmailValue.indexOf('@') > -1) && (signupEmailValue.indexOf('.') > -1)) {
      input.parent().parent().children('.form-ballot').fadeOut(200);
      input.parent().parent().children('.form-check').fadeIn(400);
    }else {
      input.parent().parent().children('.form-check').fadeOut(200);
      input.parent().parent().children('.form-ballot').fadeIn(400);
    }
  },

  checkFormUsername: function(input){
    var signupUsernameValue = input.val();
    var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
    if((signupUsernameValue.match(Exp)) && (input.lenght > 4)) {
      input.parent().parent().children('.form-ballot').fadeOut(200);
      input.parent().parent().children('.form-check').fadeIn(400);
    }else {
      input.parent().parent().children('.form-check').fadeOut(200);
      input.parent().parent().children('.form-ballot').fadeIn(400);
    }
  },

  checkFormPassword: function(input){
    var signupPasswordValue = input.val();
    if(input.lenght > 6) {
      input.parent().parent().children('.form-ballot').fadeOut(200);
      input.parent().parent().children('.form-check').fadeIn(400);
    }else {
      input.parent().parent().children('.form-check').fadeOut(200);
      input.parent().parent().children('.form-ballot').fadeIn(400);
    }
  }
}

window.onpopstate = function(event){
  if(event.state){
    Interface.loadModel(event.state.pageName);
  }
};
