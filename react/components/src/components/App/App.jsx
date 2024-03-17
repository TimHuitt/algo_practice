import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ data, setData ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ word, setWord ] = useState('TESTING')
  const [ boardData, setBoardData ] = useState([
    {'00': 't','01': 'e','02': 's','03': 't','04': '!'},
    {'10': '','11': '','12': '','13': '','14': ''},
    {'20': '','21': '','22': '','23': '','24': ''},
    {'30': '','31': '','32': '','33': '','34': ''},
    {'40': '','41': '','42': '','43': '','44': ''},
    {'50': '','51': '','52': '','53': '','54': ''},
  ])

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

  
  const board = (
    <>
      {Array.from(Array(6).keys()).map((i) => (
        <div key={`line-${i}`} className="line">
          {Array.from(Array(5).keys()).map((index) => (
            <div className='tile'>
              {boardData[i][`${i}${index}`]}
            </div>
          ))}
        </div>
      ))}
    </>
  )
  

  return (
    <div className='board'>
      {word}
      {board}
      <br />
    </div>
  )
}

export default App;
