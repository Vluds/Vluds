<div id="session-container">
<?php
  if(User::isUserSession()){
?>
    <script>Interface.showNavBar();</script>
    <div id="title-container">
      <h1>Hey <?php echo User::getUsername();?> !</h1>
    </div>
    <div id="text-container">
      <h3>Welcome to your session !</h3>
    </div>
    <div id="template-panel" class="panel">
      <div class="panel-text">
        <h4>Templates Panel</h4>
      </div>
      <div class="panel-container">
        <div class="button template" href="template">
          <div class="template-overlay">
            <div class="overlay-text">
              <h1>+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
<?php
  }else {
?>
  <script>Interface.loadTemplate('home');</script>
<?php
  }
?>
</div>
