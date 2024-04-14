import Header from './component/Header.js';
import './App.css';
import Body from './component/Body.js';
import Footer from './component/Footer.js';
import './component/css/responsive.css';
function App() {
  return (
    <div>
      {/* <div className="Header"> */}
      <Header/>
      <Body/>
      <Footer/>
    {/* </div> */}
    </div>
);
}

export default App;
