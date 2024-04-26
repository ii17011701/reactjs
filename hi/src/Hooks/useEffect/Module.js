
// Modal.js
// import React from 'react';

// const Module = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Modal title</h5>
//             <button type="button" className="close" onClick={onClose}>
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             {children}
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module;




// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>Close</button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;




