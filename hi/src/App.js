// import ClassComponent from "./Component/ClassComponent"; 
  // import  CounterApp from './Component/CounterApp';
  import React from 'react';
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
  import Bar02 from './Component/Bar02';
  import Todo from './Component/Todo';
import Quiz from './Component/Quiz';
import Home from './Component/Home';
import Module from './Hooks/useEffect/Module';

// import FunctionalComponent from "./Component/FunctionalComponent";
// import '/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
// import ParentComponenet from './Component/ParentComponent';
// import './ParentComponent';
// import Main from "./Main";
// import slider2 from './slider2.png';
function hello() {
  return (
    <>
    
    <BrowserRouter>
    <Bar02 />
        <Routes>
          <Route path="/"  exact Component={Home}/>

          <Route path="/todo" exact Component={Todo} />

          <Route path="/quiz" exact Component={Quiz} />

          <Route path="/module" exact Component={Module} />
         
        </Routes>
      
    </BrowserRouter>
   
</>
    
  );
}

export default hello;
