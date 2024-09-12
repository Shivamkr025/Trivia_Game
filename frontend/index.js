document.addEventListener('DOMContentLoaded', () => {

    const firstPlayer = localStorage.getItem("player1")
    const secPlayer = localStorage.getItem("player2")

    const playerOne = document.getElementById("player1")
    playerOne.textContent = firstPlayer

    const playerTwo = document.getElementById("player2")
    playerTwo.textContent = secPlayer

})


const nameForm = document.getElementById('battleForm')

nameForm.addEventListener('submit', (event)=> {

    event.preventDefault()

    const player1 = document.querySelector('#player1').value
    const player2 = document.querySelector('#player2').value

    localStorage.setItem("player1" , player1)
    localStorage.setItem("player2" , player2)

    if(player1 && player2){
        alert("let's start the battle")
        window.location.href = './startGame/game.html'
    }else{
        alert("please enter both player name")
    }

})




