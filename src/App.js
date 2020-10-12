import React, { useState } from 'react';

import './App.css';



function App() {
  //hooks
  const [input, setInput] = useState('')
  return (
    <div className="App">
       <h1>NaiTao Messenger</h1>
        <input value={input}/>
        <button>Message</button>
    </div>
  );
}


export default App;
