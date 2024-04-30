// import React, { useRef, useState } from "react";
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// import "./Login.css";

// function Login() {
//   // const inputRef = useRef(null);
//   // const [error, setError] = useState('');


//   // // Function to focus on the input field
//   // const focusInput = (e) => {
//   //   e.preventDefault();
//   //   const inputValue = inputRef.current.value;

//   //   if(inputValue.length < 5) {
//   //     setError("Input must be at least 5 characters long");
//   //   } else {
//   //     setError('');
//   //   }
//   // };
//   // function LoginForm() {
//     const usernameRef = useRef(null);
//     const passwordRef = useRef(null);
//     const inputRef = useRef(null);
//     const [error, setError] = useState('');
//     // const focusInput = () => {
//     //   inputRef.current.focus();
//     // }

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const username = usernameRef.current.value;
//       const password = passwordRef.current.value;
//       const focusInput = () => {
//         // Validate username and password
//         if (!username || !password) {
//         inputRef.current.focus();
//         setError('Please enter both username and password.');
//       } else if (password.length < 6) {
//         setError('Password must be at least 6 characters long.');
//       } else {
//         // Clear error and submit form
//         setError('');
//         // Submit logic here
//         document.write('Username:', username); <br />
//         document.write('Password:', password);
//       }}
//     };




//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div class="form-group">
//           <label for="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             ref={usernameRef}
//           />
//           {/* {error && <p style={{color: "red"}}>{error}</p>} */}
//           <small id="emailHelp" class="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             ref={passwordRef}
//           />
//                     {error && <p style={{color: "red"}}>{error}</p>}

//         </div>
//         <div class="form-group form-check">
//           <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//           <label class="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" class="btn btn-primary" onClick={focusInput}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }
// export default Login;



import React, { useRef, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputRef) => {
    setFocusedInput(inputRef);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      if (!username) {
        usernameRef.current.focus();
        setError('Please enter username.');
      } else {
        passwordRef.current.focus();
        setError('Please enter password.');
      }
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      passwordRef.current.focus();
    } else {
      setError('');
      // Submit logic here
      document.write('Username:', username); <br />
      document.write('Password:', password);
    }
  };
 
  return (
    <>
  
      
         
      <form onSubmit={handleSubmit}>
        <div className="form-group formcen">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className={`form-control ${focusedInput === usernameRef.current && error ? 'input-error' : ''}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={usernameRef}
            onFocus={() => handleFocus(usernameRef.current)}
            onBlur={handleBlur}
            placeholder="Enter username"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        {/* <div className="error-message">
          {error && <p className="text-danger">{error}</p>}
        </div> */}
        <div className="form-group formcen">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className={`form-control ${focusedInput === passwordRef.current && error ? 'input-error' : ''}`}
            id="exampleInputPassword1"
            ref={passwordRef}
            onFocus={() => handleFocus(passwordRef.current)}
            onBlur={handleBlur}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group form-check formcen">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        {/* <div class="formcen1"> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* </div> */}
        <div className="error-message">
          {error && <p className="text-danger">{error}</p>}
        </div>
      </form>
        
    </>
  );
}

export default Login;






