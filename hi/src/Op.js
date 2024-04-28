import React from "react";
import { useState } from "react";
const Op = () => {
   const [hi, setHi] = useState("op");
   return (
   <>
   <p>hi</p>
   <p>{hi}</p>
   <button onClick={() => setHi("op in the chat")}>click me</button>
   </>
)

}

export default Op;