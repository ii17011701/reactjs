// import React, { useState, useEffect} from "react";

// const TimerComponent = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(()  => {
//         const intervalId = setInterval(() =>  {   
//             setSeconds(preseconds => preseconds + 1); 
//         }, 1000);



//         return () => clearInterval(intervalId);
//     }, []);


//     return {
//         <div>
//         // <div>Timer</div>
//         <p>Seconds: {seconds}</p>
//         </div>
//     };


// export default TimerComponent;




//import './App.css'; 
import React, { useState, useEffect} from "react";
function App() { 
    const [seconds, setSeconds] = useState(0);

    useEffect(()  => {
        const intervalId = setInterval(() =>  {   
            setSeconds(preseconds => preseconds + 1); 
        }, 1000);



        return () => clearInterval(intervalId);
    }, []);
return ( 
<div className="App">
<p>Seconds: {seconds}</p>
</div>
);
}

export default App;
