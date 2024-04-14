//import './App.css'; 
import logo from './img/logo.jpg';
import './css/Footer.css';
function Footer() { 
return ( 
<div>
  {/* Footer */}
     
{/* <!-- --------------------------footer---------- --> */}
<div className="container">
        <div className="row footer">
            <div className="col-sm-3 footertxt">
                <h5>Telephone</h5>
                <p>+91 6361929442 <br />
                6361929442</p>
            </div>

            <div className="col-sm-3 footertxt">
                <h5>E-mail Us</h5>
                <p>forbusiness@jyesta.com</p>
            </div>

            <div className="col-sm-3 footertxt">
                <h5>Address</h5>
                <p>#15 road,Layout <br />
                opp, karisma hospital <br />
                saraswathipuram, Mysuru-580009</p>
            </div>
            <div className="col-sm-3 footerimg">
                <img src={logo} alt="logo" />
            </div>
        </div>
     </div>

{/* <!---------------------- copyright---------------------------- --> */}
     <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 coptright">
                 <p>Copyright &copy; 2024 Jyesta Construction&nbsp;&nbsp;|&nbsp;&nbsp;<span style={{color: "blue", fontWeight: "bold"}}>A</span>nonymous</p>
            </div>
        </div>
     </div>
</div>
);
}

export default Footer;
