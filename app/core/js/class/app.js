var App = {

  rootPath: $(location).attr('pathname'),
  pagePath: $(location).attr('pathname').split('/')[2],
  viewPath: "app/view/",
  phpClassPath: "app/core/php/class/",
  ajaxContainer: "",
  modelPage: "",

  init: function(){
    this.rootPath = this.rootPath.replace(this.pagePath, '');
    Interface.init();
    Engine.init();
    console.log(this.rootPath);
    console.log(this.pagePath);
  }
}
