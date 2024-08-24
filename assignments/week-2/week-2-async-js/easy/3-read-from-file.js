import fs from 'fs';
fs.readFile("3-file.txt","utf-8",(err,data)=>{
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log(data);
  }
});
let c=0;
for(let i=0;i<1000000000;i++)
{
  c++;
}
