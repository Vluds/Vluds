<?php
  if(User::isUserSession()){
?>
    <script>Interface.loadTemplate('session');</script>
<?php
  }else{
?>
<div class="ajax-resizable-container" id="home-container">
  <div id="infos-container">
      <div id="title-container">

      </div>
      <div id="text-container">
        <h2>Make beautiful website with Your hands.</h2>
      </div>
      <div id="button-container">
        <div class="button" onclick="Interface.loadModel('signup');">
          <h4>GET STARTED</h4>
        </div>
      </div>
  </div>
<!--  <div id="features-container">
    <div class="feature">
      <h4>Customize</h4>
    </div>
    <div class="feature">
      <h4>Beautiful</h4>
    </div>
    <div class="feature">
      <h4>Speed</h4>
    </div>
    <div class="feature">
      <h4>Manage</h4>
    </div>
  </div>-->
</div>
<?php
}
?>
