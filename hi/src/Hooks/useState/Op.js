import React, { useState } from "react";
     
const State1 = () => {
  const  [hi, setHi] = useState('hii');
<>
    <p>{hi}</p>
    <button onClick={() => setHi("hello")}>click</button>
    </>    
}
// const op = () => {
//     <div>op</div>
// }

export default State1;

