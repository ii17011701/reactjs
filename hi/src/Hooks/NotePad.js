//⁡⁢⁢​‌‍‌⁡⁢⁣⁡⁢⁣⁢<<<<<<-------------𝗡𝗼𝘁𝗲𝗽𝗮𝗱---------------->>>>>>​⁡

 import React, { useState } from "react";
import '/src/Op.css';
const Notepad = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='oop'>
      <h1>Simple Notepad</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{ width: '100%', height: '300px', fontSize: '1.3rem' }}
      />
      <p>Characters Count: {text.length}</p>
    </div>
  );
};

export default Notepad;