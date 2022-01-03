const exec = require("child_process").exec;
const os = require("os");
const fs = require("fs");
const path = require("path")
function mkFolder(ph){
   var type = os.type();
   return new Promise((resolve,reject) => {
      if(type === "Linux"){
      exec(`mkdir ${ph}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Darwin"){
      exec(`mkdir ${ph}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Windows_NT"){
      exec(`mkdir ${ph}`,function(err){
         if(err){
            throw err
         }else{
            resolve();
         }
      });
   }else{
     reject('cant found your system platform')
   }
   })
}

function remove(ph){
   var type = os.type();
   return new Promise((resolve,reject) => {
      if(type === "Linux"){
      exec(`rm -rf ${ph}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Darwin"){
      exec(`rm -R ${ph}`,function(err){
              if(err){
                throw err;
              }else{
                resolve();
              }
           });
   }else if(type === "Windows_NT"){
     if(path.extname(ph) == ""){
      fs.readdir(ph,"UTF-8",function(err,fes){
         if(err){
           throw err;
         }else if(fes.length === 0){
           exec(`rd ${ph}`,function(err){
              if(err){
                throw err;
              }else{
                resolve();
              }
           });
           
         }else{
           fes.forEach(function(fe){
              exec(`del ${ph}/${fe}`,function(err){
              if(err){
                throw err;
              }else{
                
              }
           });
           });
           exec(`rd ${ph}`,function(err){
              if(err){
                throw err;
              }else{
                resolve();
              }
           });
         }
         
      });
    }else{
      exec(`del ${ph}`,function(err){
              if(err){
                throw err;
              }else{
                resolve();
              }
           })
    }  
   }else{
     reject("cant found your system platform")
   }
   })
   
}

function mkEFile(fn){
   var type = os.type();
   return new Promise((resolve,reject) => {
     if(type === "Linux"){
      exec(`touch ${fn}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Darwin"){
      exec(`touch ${fn}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Windows_NT"){
      exec(`type nul > ${fn}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else{
     reject("cant found your system platform")
   }
   })
   
}

function move(ph1,ph2){
   var type = os.type();
   return new Promise((resolve,reject) => {
     if(type === "Linux"){
      exec(`mv ${ph1} ${ph2}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Darwin"){
      exec(`mv ${ph1} ${ph2}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Windows_NT"){
      exec(`move ${ph1} ${ph2}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else{
     reject("cant found your system platform");
   }
   })
}

function copy(ph1,ph2){
   var type = os.type();
   return new Promise((resolve,reject) => {
      if(type === "Linux"){
      exec(`cp ${ph1} ${ph2}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Darwin"){
      exec(`cp ${ph1} ${ph2}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else if(type === "Windows_NT"){
      exec(`copy ${ph1} ${ph2}`,function(err){
         if(err){
            throw err;
         }else{
            resolve();
         }
      });
   }else{
     reject("cant found your system platform");
   }
   })
}

function readFile(ph){
   var type = os.type();
   return new Promise((resolve,reject) => {
      if(type === "Linux"){
      exec(`less ${ph}`,function(err,data){
         if(err){
            throw err;
         }else{
            resolve(data);
         }
      });
   }else if(type === "Darwin"){
      exec(`less ${ph}`,function(err,data){
         if(err){
            throw err;
         }else{
            resolve(data);
         }
      });
   }else if(type === "Windows_NT"){
      exec(`more < ${ph}`,function(err,data){
         if(err){
            throw err;
         }else{
            resolve(data);
         }
      });
   }else{
     reject("cant found your system platform");
   }
   })
}


module.exports.mkFolder=mkFolder;
module.exports.mkEFile=mkEFile;
module.exports.copy=copy;
module.exports.readFile=readFile;
module.exports.move=move;
module.exports.remove=remove;