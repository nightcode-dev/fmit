var fmit = require("./fmit");
fmit.mkFolder("berem",function(err){
  if(err){
     throw err;
  }else{
     console.log("power...");
  }
});
fmit.remove("berem",function(err){
   if(err){
      throw err;
   }else{
      console.log("power to...");
   }
});
fmit.mkEFile("test",function(err){
if(err){
  throw err;
}else{
  console.log("power.....");
}


});
fmit.move("./test","./public/test.txt",function(err){
  if(err){
    throw err;
  }
  else{
    console.log("power is my module ...");
  }
});
fmit.copy("./test","./public/",function(err){
  if(err){
     throw err;
  }else{
     console.log("copied!!!");
  }
});
fmit.readfile("fmit.js",function(err,data){
  if(err){
    throw err;
  }else{
    console.log("power...");
    console.log(`\n\n\n ${data}`);
  }
});
