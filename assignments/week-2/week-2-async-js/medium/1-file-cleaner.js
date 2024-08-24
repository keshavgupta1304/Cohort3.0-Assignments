import fs from "fs"
let data = fs.readFileSync("1-file.txt","utf-8")
console.log(data);
data=data.split("").filter((char)=>char!==' ').join("")
fs.writeFileSync("1-file.txt",data)
console.log(data);