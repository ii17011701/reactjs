import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import  './css/font-awesome.min.css';
// img files
import logo from './img/logo.jpg'
import { Fragment } from 'react';
function Header() { 
return ( 


<Fragment>
    
 {/*  -----------=----top contact  ---------==--------------- */}
    {/* <div className='container'>hi</div> */}
    <div className="container-fluid header-top">
        <div className="row">
            <div className="col">
                 {/* <h1>hi<i class="fa fa-user-circle" aria-hidden="true"></i></h1> */}
                <div className="header-top">
                    <div>
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+91-9164437777 / 9738436534&nbsp;&nbsp;|&nbsp;&nbsp;<i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;jaysta@gmail.com </p>
                </div>
                
                    <div className="header-top-right">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </div>
                    </div>
                </div>
                </div>
                </div>



{/*---------------------<!-- navbar -------------------------------> */}
     <div className="container-fluid">
        <div className="row">
            {/* <!-- <div class="col-sm-2"></div> --> */}
            <div className="col-sm-12">
                <nav className="navbar">
           <img src={logo} alt="logo" />
           {/* <!-- <div className="col-sm-2"></div> --> */}
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Product</li>
            <li>Contact</li>
            <li>Help</li>
           </ul>
        </nav>
    </div>
     </div>
     </div>
 
    </Fragment>

);
}

export default Header;
