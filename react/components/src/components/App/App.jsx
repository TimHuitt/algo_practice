import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [ data, setData ] = useState(null)
  const [ word, setWord ] = useState('')
  

  useEffect(() => {
    const url = "/api/fe/wordle-words"
    axios.get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setDefaultResultOrder(err.response ? err.response.data : err.message)
      })

      
  }, [])

  useEffect(() => {
    if (data) {
      const rnd = Math.floor(Math.random() * data?.length)
      setWord(data[rnd])
    }
  }, [data])

  return (
    <div className='App'>
      {word}
    </div>
  )
}

export default App;
