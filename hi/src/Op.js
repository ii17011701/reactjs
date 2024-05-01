import React from "react";
import AppContext from "./Hooks/useContext/AppContext";
import ChildComponent from "./Hooks/useContext/ChildComponent";
import Toggle from './Hooks/useContext/Toggle';
function App() {
  return (
    <>
    <AppContext.Provider value="Hello from Context!">
            <ChildComponent />
         {" "}
    </AppContext.Provider>

    <br />
    <Toggle />
    </>
  );
}

export default App;
