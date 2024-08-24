let counter=0 
function time()
{
  console.log(counter);
  counter++;
  setTimeout(time,1000)
}

setTimeout(time,1000);