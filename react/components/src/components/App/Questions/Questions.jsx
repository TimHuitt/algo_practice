import React, { useState, useEffect } from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [ questions, setQuestions ] = useState(null)
  const [ submissions, setSubmissions ] = useState(null)
  const [ categories, setCategories ] = useState([])

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
    for (question in questions) {
      const cat = questions[question].category
      if (!categories.includes(cat)) {
        categories.push(cat)
      }
    }
    if (questions && submissions) {
      const updatedData = questions.map(question => {
        let status = submissions.find(status => status.questionId === question.id)
        if (status) {
          switch (status.status) {
            case "CORRECT":
              status = "correct"
              break
            case "INCORRECT":
              status = "correct"
              break
            case "PARTIALLY_CORRECT":
              status = "correct"
              break
            default:
              break
          }
        }
        return status ? { ...question, status: status.status } : question
      })
      setQuestions(updatedData)
    }

  },[questions, submissions])

  return (
    <>
      <div id="root">
        {JSON.stringify(questions)}
        {categories?.map((category) => (
          <div className="category">
            <h2>{category}</h2>
            { questions?.map((question) => (
                question.category === category && (
                  <div id="{question.id}" className='question'>
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

// [{"id":"sign-up-form","name":"Sign-Up Form","category":"HTML"},]
// 
// [{"questionId":"sign-up-form","status":"CORRECT"}]

// {"id":"sign-up-form","name":"Sign-Up Form","category":"HTML"}

// [{"id":"sign-up-form","name":"Sign-Up Form","category":"HTML"},{"id":"item-cart","name":"Item Cart","category":"HTML"},{"id":"spaghetti-recipe","name":"Spaghetti Recipe","category":"HTML"},{"id":"blog-post","name":"Blog Post","category":"HTML"},{"id":"rainbow-circles","name":"Rainbow Circles","category":"CSS"},{"id":"navbar","name":"Navbar","category":"CSS"},{"id":"pig-emoji","name":"Pig Emoji","category":"CSS"},{"id":"purchase-form","name":"Purchase Form","category":"CSS"},{"id":"algoexpert-products","name":"AlgoExpert Products","category":"CSS"},{"id":"testing-framework","name":"Testing Framework","category":"JavaScript"},{"id":"array-methods","name":"Array Methods","category":"JavaScript"},{"id":"event-target","name":"Event Target","category":"JavaScript"},{"id":"debounce","name":"Debounce","category":"JavaScript"},{"id":"this-binding","name":"This Binding","category":"JavaScript"},{"id":"promisify","name":"Promisify","category":"JavaScript"},{"id":"throttle","name":"Throttle","category":"JavaScript"},{"id":"curry","name":"Curry","category":"JavaScript"},{"id":"infinite-scroll","name":"Infinite Scroll","category":"DOM Manipulation"},{"id":"stopwatch","name":"Stopwatch","category":"DOM Manipulation"},{"id":"tic-tac-toe","name":"Tic Tac Toe","category":"DOM Manipulation"},{"id":"todo-list","name":"Todo List","category":"DOM Manipulation"},{"id":"typeahead","name":"Typeahead","category":"DOM Manipulation"},{"id":"tier-list","name":"Tier List","category":"DOM Manipulation"},{"id":"toasts","name":"Toasts","category":"DOM Manipulation"},{"id":"sudoku","name":"Sudoku","category":"DOM Manipulation"},{"id":"questions-list","name":"Questions List","category":"DOM Manipulation"}]
// 
// [{"questionId":"blog-post","status":"CORRECT"},{"questionId":"throttle","status":"INCORRECT"},{"questionId":"stopwatch","status":"PARTIALLY_CORRECT"},{"questionId":"pig-emoji","status":"CORRECT"},{"questionId":"todo-list","status":"CORRECT"},{"questionId":"testing-framework","status":"CORRECT"},{"questionId":"array-methods","status":"INCORRECT"},{"questionId":"spaghetti-recipe","status":"PARTIALLY_CORRECT"},{"questionId":"algoexpert-products","status":"PARTIALLY_CORRECT"},{"questionId":"curry","status":"CORRECT"},{"questionId":"toasts","status":"INCORRECT"},{"questionId":"tic-tac-toe","status":"CORRECT"},{"questionId":"event-target","status":"CORRECT"},{"questionId":"debounce","status":"PARTIALLY_CORRECT"},{"questionId":"item-cart","status":"CORRECT"},{"questionId":"typeahead","status":"CORRECT"},{"questionId":"tier-list","status":"PARTIALLY_CORRECT"},{"questionId":"sudoku","status":"CORRECT"},{"questionId":"rainbow-circles","status":"INCORRECT"},{"questionId":"infinite-scroll","status":"CORRECT"},{"questionId":"navbar","status":"PARTIALLY_CORRECT"}]