let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`)
}

function restart(){
  deadCounter = 0;
  lostCounter = 0;
  dead.textContent = '0';
  lost.textContent = '0';
}

for (let i = 1; i <= 9; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = function () {
    if (getHole(i).className === 'hole hole_has-mole') {
      deadCounter++;
      dead.textContent = deadCounter;
      if (deadCounter === 10) {
        restart()
        alert('Победа!!!')
      }
    } else {
      lostCounter++;
      lost.textContent = lostCounter;
      if (lostCounter === 5) {
        restart()
        alert('Проигрыш!!!')
      }
    }
  }
}

