import React from 'react';

const WORD_LIST_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

export default function Wordle() {
  try {
    const data = fetch(WORD_LIST_API_URL)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  } catch (err) {
    console.error(err)
  }

  return (
    <div className="board">

    </div>
  );
}