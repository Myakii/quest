const questions = [
  {
    id: 1,
    question: "Qui est l'auteur de 'Petit Prince' ?",
    answers: [
      "Antoine de Saint-Exupéry",
      "Jane Austen",
      "Victor Hugo ",
      "J.R.R. Tolkien",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Quel est le nom de la princesse qui dort pendant 100 ans dans un célèbre conte de fées ?",
    answers: ["Cendrillon", "Aurore", "Blanche-neige", "Ariel"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Quel est le plus grand océan du monde ?",
    answers: ["Arctique", "Indien", "Atlantique", "Pacifique"],
    correctAnswer: 3,
  },
];

let score = 0;
let currentQuestionIndex = 0;

function DisplayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionContainer = document.getElementById("Questions-container");
    questionContainer.innerHTML = "";

    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = questions[currentQuestionIndex].question;
    questionContainer.appendChild(questionElement);

    const answersContainer = document.createElement("div");
    answersContainer.className = "answers";


    // window.addEventListener('keydown', (event) => {
    //   if (['ArrowLeft', 'ArrowRight', 'F5', 'CtrlR'].includes(event.key)) {
    //     event.preventDefault();
    //   }
    // });

    window.addEventListener('keydown', (event) => {
      // Liste des touches à prévenir
      const keysToPrevent = ['ArrowLeft', 'ArrowRight']; // creer des variables pour stoker les touches a desable
      const isPreventRefresh = (event.key === 'F5' || (event.key === 'R' && event.ctrlKey)); // utiliser evant.key pq plus recent sinon une autre possibilité sont les keyCodes

      if (keysToPrevent.includes(event.key) || isPreventRefresh) {
        event.preventDefault();
      }
    });



    for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
      const answerButton = document.createElement("button");
      answerButton.textContent = questions[currentQuestionIndex].answers[i];
      answerButton.addEventListener("click", function () {
        if (i === questions[currentQuestionIndex].correctAnswer) {
          score++;
        }
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          DisplayQuestion();
        } else {
          DisplayScore();
        }
      });
      answersContainer.appendChild(answerButton);
    }
    questionContainer.appendChild(answersContainer);
  }
}

function DisplayScore() {
  const scoreContainer = document.getElementById("Score-container");
  scoreContainer.textContent = `Your score is: ${score} out of ${questions.length}`;
}

DisplayQuestion();
