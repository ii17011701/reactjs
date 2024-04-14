// import './App.css'; 
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/Body.css';
// import './css/font-awesome.min.css';
/* ----------images ---------*/
import banner from './img/banner.jpg';
import img1 from './img/construction (1).png';
import img2 from './img/interiorDesign.png';
import img3 from './img/worker.png';
import contImg from './img/cont-img.jpg';
import img from './img/img.jpg';
import serv from './img/serv-img.jpg';
function Body() { 
return ( 
<>
  {/* Body */}
  {/* <div className='container'>
    <div className='row'>
      <div className='col-sm-12'>
        hi 
      </div>
    </div>
  </div> */}


{/* <!-- banner --> */}
                <div class="banner">
                <img src={banner} alt="banner" />
            </div> 
<br /><br />


{/* <!-- our-services --> */}
   <div className="container">
    <div className="row">
        <div className="col-sm-12 our-service">
            <h5>OUR SERVICES</h5>
        </div>
        {/* <!-- <div class="col-sm-1"></div> --> */}
       
        <img src={img1} alt="construction" className="ourimg1" />
        <div className="col ourtxt">
           
            <h6>Civil Construction</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum.</p>
        </div>
        <img src={img2} alt="Interor Designing" className="ourimg2" />
        <div className="col ourtxt">
            <h6>Interor Designing</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum.</p>
        </div>
        <img src={img3} alt="Interor Designing" className="ourimg3" />
        <div className="col ourtxt">
            <h6>Consultany</h6>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum.</p>
        </div>
        {/* <!-- <div class="col-sm-1"></div> --> */}
    </div>
   </div>


   {/* <!-- big-img --> */}
   <div className="container d-flex justify-content-center">
    <div className="row">
        <div className="col-sm-12 con-img">
            <img src={contImg} alt="cont-img" />
        </div>
    </div>
   </div>
   <br /><br />




   {/* <!-- our-histroy --> */}
     <div className="container-fluid">
        <div className="row our-histroy-bg">
            <div className="col-sm-1"></div>
            <div className="col-sm-4 our-histroy">
                <h5>OUR HISTORY</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam laudantium doloremque rem voluptas qui dolorum quos error.</p>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt inventore optio minus veniam molestias sunt! Possimus recusandae architecto officia minima quidem sunt vel qui ea, error dolores.</small>
                <p className="our-history-but">Places</p>
            </div>
          
            <div className="col-sm-5 our-histroy-img">
                <img src={img} alt="our-histroy" />
            </div>
            <div className="col-sm-1"></div>
            </div>
        </div>




  {/* <!-- ---------------our-project------------- --> */}
    <div class="container">
        <div class="row our-project">
            <div class="col-sm-12 our-project-head"><h3>OUR PROJECTS</h3></div>
            <div class="col-sm-4">
                <img src={serv} alt="our-project" class="img1" />
            </div>
            <div class="col-sm-4">
                <img src={serv}  alt="our-project" class="img2" />
            </div>
            <div class="col-sm-4">
                <img src={serv}  alt="our-project" class="img3" />
            </div>
        


            <div class="col-sm-4">
                <img src={serv}  alt="our-project" class="img4" />
            </div>
            <div class="col-sm-4">
                <img src={serv}  alt="our-project" class="img5" />
            </div>
            <div class="col-sm-4">
                <img src={serv}  alt="our-project" class="img6" /> 
            </div>
        </div>
     </div>




{/* <!-- ---------------contect us--------------- --> */}
     <div className="container-fluid">
        <div className="row contect-us">
            
            <div className="col-sm-8">
                <h4>Do you need Professional to Project and build your dream home?</h4>
                <small>We offer the best organisation and builder to make your dream comes true </small>
            </div>
            <div className="col-sm-2 contect-us-right">
                <p>Contect Us </p>
            </div>
        </div>
     </div>




  

        
</>



);
}

export default Body;
