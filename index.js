let playerActive = 0;

document.querySelectorAll('.row').forEach(item => {
    item.addEventListener('click', (e) => {
        if(playerActive === 0){
            e.target.innerHTML = `<div class="place">X</div>`
            e.target.disabled = true
            playerActive = 1;
            checkForWin(e)
        }else {
            e.target.innerHTML = `<div class="place">O</div>`
            e.target.disabled = true
            playerActive = 0;
            checkForWin()
        }
    })
})

function checkForWin() {
   let p1 = document.getElementById('place1').innerText
   let p2 = document.getElementById('place2').innerText
   let p3 = document.getElementById('place3').innerText
   let p4 = document.getElementById('place4').innerText
   let p5 = document.getElementById('place5').innerText
   let p6 = document.getElementById('place6').innerText
   let p7 = document.getElementById('place7').innerText
   let p8 = document.getElementById('place8').innerText
   let p9 = document.getElementById('place9').innerText

    if(p1 !== '' && p2 !== '' && p3 !== '') 
     if((p1 === p2) && (p2 === p3) && (p1 === p3)) gameOver()

    if(p4 !== '' && p5 !== '' && p6 !== '') 
     if((p4 === p5) && (p5 === p6) && (p4 === p6)) gameOver()

    if(p7 !== '' && p8 !== '' && p9 !== '') 
     if((p7 === p8) && (p8 === p9) && (p7 === p9)) gameOver()

    if(p1 !== '' && p4 !== '' && p7 !== '') 
     if((p1 === p4) && (p4 === p7) && (p1 === p7)) gameOver()

    if(p2 !== '' && p5 !== '' && p8 !== '') 
     if((p2 === p5) && (p5 === p8) && (p2 === p8)) gameOver()

    if(p3 !== '' && p6 !== '' && p9 !== '') 
     if((p3 === p6) && (p6 === p9) && (p3 === p9)) gameOver()

    if(p1 !== '' && p5 !== '' && p9 !== '') 
     if((p1 === p5) && (p5 === p9) && (p1 === p9)) gameOver()

    if(p3 !== '' && p5 !== '' && p7 !== '') 
     if((p3 === p5) && (p5 === p7) && (p3 === p7)) gameOver()

    
}

function gameOver() {
    document.getElementById('gameover').style.display = 'flex'
    document.getElementById('play-again').addEventListener('click', () => window.location.reload())
}