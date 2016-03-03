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

  historyPushState: function(templateName){
    if(templateName){
      document.title = this.documentTitle + ' | ' + templateName.toUpperCase();
      window.history.pushState({'pageName': templateName}, templateName, templateName);
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

  signUpUser: function(email, username, password){
    $.post(App.phpClassPath+"app.php", { className: "User", functionName: "signUp", email: email, username: username, password: password }, function(data){
      if(!data.error){
        Interface.showPopUp('Information', data.reply);
        Interface.loadModel('login');
      }else {
        Interface.showPopUp('Error', data.reply);
      }
    }, "json");
  },

  logInUser: function(email, password){
    $.post(App.phpClassPath+"app.php", { className: "User", functionName: "logIn", email: email, password: password }, function(data){
      if(!data.error){
        Interface.showPopUp('Information', data.reply);
        Interface.loadModel('session');
      }else {
        Interface.showPopUp('Error', data.reply);
      }
    }, "json");
  },

  logOutUser: function(){
    $.post(App.phpClassPath+"app.php", { className: "User", functionName: "closeUserSession"}, function(data){
      if(!data.error){
        Interface.showPopUp('Information', data.reply);
        Interface.loadModel('home');
        Interface.closeNavBar();
      }else {
        Interface.showPopUp('Error', data.reply);
      }
    }, "json");
  },

  logInUserForm: function(inputForm){
    var formContainer = inputForm.closest('.form-container');
    var inputEmailValue = formContainer.find('input#email').val();
    var inputPasswordValue = formContainer.find('input#password').val();

    this.logInUser(null, inputEmailValue, inputPasswordValue);
  },

  signUpUserForm: function(inputForm){
    var formContainer = inputForm.closest('.form-container');
    var inputEmailValue = formContainer.find('input#email').val();
    var inputUsernameValue = formContainer.find('input#username').val();
    var inputPasswordValue = formContainer.find('input#password').val();

    this.signUpUser(null, inputEmailValue, inputUsernameValue, inputPasswordValue);
  }
}

window.onpopstate = function(event){
  if(event.state){
    Interface.loadModel(event.state.pageName);
  }
};
