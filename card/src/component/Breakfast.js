//import './App.css'; 
import idli from './img/idli.jpg';
import dosa from './img/dosa.jpg';
import paddu from './img/paddu.jpg';
import puri from './img/puri.jpg';
import uppma from './img/uppma.jpg';
function Breakfast() { 
    return ( 
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-2">

    {/*------idli-------- */}
      <div class="card" style={{width: "13rem"}}>
  <img src={idli} className="card-img-top" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={dosa} className="card-img-top" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={paddu} className="card-img-top" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={puri} className="card-img-top" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={uppma} className="card-img-top" alt="..." />
  </div></div>
  </div></div>
    
    
    
    </>
    );
    }
    
    export default Breakfast;
    