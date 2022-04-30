const countDown = document.getElementById('timer');
let time = 2;

function timeCountdown() {   
  let minutes = Math.floor(time / 60)
  let second = time % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  second = second < 10 ? '0' + second : second;
  countDown.innerHTML = ` ${minutes} : ${second}`;
  time--;
  
  if (time < 0) {    
    alert('Вы победили в конкурсе')
    time = new Date().getSeconds()
  }
}

setInterval(timeCountdown, 1000);