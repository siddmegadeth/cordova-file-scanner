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

```javascript
getFiles(url,fileExtenson,function(resp)
{
	console.log(resp);
	$rootScope.files = resp;

},function(error)
{
	console.log(error);
});

```


