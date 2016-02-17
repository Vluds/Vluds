<div id="template-panel-container">
<?php
  if(User::isUserSession()){
?>
    <div id="title-container">
      <h1>Hey <?php echo User::getUsername();?> !</h1>
    </div>
    <div id="text-container">
      <h3>Welcome to your session !</h3>
    </div>
    <div id="template-panel">
      <div id="template-panel-text">
        <h4>Template Panel</h4>
      </div>
      <div id="templates-container">
        <div class="button template">
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
  <script>Interface.loadModel('home');</script>
<?php
  }
?>
</div>
