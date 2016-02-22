<div id="template-container">
<?php
  if(User::isUserSession()){
?>
    <script>Interface.closeNavBar();</script>
    <div id="title-container">
      <h1>Template</h1>
    </div>
    <div id="text-container">
      <h3>Create new one :</h3>
    </div>
    <div class="panel">
      <div class="panel-text">
        <h4>Edition Area</h4>
      </div>
      <div class="panel-options">
        <ul>
          <li><img src="src/img/expand_icon.png" alt="Expand" /></li>
        </ul>
      </div>
      <div class="panel-container">
          <div id="tool-box">
            <ul>
              <li id="" class="button"><p>Container</p></li>
              <ul>
                <li><p>Responsive</p></li>
                <li><p>Personalize</p></li>
              </ul>
            </ul>
            <ul>
              <li class="button"><p>Text</p></li>
            </ul>
          </div>
          <div id="edition-area">
            <div class="edition-block body">
              <div class="edition-block header">
                <div class="edition-block container-responsive">
                  <span class="edition-h1">My Website Title</span>
                </div>
              </div>
              <div class="edition-block section">
                <div class="edition-block container-responsive">
                  <span class="edition-block h2">This is the content of my website !</span>
                </div>
                <div class="edition-block container-responsive">
                  <span class="edition-block h3">Look at here !</span>
                </div>
              </div>
              <div class="edition-block footer">
                <div class="edition-block container-responsive">
                  <span class="edition-block h4">This is the footer of my website !</span>
                </div>
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
