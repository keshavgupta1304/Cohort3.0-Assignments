
function getTime()
{
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let formattedHours=hours.toString().padStart(2,"0");
  let formattedMinutes=minutes.toString().padStart(2,"0");
  let formattedSeconds=seconds.toString().padStart(2,"0");

  const time24 = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  let ampm = hours>=12?'PM':'AM';
  hours=hours%12;
  hours=hours?hours:12;
  formattedHours=hours.toString().padStart(2,"0");

  const time12 = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  console.clear()
  console.log(time24);
  console.log(time12);
}
setInterval(getTime,1000);
