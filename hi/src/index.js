import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import UserComponent from'./UserComponent';
import reportWebVitals from './reportWebVitals';
// import Input from './Hooks/useCallback/Drag';
// import useStateOne from './Hooks/useState/useStateOne';
// import Op from './Op';
// import Cake from './Cake';
// import Module from './Hooks/useEffect/Module';
// import CakeContainer  from './Redux/CakeContainer';
// import Store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <App />
{/* <Module /> */}

    {/* <Op /> */}
    {/* <useStateOne /> */}
    {/* <UserComponent /> */}
{/* <Input /> */}


{/* <Cake /> */}
{/* <CakeContainer /> */}
 {/* <Store /> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
