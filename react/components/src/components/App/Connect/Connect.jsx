import React, { useState, useEffect } from 'react';


export default function ConnectFour() {
  const [ winner, setWinner ] = useState(1)
  const [ restart, setRestart ] = useState(true)
  const [ showRestart, setShowRestart ] = useState(true)
  const [ board, setBoard ] = useState([])
  const [ player, setPlayer ] = useState(1)

  useEffect(() => {
    let b = Array(7).fill(null).map(() => Array(6).fill(0))
    setBoard(b)
    // setShowRestart(0)
    setRestart(0)
  },[restart])

  useEffect(() => {
    setPlayer(prev => prev === 1 ? 2 : 1)
  },[board])

  const handleClick = (e) => {
    const getRow = (col) => {
      for (let i = 0; i < board[col].length; i++) {
        if (board[col][i] !== 0) return i - 1
      }
      return 5
    }

    setBoard(currentBoard => {
      const col = parseInt(e.target.id.slice(0,1))
      const row = getRow(col)
      const newBoard = currentBoard.map((c) => [...c])
      newBoard[col][row] = player
      return newBoard
    })
  }

  const handleRestart = () => { setRestart(1) }

  const checkWinner = () => {
    // loop
      // if same index of 4 col = 1 or 2
      // if index + 1 of 4 cols = 1 or 2
      // if index - 1 of 4 cols = 1 or 2
  }


  return (
    <>
      { winner > 0 &&
        <h1>{JSON.stringify(board)}</h1>
      }
      <div className="board">
        { board.map((col, i) => (
          <div className="column" id={`${i}`} key={`col-${i}`}>
            { col.map((cell, j) => (
              <div className="tile" id={`${i}${j}`} key={`col-${i}${j}`} onClick={handleClick}>
                  <div id={`${i}0`} className={`${board[i][j] === 1 ? "player player-1" : board[i][j] === 2 ? "player player-2" : ""}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
      { showRestart &&
        <button onClick={handleRestart}>Restart</button>
      }
    </>
  );
}