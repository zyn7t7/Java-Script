
const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard')
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');
//1///qusetionss/coise/anser
const quiz = [
    {
        question: "Q.What data structure uses a Last-In-First-Out (LIFO) approach?",
        choices: ["Queue", "stack", "Linked List", " tree"],
        answer: "stack"
    },

    {
        question: "Q.In Python, what keyword is used to define a function?",
        choices: ["def", "function", "define", " func"],
        answer: "def"
    },

    {
        question: "Q.In Python, what function is used to read input from the users keyboard?",
        choices: ["input()", "read()", "scanf()", " get()",],
        answer: "input()"
    },

    {
        question: "Q.Which operator is used to allocate memory for a variable in C++?",
        choices: ["new", "malloc", "alloc", " create"],
        answer: "new"
    },

    {
        question: "Q.In Java, which access modifier provides the widest scope?",
        choices: ["private", "protected", "package-private", " public"],
        answer: "public"
    },
]
//making variables
//5thh step
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeleft = 15;
let timerId = null;
 
const showQuestions = () => {                       //5th
    const questionDetails = quiz[currentQuestionIndex];  //6
    // console.log(questionDetails);
    questionBox.textContent = questionDetails.question 
     //7th
    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {           //7
        const currentChoice = questionDetails.choices[i];             //7
        const choiceDiv = document.createElement('div');                     //7
        choiceDiv.textContent = currentChoice;   //7
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);  
           //7
        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected')
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });

    }
    if (currentQuestionIndex < quiz.length) {
        startTimer();
    }
};

////function to chlk anser
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected')
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert('Correct Answer!');
        displayAlert(`Correct Answer!`)
        score++
    }
    else {
        // alert('Wrong Answer!');
        displayAlert(`Wrong Answer!${quiz[currentQuestionIndex].answer} is the correct answer`)
    }
    timeleft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) { //////////////8
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }

}



//functionto shoe score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    nextBtn.textContent = "play Again"
    quizOver = true;
    timer.style.display = "none";
    // nextBtn.addEventListener('click',()=>{
    //     currentQuestionindex = 0;
    //     showQuestions();
    //     nextBtn.textContent= "next";
    //     scoreCard.textContent = "";
    // })

}

//alert function
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none"
    }, 2000);
}

// time   /////
const startTimer = () => {
    clearInterval(timerId);
    timer.textContent = timeleft;

    const countDown = () => {
        timeleft--
        timer.textContent = timeleft;
        if (timeleft === 0) {
            const consfirmUser = confirm("time Up!! Do You Want To Start The Quiz Again")
            if (consfirmUser) {
                timeleft = 15;
                startQuiz();
            }
            else {
                startBtn.style.display = "block ";
                container.style.display = "none ";
                return;
            }
         
        }

    }
    timerId =  setInterval(countDown, 1000);
}

const stopTimer = () =>{
    clearInterval(timerId);
}


const startQuiz = () => { 
    timeleft = 15;
    timer.style.display = "flex";
    showQuestions();  
}

////eventlitsner on strt btn
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});
// showQuestions();

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        displayAlert("Select Your Answer");
        return
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0,
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});



