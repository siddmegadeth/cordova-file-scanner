var file  =  angular.module("CordovaFileReader",[]);

file.service("cordovaFile",function()
{
  var globalList = [];
  var currentlist = [];
  return {

    scan : function(url,fileType,success,failure)
    {
     
      //Function Definition For fileEntry and Error
      var fileSearch = function (entry) {
      log("Scanning Files");
      log(entry);
      

      var dirReader = entry.createReader();
      dirReader.readEntries(
          function (entries) {
             log(entries);
              var i=0;
              while(i!=entries.length) 
              {

                  if (entries[i].isDirectory === true) {
                      // Recursive -- call back into this subdirectory
                      log("Directory Found : ");
                      log(entries[i]);
                      fileSearch(entries[i]);
                  } else 
                  {
                      log("File Found : ");
                      log(entries[i].name);
                    if(entries[i].name.indexOf(fileType) != -1)
                    {
                      
                      var file = {};
                      file.name = entries[i].name;
                      file.nativeURL = entries[i].nativeURL;
                      file.fullPath = entries[i].fullPath;
                      currentlist.push(file);
                      globalList.push(file);
                    }
                  }
                  i+=1;
              }

             // Return List As CurrentSearch File and ll Files Searched in globalList
             var fileHolder = {};
             fileHolder.currentList = currentlist;
             //fileHolder.currentList.push(currentlist);

             fileHolder.globalList = globalList;
            // fileHolder.globalList.push(globalList);

             success(fileHolder);  
          },
          function (error) 
          {
              console.log(error);
              failure(error);
          });
    };   //Func ENds

    var fileError = function (error) {
      log("getDirectory error: " + error.code);
      console.log(error);
      failure(error);
     
    };

     var i=0;
     while(i!=url.length) 
     {
        log(url[i]);
        if (url[i] === null || url[i].length === 0) 
        {
            continue; // skip blank / non-existent paths for this platform
        }
        window.resolveLocalFileSystemURL(url[i],fileSearch, fileError);
        i+=1;
      }

    }  //scan Ends

  };  /// return Ends

});

