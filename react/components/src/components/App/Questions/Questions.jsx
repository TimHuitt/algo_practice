import React, { useState, useEffect } from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [ questions, setQuestions ] = useState(null)
  const [ submissions, setSubmissions ] = useState(null)
  const [ categories, setCategories ] = useState({})

  useEffect(() => {
    fetch(QUESTIONS_API_BASE_URL)
    .then(res => res.json())
    .then(data => setQuestions(data))
    .catch(err => console.error(err))

    fetch(SUBMISSIONS_API_BASE_URL)
    .then(res => res.json())
    .then(data => setSubmissions(data))
    .catch(err => console.error(err))
  },[])

  useEffect(() => {
    if (questions && submissions) {
      const updatedData = questions.map(question => {
        let status = submissions.find(status => status.questionId === question.id)
        if (status) {
          switch (status.status) {
            case "CORRECT":
              status = "correct"
              break
            case "INCORRECT":
              status = "incorrect"
              break
            case "PARTIALLY_CORRECT":
              status = "partially-correct"
              break
            default:
              status = "unattempted"
              break
          }
        } else {
            status = "unattempted"
        }
        return status ? { ...question, status: status } : question
      })
      setQuestions(updatedData)
    }

  },[submissions])

  useEffect(() => {

    let cats = {}
    
    for (question in questions) {
      const cat = questions[question].category
      const isCorrect = questions[question].status == "correct" ? 1 : 0
      if (cats[cat]) {
        cats[cat] = [cats[cat][0] + isCorrect, cats[cat][1] + 1]
      } else {
        cats[cat] = [0, 1]
      }
    }

    setCategories(cats)
  },[questions])

  return (
    <>
      <div id="root">
        {Object.keys(categories)?.map((category) => (
          <div className="category" key={category}>
            <h2>{category} - {categories[category][0]} "/" {categories[category][1]}</h2>
            { questions?.map((question) => (
                question.category === category && (
                  <div id={question.id} key={question.id} className='question'>
                    <div className={`status ${question.status}`} />
                    <h3>{question.name}</h3>
                  </div>
                )
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
