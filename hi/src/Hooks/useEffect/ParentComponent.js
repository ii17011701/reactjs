
// ParentComponent.js
// import React, { useState } from 'react';
// import Module from './Module';

// const ParentComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//          <>
//   <button className="nav-link btn btn-link" onClick={handleOpenModal}>Open Modal</button>
          
         
//       <Module isOpen={isModalOpen} onClose={handleCloseModal}>
//         <h2>Modal Content</h2>
//         <p>This is the content of the modal.</p>
//       </Module>
//       </>
  
//   );
// };

// export default ParentComponent;





import React, { useState } from 'react';
import Module from './Module';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Module isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Module>
    </div>
  );
};

export default ParentComponent;

