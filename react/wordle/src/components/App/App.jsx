import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)

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

  return (
    <div className='App'>
      <p>{data}</p>
    </div>
  )
}

export default App;
