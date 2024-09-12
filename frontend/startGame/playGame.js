document.addEventListener('DOMContentLoaded', () => {

    const optionDisplay = document.querySelector("#optionDisplay")
    const questionDisplay = document.querySelector("#questionDisplay")
    
    let questionArray = []
    let count = 0
    let score = [0 , 0]
    let currentPlayer = 0
    let points = 10

    const chooseDifficulty = document.querySelector('#difficultySelect')
    chooseDifficulty.addEventListener('change', (event) => {
        const level = event.target.value
        fetchData(level)
        pointsBox(level)

    })

    const fetchData = async (level) => {
        console.log(level);

        try {
            const respone = await fetch("http://localhost:3000/show/question")
            const data = await respone.json()

            const getQuestion = data.show
            questionArray = []

            getQuestion.forEach((quiz) => {
                if (quiz.difficulty === level) {
                    questionArray.push(quiz)
                }
            })
            console.log(questionArray);

            if (questionArray.length > 0) {
                count = 0
                displayQuestion(count)
            } else {
                questionDisplay.innerHTML = `<h5> Choose another level </h5>`

            }

        } catch (error) {
            console.log('something went wrong...', error);

        }
    }
    fetchData("easy")

    const displayQuestion = (index) => {
        const question = questionArray[index]
        questionDisplay.innerHTML = `<h5 class="question-container">${question.question}</h5>`
        optionDisplay.innerHTML = ""

        question.options.forEach((option) => {

            const optionBtn = document.createElement("button")
            optionBtn.textContent = option
            optionBtn.className = "btn btn-outline-primary optionBtn"

            optionBtn.addEventListener('click', () => (
                findAnswer(option, question.correctAnswer)
            
            ))

            optionDisplay.appendChild(optionBtn)
        })

    }

    const findAnswer = (answer, correctAnswer) => {

        if (answer === correctAnswer) {
            score[currentPlayer] += points
        } else {
            score[currentPlayer] += 0
        }

        scoreBox()

        count++
        if (count < questionArray.length) {

            if (currentPlayer == 0){
                currentPlayer = 1
            }else{
                currentPlayer = 0
            }
            displayQuestion(count)

        } else {
            alert("Choose another difficulty")
        }
    }

    const player1 = document.querySelector("#player1Score")
    const player2 = document.querySelector("#player2Score")
    const scoreBox = () => {
        player1.textContent = score[0]
        player2.textContent = score[1]
    }

    const pointsBox = (level)=> {
        if (level === 'easy'){
            points = 10
        }else if (level === "medium"){
            points = 15
        }else{
            points = 20
        }
    }

    const endBtn = document.querySelector("#endGameBtn")
    const endGame = () => {
        let winner;
        if (score[0] > score[1]) {
            winner = "Player 1 is the winner "
        } else if (score[0] < score[1]) {
            winner = "Player 2 is the winner "
        } else {
            winner = "No One Is Winner"
        }

        alert(`Game Over ${winner}`);

        score = [0, 0];
        currentPlayer = 0;
        scoreBox();
    };

    endBtn.addEventListener("click", endGame);

});
