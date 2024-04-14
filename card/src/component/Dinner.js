//import './App.css'; 
import Frice from './img/Frice.jpg';
import chapati from './img/chapati.jpg';
import colorRice from './img/colorRice.jpg';
import pallav from './img/pallav.jpg';
import pallav2 from './img/pallav2.jpg';
import pallav3 from './img/pallav3.jpg';
import rice from './img/rice.jpg';
import riceAndsam from './img/riceAndsam.jpg';
import roti from './img/roti.jpg';
import rice2 from './img/rice2.heic';
function Dinner() { 
    return ( 
    <>
    
    <div className="container-fluid">
    <div className="row">

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={chapati} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={roti} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={colorRice} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={pallav} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={pallav2} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={pallav3} className="card-img-top rounded" alt="..." />
  </div></div></div></div>

  <div className="container-fluid">
    <div className="row">

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={riceAndsam} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={rice} className="card-img-top rounded" alt="..." />
  </div></div>

  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={rice2} className="card-img-top rounded" alt="..." />
  </div></div>
  
  <div className="col-sm-2">
  <div class="card" style={{width: "13rem"}}>
  <img src={Frice} className="card-img-top rounded" alt="..." />
  </div></div>

  </div></div>
    
    
    
    </>
    );
    }
    
    export default Dinner;
    