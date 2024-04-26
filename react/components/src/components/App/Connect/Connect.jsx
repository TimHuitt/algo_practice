import React, { useState, useEffect } from 'react';


export default function ConnectFour() {
  const [ winner, setWinner ] = useState(1)
  const [ restart, setRestart ] = useState(true)
  const [ board, setBoard ] = useState([])

  useEffect(() => {
    let b = Array(7).fill([])

    b.map((col, i) => {
      b[i] = Array(6).fill(0)
    })

    setBoard(b)

  },[])


  return (
    <>
      { winner > 0 &&
        <h1>Winner</h1>
      }
      <div className="board">
        { board.map((col, i) => (
          <div className="column" key={`col-${i}`}>
            { col.map((cell, j) => (
              <div className="tile" key={`col-${i}${j}`}>{i,j}</div>
            ))}
          </div>
        ))}
      </div>
      { restart &&
        <button>Restart</button>
      }
    </>
  );
}