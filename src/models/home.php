<?php
  if(User::isUserSession()){
?>
    <script>Interface.loadModel('session');</script>
<?php
  }else{
?>
<div class="ajax-resizable-container" id="home-container">
  <div id="infos-container">
      <div id="title-container">

      </div>
      <div id="text-container">
        <h2>Make a beautiful website with Your hands.</h2>
      </div>
      <div id="button-container">
        <div class="button" onclick="Interface.loadModel('signup');">
          <h4>SIGN UP</h4>
        </div>
        <div class="button" onclick="Interface.loadModel('login');">
          <h4>LOG IN</h4>
        </div>
      </div>
  </div>
</div>
<?php
}
?>
