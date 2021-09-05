function realTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let sassion = "AM";
  //   this if condition if for if Hours EqualTo 0 then Show on web page hour is  12
  if (hours == 0) {
    h = 12;
  }
  //   this if condition if for if Hours greaterthen 12 then subtract 12 from Hours
  if (hours > 12) {
    hours -= 12;
    sassion = "PM";
  }
  // this ternoray oprater for add ZERO with hourse
  hours = hours < 10 ? "0" + hours : hours;
  // this ternoray oprater for add ZERO with Minutes
  mins = mins < 10 ? "0" + mins : mins;
  // this ternoray oprater for add ZERO with Seconds
  secs = secs < 10 ? "0" + secs : secs;

  document.getElementById(
    "realTime"
  ).innerHTML = `${hours} : ${mins} : ${secs} ${sassion}`;
  setTimeout(realTime, 1000);
}
realTime();
