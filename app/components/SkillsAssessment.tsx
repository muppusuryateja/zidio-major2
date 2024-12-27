'use client'

import { useState } from 'react'

const questions = [
  {
    question: 'Which of the following is not a JavaScript data type?',
    options: ['String', 'Boolean', 'Float', 'Object'],
    correctAnswer: 'Float',
  },
  {
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
  },
  {
    question: 'Which HTML tag is used to define an unordered list?',
    options: ['<ol>', '<list>', '<ul>', '<unordered>'],
    correctAnswer: '<ul>',
  },
]

export default function SkillsAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills Assessment</h2>
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8">
          {!showResult ? (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <p className="mb-4">{questions[currentQuestion].question}</p>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-3 bg-white rounded-md hover:bg-gray-200 transition duration-300"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Quiz Completed!</h3>
              <p className="text-xl mb-4">
                Your score: {score} out of {questions.length}
              </p>
              <button onClick={restartQuiz} className="btn-primary">
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

