import React, { useContext } from "react";
import AppContext from "./AppContext";

function ChildComponent() {
  const contextValue = useContext(AppContext);

  return <div>{contextValue}</div>;
}

export default ChildComponent;
