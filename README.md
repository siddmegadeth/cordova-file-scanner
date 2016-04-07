# cordova-file-scanner
cordova file scanner (Can be used by Angularjs)
Cordova File Scanner Scans Files from SDCARD and PERSSTENT DEVICE STORAGE using Cordova and Cordova File Systems

# Installation
Install https://github.com/apache/cordova-plugin-file  using npm cordova
Refer to Android File System layout 

#Using the Plugins
To Use the Plugin please ensure the cordova  file plugin is installed and the code is called only after 
deviceready event

```javascript
  var url    = 
  [
      "file:///storage/emulated/",
      "YOUR LIST OF ARRAY LOCATION"
  ];
  
fileExtenson = ".mp3"   //  .mp4  Or Any Other File . Please Provide only Extension";
//  Currently File named are Scanned Using the . Extension Only.

getFiles(url,fileExtenson,function(resp)
{
	console.log(resp);

},function(error)
{
	console.log(error);
});



```

# Using in Angularjs
#To use the cordova-file-scanner in a Angularjs App. Kindly download/Add Reference to cordova-file-angular.js from the Git
Add  a dependecies as follows  CordovaFileReader is the service name. 


```javascript

var app = angular.module("myApp",["CordovaFileReader"]);

Then in the controller


app.controller("globalCtrl",function($scope,$rootScope,cordovaFile)
{
	var url    = 
            [
              // "cordova.file.dataDirectory",
              // "cordova.file.documentsDirectory",
              // "cordova.file.externalApplicationStorageDirectory",
              // "cordova.file.externalCacheDirectory",
              // "cordova.file.externalRootDirectory",
              // "cordova.file.externalDataDirectory",
              // "cordova.file.sharedDirectory",
              // "cordova.file.syncedDataDirectory",
              "file:///storage/emulated/0/",
              "file:///storage/emulated/0"
            ];

            	  fileType = ["mp3,"mp4","avi","pdf"];
		//  Currently File named are Scanned Using the . Extension Only.Please do not use the dot . while providing file ext
              	  
	           cordovaFile.scan(url,fileType,function(resp)
	          {
	           
			$rootScope.response = resp;
	           
	          },function(error)
	          {
	            log(error);
	          });	
	

}

#Provide the URL as an Array,Type of file to be scanned.(Only provide .file Extrnsion) with success,error callbacks.
#Currently multi file extension is only provided for Angular


```


