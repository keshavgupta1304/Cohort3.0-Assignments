import fs from "fs"


fs.writeFile("4-file.txt","Hi cohort people from keshav",function cb(err){
  if(err) throw err;
  console.log("Done writing to the file");
})