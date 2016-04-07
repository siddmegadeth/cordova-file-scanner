var file  =  angular.module("CordovaFileReader",[]);

file.service("cordovaFile",function($q,$timeout)
{

  var list = [];

  //var deferred = $q.defer();
 // var promises = [deferred.promise];
  return {

    scan : function(url,fileType,success,failure)
    {
      var i=0;
      while(i!=fileType.length)
      {
        list[fileType[i]] = [];
        i+=1;
      }
       // list[fileType[0]] = [];
       // list[fileType[1]] = [];
       //Get List Of FilesType and Create named associativr Array


      //Function Definition For fileEntry and Error
      var fileSearch = function (entry) {
   
      

      var dirReader = entry.createReader();
      dirReader.readEntries(
          function (entries) {
              var i=0;
              while(i!=entries.length) 
              {

                  if (entries[i].isDirectory === true) {
                      // Recursive -- call back into this subdirectory
            
                      fileSearch(entries[i]);
                  } else 
                  {
        
                    var j=0;
                    while(j!=fileType.length)
                    {

                      if(entries[i].name.indexOf(fileType[j]) != -1)
                      {
                      
                      var file = {};
                      file = entries[i];
                      file.type = fileType[j];
                      
                     list[fileType[j]].push(file);

                      }
                    j+=1;
                    }

                 //    if(entries[i].name.indexOf(fileType[0]) != -1)
                 //    {
                      
                 //      var file = {};
                 //      file = entries[i];
                 //      file.type = fileType[0];
                      
                 //     list[fileType[0]].push(file);
                 //   //   promises.push(file);
                 // //     console.log(file);
                 //    }
                 //    else if(entries[i].name.indexOf(fileType[1]) != -1)
                 //    {
                      
                 //      var file = {};
                 //      file = entries[i];
                 //      file.type = fileType[1];
                 //      list[fileType[1]].push(file);
                 //    //  console.log(file);
                 //     //    promises.push(file);
                 //    }


                  }
                  i+=1;
              }

             // Return List As CurrentSearch File and ll Files Searched in globalLis
             // deferred.resolve();

              
           success(list);  
          },
          function (error) 
          {
              console.log(error);
            //  deferred.reject(list);
            failure(error);

          });

      //  return $q.all(promises);
    };   //Func ENds

   
     var i=0;
     while(i!=url.length) 
     {
        if (url[i] === null || url[i].length === 0) 
        {
            continue; // skip blank / non-existent paths for this platform
        }
        window.resolveLocalFileSystemURL(url[i],fileSearch, function (error) {
          console.log(error);
          failure(error);
        });

        i+=1;
      }

    }  //scan Ends

  };  /// return Ends

});


/*
file.name = entries[i].name;
                      file.nativeURL = entries[i].nativeURL;
                      file.fullPath = entries[i].fullPath;

*/
