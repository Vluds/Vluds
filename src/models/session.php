<div class="ajax-resizable-container" id="session-container">
<?php
  if(User::isUserSession()){
?>
    <div id="title-container">
      <h1>Hey !</h1>
    </div>
    <div id="text-container">
      <h3>Welcome to your session !</h3>
    </div>
<?php
  }else {
?>
  <script>Interface.loadModel('home');</script>
<?php
  }
?>
</div>
