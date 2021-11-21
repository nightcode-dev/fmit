# welcome to fmit module
Hi welcome to fmit repository 
Fmit is a module to work with file 
its looks file system module but is some smaller than it and has a big Difference between fmit and file system

## whats different?
the file system use permission of nodejs to work with files 
but fmit used terminal command to work with file 

### some example of fmit works
you can copy file in a Folder  or make a file copied from your target file 
example:
`fmit.copy("./test","./public/",function(err){
  if(err){
     throw err;
  }else{
     console.log("copied!!!");
  }
});`
## the list of fmit functions
1.`mkFolder()`:make a folder it get a path and a callback function

2.`mkEFile()`:make a empty file with your selected name and extension 

3.`copy()`:copy the file in a selected folder 

4.`readfile()`:its a function to readfile its give a err and data of file to your function

5.`move()`:move its a function to rename or move a file or folder it get to path and a callback function and give a err if process give a error 

6.`remove`:its a function to remove a file or folder it get a path and a callback function and give a error if the process give error
