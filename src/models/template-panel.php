<div id="template-panel-container">
<?php
  if(User::isUserSession()){
?>
    
<?php
  }else {
?>
  <script>Interface.loadModel('home');</script>
<?php
  }
?>
</div>
