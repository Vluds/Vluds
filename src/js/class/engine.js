var Engine = {
  fileExists: function(filePath){
    var http = new XMLHttpRequest();
    http.open('HEAD', filePath, false);
    http.send();
    return http.status!=404;
  }
}
