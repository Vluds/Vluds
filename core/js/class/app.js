var App = {

  appPath: "",
  templatesPath: "src/templates/",
  cssPath: "src/css/",
  animationsPath: "src/animations/",
  phpClassPath: "src/php/class/",
  ajaxContainer: "",
  modelPage: "",

  init: function(){
    Interface.init();
    Engine.init();
    console.log(this.appPath);
  }
}
