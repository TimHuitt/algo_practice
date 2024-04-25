import React, { useState, useEffect } from 'react';

export default function TipCalculator() {
  const [ bill, setBill ] = useState(50)
  const [ tip, setTip ] = useState(18)
  const [ people, setPeople ] = useState(1)

  const total = (bill * (tip * .01)).toFixed(2)
  const each = (total / people).toFixed(2)

  return (
    <div id="root">
      <label htmlFor="bill">Bill</label>
      <input type="number" value={bill} min="1" id="bill" onChange={e => setBill(parseInt(e.target.value))}/>
      <label htmlFor="tip">Tip Percentage</label>
      <input type="number" value={tip} min="1" id="tip" onChange={e => setTip(parseInt(e.target.value))} />
      <label htmlFor="people">Number of People</label>
      <input type="number" value={people} min="1" id="people" onChange={e => setPeople(parseInt(e.target.value))} />
      <p>Total Tip: {`${isNaN(total) ? '-' : '$' + total}`}</p>
      <p>Tip Per Person: {`${isNaN(each) ? '-' : '$' + each}`}</p>

    </div>
  );
}