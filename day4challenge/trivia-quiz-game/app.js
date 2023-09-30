
const express = require('express');
const app = express();
const port = 3000;


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



const quizRouter = require('./routes/quiz');


app.use(express.json());


app.use('/quiz', quizRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
