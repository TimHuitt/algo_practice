import React, { useState, useEffect } from 'react';


export default function ConnectFour() {
  const [ winner, setWinner ] = useState(0)
  const [ restart, setRestart ] = useState(true)
  const [ showRestart, setShowRestart ] = useState(false)
  const [ board, setBoard ] = useState([])
  const [ player, setPlayer ] = useState(1)

  useEffect(() => {
    let b = Array(7).fill(null).map(() => Array(6).fill(0))
    setBoard(b)
    setShowRestart(0)
    setRestart(0)
    setWinner(0)
  },[restart])

  useEffect(() => {
    setPlayer(prev => prev === 1 ? 2 : 1)
    const isWinner = checkWinner()
    if (isWinner) setShowRestart(true)
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
    // if same index of 4 col = 1 or 2
    // if index + 1 of 4 cols = 1 or 2
    // if index - 1 of 4 cols = 1 or 2
    // if any 4 of 1 col = 1 or 2
    let isWinner = false
    let count = {'1': 0, '2': 0}

    board.map((e, i) => {
      e.map((f, j) => {
        if (f > 0) {
          count[f] += 1
        } else {
          count = {'1': 0, '2': 0}
        }
        
        if (count['1'] === 4) {
          isWinner = true
          setWinner(1)
        } else if (count['2'] === 4) {
          isWinner = true
          setWinner(2)
        }
      })
      
      count = {'1': 0, '2': 0}
    })
    return isWinner
  }


  return (
    <>
      { winner > 0 &&
        <h1>Winner!</h1>
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
      { showRestart ? (
        <button onClick={handleRestart}>Restart</button>
      ) : (
        ''
      )}
    </>
  );
}