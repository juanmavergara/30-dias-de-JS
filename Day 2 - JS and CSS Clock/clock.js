const secondsHand = document.querySelector(".secondsHand")
const minutesHand = document.querySelector(".minutesHand")
const hoursHand = document.querySelector(".hoursHand")

function setDate(){
  
  var date = new Date();

  var seconds = date.getSeconds()
  var secDegrees = (seconds*360/60) + 90
  if(seconds == 0){secondsHand.classList.remove("smooth")}
  else {secondsHand.classList.add("smooth")}
  secondsHand.style.transform = `rotate(${secDegrees}deg)`
  
  var minutes = date.getMinutes()
  var minDegrees = (minutes*360/60) + 90
  if(minutes == 0){minutesHand.classList.remove("smooth")}
  else {minutesHand.classList.add("smooth")}
  minutesHand.style.transform = `rotate(${minDegrees}deg)`
  
  var hours = date.getHours()
  var hourDegrees = hours*360/24
  if(hours == 0){hoursHand.style.removeProperty('transition')}
  else {hoursHand.classList.add("smooth")}
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`
}

setDate()
setInterval(setDate, 1000)