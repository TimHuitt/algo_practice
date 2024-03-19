import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ data, setData ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ word, setWord ] = useState('TESTING')
  const [ boardData, setBoardData ] = useState(null)

  useEffect(() => {
    buildBoard()
    // const url = "/api/fe/wordle-words"
    // axios.get(url)
    //   .then((res) => {
    //     setData(res.data)
    //   })
    //   .catch((err) => {
    //     console.error(err.response ? err.response.data : err.message)
    //   })
  }, [])


  useEffect(() => {
    if (data) {
      const rnd = Math.floor(Math.random() * data?.length)
      setWord(data[rnd])
    }
  }, [data])

  const buildBoard = () => {
    const output = []
    const obj = {}
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        obj[`${i}${j}`] = ''
      }
    }
    setBoardData(obj)
  }

  const addToBoard = (pos, char) => {
    setBoardData((prev) => {
      const updatedData = {...prev}
      updatedData[pos] = char
      return updatedData
    })
  }
  
  const board = (
    <>
      { boardData ? (
        Array.from(Array(6).keys()).map((i) => (
          <div key={`line-${i}`} className={`line line-${i}`}>
            {Array.from(Array(5).keys()).map((index) => (
              <div key={`tile-${i}${index}`} className={`tile tile-${i}${index}`}>
                {boardData[`${i}${index}`]}
              </div>
            ))}
          </div>
        ))
      ) : (
        ''
      )}
    </>
  )
  

  return (
    <div className='board'>
      {word}
      {board}
      <br />
      {/* <button type="button" onClick={() => addToBoard('00', 'f')}>test</button> */}
    </div>
  )
}

export default App;
