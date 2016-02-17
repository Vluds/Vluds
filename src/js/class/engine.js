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
    var emailValue = input.val();
    var emailValueLenght = input.val().length;

    if((emailValue.indexOf('@') > -1) && (emailValue.indexOf('.') > -1)) {
      input.parent().parent().children('.form-error').fadeOut(200);
      input.parent().parent().children('.form-ballot').fadeOut(200);
      input.parent().parent().children('.form-check').fadeIn(400);
    }else if(emailValueLenght > 0) {
      input.parent().parent().children('.form-check').fadeOut(200);
      input.parent().parent().children('.form-error').fadeIn(400);
      input.parent().parent().children('.form-ballot').fadeIn(400);
    }
  },

  checkFormUsername: function(input){
    var usernameValue = input.val();
    var usernameValueLenght = input.val().length;

    var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
    if((usernameValue.match(Exp)) && (usernameValueLenght >= 4)) {
      input.parent().parent().children('.form-error').fadeOut(200);
      input.parent().parent().children('.form-ballot').fadeOut(200);
      input.parent().parent().children('.form-check').fadeIn(400);
    }else if(usernameValueLenght > 0) {
      input.parent().parent().children('.form-check').fadeOut(200);
      input.parent().parent().children('.form-error').fadeIn(400);
      input.parent().parent().children('.form-ballot').fadeIn(400);
    }
  },

  checkFormPassword: function(input){
    var passwordValue = input.val();
    var passwordValueLenght = input.val().length;

    if(passwordValueLenght >= 6) {
      input.parent().parent().children('.form-error').fadeOut(200);
      input.parent().parent().children('.form-ballot').fadeOut(200);
      input.parent().parent().children('.form-check').fadeIn(400);
    }else if(passwordValueLenght > 0) {
      input.parent().parent().children('.form-check').fadeOut(200);
      input.parent().parent().children('.form-error').fadeIn(400);
      input.parent().parent().children('.form-ballot').fadeIn(400);
    }
  },

  signUp: function(userID, email, username, password){
    $.post(App.phpClassPath+"app.php", { className: "User", functionName: "signUp", userID: userID, email: email, username: username, password: password }, function(data){
      console.log(data);
    }, "json");
  },

  logIn: function(userID, email, password){
    $.post(App.phpClassPath+"app.php", { className: "User", functionName: "logIn", userID: userID, email: email, password: password }, function(data){
      if(!data.error){
        Interface.loadModel('session');
      }
    }, "json");
  }
}

window.onpopstate = function(event){
  if(event.state){
    Interface.loadModel(event.state.pageName);
  }
};
