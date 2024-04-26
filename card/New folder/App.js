// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// // import Index from'./Edyoda/index'
// import Api from'./components/Api.js';
// function App() {
//   return (
//     <div classNameName="App">
//       <Api/>
//       {/* <Index/> */}
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Index from './components/Index';
// import Home from './components/Home';

// function App() {
//   return (
//     <div classNameName="App">
//       <Router>
//         <ul>
//           <li>
//             <NavLink to='/home'>Home</NavLink>
//           </li>
//         </ul>
//         <Index />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// App.js
// App.js
// App.js
// import React from 'react';
// import { connect } from 'react-redux';

// const App = ({ user, counter, setUser, increment, decrement }) => {
//   const handleSetUser = () => {
//     console.log('Setting user to John');
//     setUser('John');
//   };

//   return (
//     <div>
//       <h1>Redux Example App</h1>
//       <div>
//         <p>User: {user.name}</p>
//         <button onClick={handleSetUser}>Set User</button>
//       </div>
//       <div>
//         <p>Counter: {counter}</p>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   user: state.user,
//   counter: state.counter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setUser: (name) => {
//     console.log('Dispatching SET_USER action with name:', name);
//     dispatch({ type: 'SET_USER', payload: name });
//   },
//   increment: () => dispatch({ type: 'INCREMENT' }),
//   decrement: () => dispatch({ type: 'DECREMENT' }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);


// import React from 'react';
// import Greeting from './Greeting';

// const App = () => {
//   return (
//     <div>
//       <Greeting name="Alice" message="Welcome to React!" />
//       <Greeting name="Bob" message="Have a great day!" />
//     </div>
//   );
// };

// export default App;


// import React from 'react';


// const App = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//           </div>
//   );
// };

// export default App;

// import React from 'react';
// // import TextEditor from './components/TextEditor';
// import ColorGenerator from './components/ColorGenerator';

// const App = () => {
//   return (
//     <div>
//       <h1>Simple Text Editor</h1>
//       {/* <TextEditor /> */}
//       <ColorGenerator/>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// // import RecipeCard from './components/RecipeCard'; // Assuming the RecipeCard component is in a separate file
// import Spaghetti from './components/Spaghetti';
// // import Navbar from './Navbar';
// import { Card } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <h1>Recipe Book</h1>
//       {/* <Navbar/> */}
//       {/* <RecipeCard
//         title="Chocolate Chip Cookies"
//         ingredients={['1 cup butter', '1 cup sugar', '2 cups flour', '1 tsp vanilla', '1 cup chocolate chips']}
//         instructions={['Preheat oven to 350°F.', 'Mix ingredients together.', 'Spoon dough onto baking sheet.', 'Bake for 10-12 minutes.']}
//         image="https://example.com/chocolate-chip-cookies.jpg"
//       /> */}
//         <Card style={{width:'500px',backgroundColor:'aliceblue'}}>
//       <Spaghetti
//         title="Spaghetti Carbonara"
//         ingredients={['200g spaghetti', '100g pancetta', '2 eggs', '50g Parmesan cheese', 'Salt and pepper to taste']}
//         instructions={['Cook spaghetti according to package instructions.', 'Fry pancetta until crispy.', 'Whisk eggs and Parmesan cheese in a bowl.', 'Mix cooked spaghetti with pancetta and egg mixture.', 'Season with salt and pepper.']}
//         image="https://example.com/spaghetti-carbonara.jpg"
//       />
//       </Card>
//       {/* <Spaghetti
//         title="Chicken Stir-Fry"
//         ingredients={['2 chicken breasts', '1 bell pepper', '1 onion', '2 cloves garlic', '2 tbsp soy sauce', '2 tbsp vegetable oil']}
//         instructions={['Cut chicken into bite-sized pieces.', 'Slice bell pepper, onion, and garlic.', 'Heat oil in a pan and sauté garlic.', 'Add chicken and cook until browned.', 'Add bell pepper and onion, then stir in soy sauce.', 'Cook until vegetables are tender.']}
//         image="https://example.com/chicken-stir-fry.jpg"
//       />
//       <RecipeCard
//         title="Vegetable Curry"
//         ingredients={['1 onion', '2 carrots', '1 potato', '1 cup cauliflower florets', '1 cup peas', '2 tbsp curry powder', '1 can coconut milk']}
//         instructions={['Chop onion, carrots, and potato.', 'Heat oil in a pan and sauté onion until translucent.', 'Add chopped vegetables and curry powder, stir well.', 'Pour in coconut milk and simmer until vegetables are cooked.', 'Serve with rice or naan.']}
//         image="https://example.com/vegetable-curry.jpg"
//       /> */}
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// // import All from './components/All';
// import Breakfast from './components/Breakfast';
// import Lunch from './components/Lunch';
// import Dinner from './components/Dinner';

// const App = () => {
//   const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

//   return (
//     <Router>
//       <div>
//         <Navbar categories={categories} />
//         {/* <Route exact path="/" component={All} /> */}
//         <Route path="/breakfast" component={Breakfast} />
//         <Route path="/lunch" component={Lunch} />
//         <Route path="/dinner" component={Dinner} />
//         {/* Add more routes for other categories */}
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  // Define lunchMenu and dinnerMenu here
  const lunchMenu = ['Burger', 'Sandwich', 'Salad','pizza'];
  const dinnerMenu = ['Steak', 'Pasta', 'Fish'];

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Component1 lunchMenu={lunchMenu} dinnerMenu={dinnerMenu} />} />
          {/* No need to pass lunchMenu and dinnerMenu here */}
          <Route path="/lunch" element={<Component2 menu={lunchMenu} />} />

          <Route path="/dinner" element={<Component3 menu={dinnerMenu} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
