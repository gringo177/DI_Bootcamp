

const express = require('express');
const router = express.Router();


const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];


router.get('/', (req, res) => {
 
  const firstQuestion = triviaQuestions[0];
  res.json({ question: firstQuestion.question });
});


router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestionIndex = req.body.currentIndex;

  
  const nextQuestionIndex = currentQuestionIndex + 1;

  if (nextQuestionIndex < triviaQuestions.length) {
   
    const nextQuestion = triviaQuestions[nextQuestionIndex];
    res.json({ question: nextQuestion.question });
  } else {
    
    res.json({ message: "Quiz completed! Display the final score here." });
  }
});


router.get('/score', (req, res) => {
  
  res.json({ message: "Display the final score here." });
});

module.exports = router;
