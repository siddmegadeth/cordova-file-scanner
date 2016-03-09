//   var url    = [
//       "file:///storage/emulated/"
//   ];
// fileExtenson = ".mp3 / .mp4 / Or Any Other File";

(function(window,undefined)
{


function getFiles(url,fileExtenson,success,fail)
{
  
  var index = 0;

  var addFileEntry = function (entry) {
  
      var dirReader = entry.createReader();
      dirReader.readEntries(
          function (entries) {
              var i=0;
              while(i!=entries.length) {

                  if (entries[i].isDirectory === true) {
                      // Recursive -- call back into this subdirectory
                      addFileEntry(entries[i]);
                  } else {
                    
                    if(entries[i].name.indexOf(fileExtenson) != -1 || entries[i].name.indexOf(fileExtenson) != -1)
                    {
                      var file = {};
                      file.name = entries[i].name;
                      file.nativeURL = entries[i].nativeURL;
                      file.fullPath = entries[i].fullPath;
                      musicList.push(file);
                
                    }
                  }
                  i+=1;
              }
             
            success(musicList);  
          },
          function (error) {
              fail(error);
             
          });
  };


  var addError = function (error) {
      fail(error);
     
  };
     var i=0;
     while(i!=url.length) 
     {
        if (url[i] === null || url[i].length === 0) 
        {
            continue; // skip blank / non-existent paths for this platform
        }
        window.resolveLocalFileSystemURL(url[i], addFileEntry, addError);
        i+=1;
      }



}

  window.getFiles = getFiles;
})(window);
