// let i=0;
// function time()
// {
//   console.log(i);
//   i++;
// }
// setInterval(time,1000);


function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)
