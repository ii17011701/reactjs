import React, { useRef } from 'react';

const MyComponent = () => {
  // Create a ref for the input field
  const inputRef = useRef(null);

  // Function to focus on the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Input field */}
      <input type="text" ref={inputRef} />

      {/* Button to focus on the input field */}
      <button onClick={focusInput}>Focus on Input</button>
    </div>
  );
};

export default MyComponent;
