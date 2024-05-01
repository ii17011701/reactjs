
  import React from 'react';
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
  import Bar02 from './Component/Bar02';
  import Todo from './Component/Todo';
import Quiz from './Component/Quiz';
import Home from './Component/Home';
// import Module from './Hooks/useEffect/Module';
import ParentComponent from './Hooks/useEffect/ParentComponent';
import './Hooks/useEffect/ParentComponent.css';
import Timer from './Hooks/useEffect/Timer';
import TimerTwo from './Hooks/useEffect/TimerTwo';
// import useTictacToe from './Hooks/useReducer/useTicTacToe';
import TicTacToe from './Hooks/useReducer/TicTacToe';
import Login from './Hooks/UseRefer/Login';
import Op from './Op';






function hello() {
  return ( 



    <>
    
    <BrowserRouter>
    <Bar02 />
        <Routes>
          <Route path="/"  exact Component={Home}/>

          <Route path="/todo" exact Component={Todo} />

          <Route path="/quiz" exact Component={Quiz} />

          <Route path="/parent" exact Component={ParentComponent} />

          <Route path="/timer" exact Component={Timer} />

          <Route path="/timer-two" exact Component={TimerTwo} />
          {/* <TicTacToe boardSize={4} /> */}
          <Route path="/tictactoe" exact Component={TicTacToe} />

          <Route path="/refer" exact Component={Login} />

          <Route path="https://portfolio1701.netlify.app/" />

          <Route path="/toggle" exact Component={Op} />
        </Routes>
    </BrowserRouter>
   
</>

    
  );
}

// const Aa = () => {
// }

export default hello;




// import React from 'react';
// import ParentComponent from './Hooks/useEffect/ParentComponent';
// import './Hooks/useEffect/ParentComponent.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Modal Example</h1>
//       <ParentComponent />
//     </div>
//   );
// }

// export default App;

