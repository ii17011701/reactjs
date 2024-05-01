







// import React, { useContext } from 'react';

// // Creating a context
// const ThemeContext = React.createContext();

// // Theme provider component
// const ThemeProvider = ({ children }) => {
//   const [text, setText] = React.useState('Hi');

//   const changeTheme = (color) => {
//     document.body.style.backgroundColor = color;
//   };

//   const toggleText = () => {
//     setText('Welcome to useContext');
//   };

//   return (
//     <ThemeContext.Provider value={{ changeTheme, toggleText, text }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Button component
// const ThemeButton = () => {
//   const { changeTheme, toggleText } = useContext(ThemeContext);

//   const handleThemeChange = () => {
//     changeTheme('#b5b1b0'); // Change background color to gray
//     toggleText(); // Change text to "Welcome to useContext"
//   };

//   return (
//     <button onClick={handleThemeChange}>
//       Change Background Color and Text
//     </button>
//   );
// };

// // App component
// const App = () => {
//   return (
//     <ThemeProvider>
//       <div>
//         {/* <h1>Welcome to useContext</h1> */}
//         <ThemeButton />
//         <TextDisplay />
//       </div>
//     </ThemeProvider>
//   );
// };

// const TextDisplay = () => {
//   const { text } = useContext(ThemeContext);

//   return <p>{text}</p>;
// };

// export default App;










import React, { useContext } from 'react';
import photo from './Bootstrap-Bootstrap-Bootstrap-toggles.svg';
import photo2 from './Text2.png';
// Creating a context
const ThemeContext = React.createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [text, setText] = React.useState('Hi');
  const [currentColorIndex, setCurrentColorIndex] = React.useState(0);
  const colors = ['#b5b1b0', '#ffffff']; // Array of colors to toggle between

  const changeTheme = () => {
    document.body.style.backgroundColor = colors[currentColorIndex];
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
  };

  const toggleText = () => {
    setText('Welcome to useContext');
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, toggleText, text }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Button component
const ThemeButton = () => {
  const { changeTheme, toggleText } = useContext(ThemeContext);

  const handleThemeChange = () => {
    changeTheme();
    toggleText();
  };

  return (
    <button onClick={handleThemeChange}>
     Change Background Color <img src={photo} alt="hi" /> and 
     Text <img src={photo2} alt="hi" style={{width:"23px"}} />
    </button>
  );
};

// App component
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeButton />
        <TextDisplay />
      </div>
    </ThemeProvider>
  );
};

const TextDisplay = () => {
  const { text } = useContext(ThemeContext);

  return <h2 className='d-flex justify-content-center align-items-center'>{text}</h2>;
};

export default App;
