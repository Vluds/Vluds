var App = {

  rootPath: $(location).attr('href'),
  viewPath: "app/view/",
  phpClassPath: "app/core/php/class/",
  ajaxContainer: "",
  modelPage: "",

  init: function(){
    Interface.init();
    Engine.init();
    console.log(this.rootPath);
    console.log(this.phpClassPath);
  }
}
