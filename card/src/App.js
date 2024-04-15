import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import All from './component/All';
import Breakfast from './component/Breakfast';
import Dinner from './component/Dinner';
import Lunch from './component/Lunch';


function App(){
  
  const breakfastMenu = ['idli', 'dosa', 'paddu','puri','uppma'];
  const lunchMenu = ['Frice', 'chapati', 'colorRice','pallav','pallav2', 'pallav3', 'rice','riceAndsam','roti','rice2'];
  const dinnerMenu = ['rice2', 'roti', 'riceAndsam','rice','pallav3', 'pallav2', 'pallav','colorRice','chapati','Frice'];

  return (
    <>
 <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<All breakfastMenu={breakfastMenu} lunchMenu={lunchMenu} dinnerMenu={dinnerMenu} />} />

          <Route path="/break" element={<Breakfast menu={breakfastMenu} />} />

          <Route path="/lunch" element={<Lunch menu={lunchMenu} />} />
          <Route path="/dinner" element={<Dinner menu={dinnerMenu} />} />

        </Routes>
      
    </BrowserRouter>
    </>
  );

}

export default App;
