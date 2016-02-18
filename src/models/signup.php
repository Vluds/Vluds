<div class="user-form ajax-resizable-container" id="signup-container">
  <div id="title-container">
    <h1>Get Started</h1>
  </div>
  <div id="text-container">
    <h3>Choose a registration mode with</h3>
  </div>
  <div id="form-fb-container">
    <ul>
      <li><div class="button" onclick="signUpFBUser();"><span class="button-icon"><img src="src/img/FB-f-Logo__white_29.png"/></span><h4>FACEBOOK</h4></div></li>
    </ul>
  </div>
  <div id="form-separator">
    <h3>OR</h3>
  </div>
  <div id="form-container" class="form-container">
    <ul>
      <li><input id="email" placeholder="Email" type="email"/></li>
      <div class="form-error"><p>Email is not valid !</p></div>
      <span class="form-check"><h3>✓</h3></span>
      <span class="form-ballot"><h3>✗</h3></span>
    </ul>
    <ul>
      <li><input id="username" placeholder="Username" type="text"/></li>
      <div class="form-error"><p>At least 4 characters !</p></div>
      <div class="form-error"><p>Only letters and numbers</p></div>
      <span class="form-check"><h3>✓</h3></span>
      <span class="form-ballot"><h3>✗</h3></span>
    </ul>
    <ul>
      <li><input id="password" placeholder="Password" type="password"/></li>
      <div class="form-error"><p>At least 6 characters !</p></div>
      <span class="form-check"><h3>✓</h3></span>
      <span class="form-ballot"><h3>✗</h3></span>
    </ul>
    <ul id="button-container">
      <li><div class="button" onclick="Engine.signUpUserForm($(this));"><h4>READY</h4></div></li>
    </ul>
  </div>
</div>
