$(document).ready(function() {
  var signupEmail = '#signup-container #form-container #email';
  var signupUsername = '#signup-container #form-container #username';
  var signupPassword = '#signup-container #form-container #password';

  $(document).on("keyup", signupEmail, function(){
    Engine.checkFormEmail($(this));
  }).on("change", signupEmail, function(){
    Engine.checkFormEmail($(this));
  });

  $(document).on("keyup", signupUsername, function(){
    Engine.checkFormUsername($(this));
  }).on("change", signupUsername, function(){
    Engine.checkFormUsername($(this));
  });

  $(document).on("keyup", signupPassword, function(){
    Engine.checkFormPassword($(this));
  }).on("change", signupPassword, function(){
    Engine.checkFormPassword($(this));
  });
});
