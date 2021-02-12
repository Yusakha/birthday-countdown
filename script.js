const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const birthYear = new Date().getFullYear() + 1;
const birthDay = `5 Jan ${birthYear}`;

function countdown(){
    const currentDate = new Date();
    const countdownSeconds = (new Date(birthDay) - currentDate) / 1000;
    
    const days = Math.floor(countdownSeconds/3600/24);
    const hours = Math.floor((countdownSeconds/3600)-(days*24));
    const minutes = Math.floor((countdownSeconds/60)-(hours*60)-(days*24*60));
    const seconds = Math.floor(countdownSeconds-(minutes*60)-(hours*60*60)-(days*24*60*60));
    
    day.innerHTML = days;
    hour.innerHTML = format(hours);
    minute.innerHTML = format(minutes);
    second.innerHTML = format(seconds);

}

function format(time){
    if (time < 10){
        return `0${time}`
    }
    else return time
}

countdown();
setInterval(countdown, 1000);