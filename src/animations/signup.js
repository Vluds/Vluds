$(document).ready(function() {
  var signupEmail = '#signup-container #form-container #email';
  var signupUsername = '#signup-container #form-container #username';

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
});
