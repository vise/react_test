import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field1: ${val}`);
  }, [val])
  
  return (
    <>
      <label>
        Input 1:
        <input 
          value={val} 
          onChange={e => setVal(e.target.value)} 
        />
      </label>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
