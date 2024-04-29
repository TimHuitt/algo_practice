import React, { useState, useEffect } from 'react';

export default function ConnectFour() {
  const [ winner, setWinner ] = useState(0)
  const [ restart, setRestart ] = useState(true)
  const [ showRestart, setShowRestart ] = useState(false)
  const [ board, setBoard ] = useState([])
  const [ player, setPlayer ] = useState(0)

  useEffect(() => {
    let b = Array(7).fill(null).map(() => Array(6).fill(0))
    setBoard(b)
    setShowRestart(0)
    setRestart(0)
    setWinner(0)
  },[restart])

  useEffect(() => {
    const isWinner = checkWinner()
    setWinner(isWinner)
    if (isWinner) setShowRestart(true)
  },[board])

  const handleClick = (e) => {
    if (winner) return null

    const getRow = (col) => {
      for (let i = 0; i < board[col].length; i++) {
        if (board[col][i] !== 0) return i - 1
      }
      return 5
    }

    setBoard(currentBoard => {
      const col = parseInt(e.target.id.slice(0,1))
      const row = getRow(col)
      if (row <= 5 && row >= 0 && col <= 6 && col >= 0) {
        setPlayer(prev => prev === 1 ? 2 : 1)
      }

      const newBoard = currentBoard.map((c) => [...c])
      newBoard[col][row] = player
      return newBoard
    })
  }

  const handleRestart = () => { setRestart(1) }

  const checkWinner = () => {
    let win = 0
    const delta = {
      'vert': [1, 0],
      'hor': [0, 1],
      'desc': [1, 1],
      'asc': [1, -1],
    }
    
    for (let col = 0; col < board.length; col++) {
      for (let cell = 0; cell < board[col].length; cell++) {
        const current = board[col][cell]
        
        if (current > 0) {
          for (dir in delta) {
            let cells = []
            let x = cell
            let y = col

            for (let i = 0; i < 3; i++) {
              x = x + (1 * delta[dir][0])
              y = y + (1 * delta[dir][1])
              
              if (x > 5 || x < 0 || y > 6 || y < 0) {
                break
              } else {
                cells.push(board[y][x])
              }
            }
            if (cells && cells.length > 2) {
              if (cells.every((e) => e === 1) && current === 1) win = 1
              if (cells.every((e) => e === 2) && current === 2) win = 2
            }
          }
        }
      }
    }
    return win
  }

  return (
    <>
      { winner > 0 &&
        <h1>Player {winner} Wins</h1>
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