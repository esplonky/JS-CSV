function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, true);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }

        return result;
    
  }

  export default loadFile;