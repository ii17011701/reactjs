// CakeContainer.js
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './Action';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);


























// import React from 'react';
// import { connect } from 'react-redux';
// import { buyCake } from './Action'; // Corrected import

// const CakeContainer = (props) => {
//   return (
//     <div>
//       <h2>Number of Cakes: {props.numOfCakes}</h2>
//       <button onClick={props.buyCake}>Buy Cake</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.cakeReducer.numOfCakes // Access numOfCakes from state.cakeReducer
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
