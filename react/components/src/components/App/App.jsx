import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ data, setData ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ word, setWord ] = useState('TESTING')
  const [ boardData, setBoardData ] = useState([]) 

//   useEffect(() => {
//     const url = "/api/fe/wordle-words"
//     axios.get(url)
//       .then((res) => {
//         setData(res.data)
//       })
//       .catch((err) => {
//         console.error(err.response ? err.response.data : err.message)
//       })
// 
//       
//   }, [])

  useEffect(() => {
    if (data) {
      const rnd = Math.floor(Math.random() * data?.length)
      setWord(data[rnd])
    }
  }, [data])

  const line = (i) => {
    return (
      <div key={`line-${i}`} className="line">
        {Array.from(Array(5).keys()).map((index) => (
          <div className='tile'>
            {`${i}-${index}`}
          </div>
        ))}
      </div>
    )}
  
  

  return (
    <div className='board'>
      {word}
      {Array.from(Array(6).keys()).map((index) => (
        line(index)
      ))}
      <br />
    </div>
  )
}

export default App;
