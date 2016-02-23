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
              <li id="" class="button"><p>Layout</p></li>
              <ul>
                <li><p>Simple</p></li>
                <li><p>Double Vertical</p></li>
                <li><p>Double Horizontal</p></li>
                <li><p>Grid</p></li>
              </ul>
            </ul>
            <ul>
              <li class="button"><p>Block</p></li>
              <ul>
                <li><p>Text</p></li>
                <li><p>Image</p></li>
              </ul>
            </ul>
            <div id="options-box">
              <div id="options-box-title"><p>None selected</p></div>
              <div id="options-box-arguments">
                <ul>

                </ul>
              </div>
            </div>
          </div>
          <div id="edition-area">
            <div class="edition-layout simple">
              <div class="edition-text h1 middle">Template 01</div>
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
