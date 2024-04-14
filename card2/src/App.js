
import './App.css';
import All from './component/All';
import Breakfast from './component/Breakfast';
import Dinner from './component/Dinner';
import Lunch from './component/Lunch';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min';

function App(){
  return (
  <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        {/* <nav>
          <ul>
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          </ul>
        </nav> */}




        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a className="navbar-brand">Cards</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">All</a>
        <a class="nav-link" href="#">Breakfast</a>
        <a class="nav-link" href="#">Lunch</a>
        <a class="nav-link" href="#">Dinner</a>
      </div>
    </div>
  </div>
</nav>
      </div>

    </div>
  </div>

<br />




  
    <div>
     <All />
     <Breakfast />
     <Lunch />
     <Dinner />
    </div>
    </>
  );
}

export default App;
