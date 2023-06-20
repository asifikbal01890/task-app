import { useState } from "react";
import "./App.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      const rightAnswer = score + 1
      const percentageAns = rightAnswer * 25
      setScore(score + 1 );
      setRightScore(percentageAns)
    }
    if(!isCorrect){
      const wrongAnswer = wrong + 1
      const percentageAns = wrongAnswer * 25
      setWrong(wrong + 1)
      setWrongScore(percentageAns)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-start gap-3">
            <Col className="mt-3">
            <ProgressBar variant="success" now={rightScore} />
              <p className="text-dark">{score}/4</p>
            </Col>
            <Col xs={2} className="rounded-circle bg-dark p-2 m-03 text-center fw-bolder" >{rightScore}</Col>
            <Col className="mt-3">
            <ProgressBar variant="danger" now={wrongScore} />
            <p className="text-dark">{wrong}/4</p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            Você pontuou {score} de {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Questão {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                    key={index}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

