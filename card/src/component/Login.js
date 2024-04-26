import React, { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './Login.css';

function Login({menu}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    
    setUsername('');
    setPassword('');
  };

  return (
    <>
    {/* <div className="card">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
</div> */}








            
<div>
      {isLoggedIn ? (
        <div>
           <div className="container-fluid">
        <div className="row">
        <div class="col bg-info text-center ">
          <h1>Welcome, {username}!</h1></div>
         </div> <br />
         <div className='d-flex justify-content-end'>
          <button onClick={handleLogout}>Logout</button>
         </div></div>
        </div>
      ) : (
<div className="main">
      <div className="container">
        <div className="row">
        <div class="col"></div>
          <div className="col">
 <form> 
  <div className="form-group formcen">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="Username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>

<br />


  <div className="form-group formcen">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"    placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
  </div>
  {/* <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}

<br />
<div class="formcen1">
  <button onClick={handleLogin} class="btn btn-primary">Login</button>
  </div>
 
</form> 
</div>
  <div class="col"></div>
        </div>
      </div>
      </div>
      )}
</div>










     </>
    



  );
}

export default Login;