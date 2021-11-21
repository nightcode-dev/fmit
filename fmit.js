const exec = require("child_process").exec;
const os = require("os");
const fs = require("fs");
function mkFolder(ph,fun){
   var type = os.type();
   var func = fun;
   if(type === "Linux"){
      exec(`mkdir ${ph}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Darwin"){
      exec(`mkdir ${ph}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Windows_NT"){
      exec(`mkdir ${ph}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else{
     func("error in find your platform");
   }
}

function remove(ph,fun){
   var type = os.type();
   var func = fun;
   if(type === "Linux"){
      exec(`rm -rf ${ph}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Darwin"){
      exec(`rm -R ${ph}`,function(err){
              if(err){
                console.log(err);
              }else{
                func(null);
              }
           });
   }else if(type === "Windows_NT"){
      fs.readdir(ph,"UTF-8",function(err,fes){
         if(err){
           func(err);
         }else if(fes.length === 0){
           exec(`rd ${ph}`,function(err){
              if(err){
                console.log(err);
              }else{
                func(null);
              }
           });
           
         }else{
           fes.forEach(function(fe){
              exec(`del ${ph}`,function(err){
              if(err){
                console.log(err);
              }else{
                func(null);
              }
           });
           });
           exec(`rd ${ph}`,function(err){
              if(err){
                console.log(err);
              }else{
                func(null);
              }
           });
         }
         
      });
      
   }else{
     func("error in find your platform");
   }
}

function mkEFile(fn,fun){
   var type = os.type();
   var func = fun;
   if(type === "Linux"){
      exec(`touch ${fn}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Darwin"){
      exec(`touch ${fn}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Windows_NT"){
      exec(`type nul > ${fn}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else{
     func("error in find your platform");
   }
}

function move(ph1,ph2,fun){
   var type = os.type();
   var func = fun;
   if(type === "Linux"){
      exec(`mv ${ph1} ${ph2}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Darwin"){
      exec(`mv ${ph1} ${ph2}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Windows_NT"){
      exec(`move ${ph1} ${ph2}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else{
     func("error in find your platform");
   }
}

function copy(ph1,ph2,fun){
   var type = os.type();
   var func = fun;
   if(type === "Linux"){
      exec(`cp ${ph1} ${ph2}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Darwin"){
      exec(`cp ${ph1} ${ph2}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else if(type === "Windows_NT"){
      exec(`copy ${ph1} ${ph2}`,function(err){
         if(err){
            console.log(err);
         }else{
            func(null);
         }
      });
   }else{
     func("error in find your platform");
   }
}

function readFile(ph,fun){
   var type = os.type();
   var func = fun;
   if(type === "Linux"){
      exec(`less ${ph}`,function(err,data){
         if(err){
            console.log(err);
         }else{
            func(null,data);
         }
      });
   }else if(type === "Darwin"){
      exec(`less ${ph}`,function(err,data){
         if(err){
            console.log(err);
         }else{
            func(null,data);
         }
      });
   }else if(type === "Windows_NT"){
      exec(`more < ${ph}`,function(err,data){
         if(err){
            console.log(err);
         }else{
            func(null,data);
         }
      });
   }else{
     func("error in find your platform");
   }
}


module.exports.mkFolder=mkFolder;
module.exports.mkEFile=mkEFile;
module.exports.copy=copy;
module.exports.readfile=readFile;
module.exports.move=move;
module.exports.remove=remove;