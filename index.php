<?php
require('system/config/constants.php');
require('system/core/App.php');

$app = new App();
$app->loadView("default");
?>
<script>
  var temlateName = "<?php echo $app->pageName;?>";
</script>
