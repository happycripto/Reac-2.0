// import React from 'react';

// const SixImages = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <div style={{ display: 'flex', width: '100%', marginBottom: '1rem' }}>
//         <div style={{ width: '25%' }}>
//           <img src="masajes-con-piedras-clientes.png" alt="imagen 1" style={{ width: '100%' }} />
//         </div>
//         <div style={{ width: '50%' }}>
//           <img src="masajes-relajantes.png" alt="imagen 2" style={{ width: '100%' }} />
//         </div>
//         <div style={{ width: '25%' }}>
//           <img src="masajes-relajantes.png" alt="imagen 3" style={{ width: '100%' }} />
//         </div>
//       </div>
//       <div style={{ display: 'flex', width: '100%' }}>
//         <div style={{ width: '33.33%' }}>
//           <img src="masajes-relajantes.png" alt="imagen 4" style={{ width: '100%' }} />
//         </div>
//         <div style={{ width: '33.33%' }}>
//           <img src="masajes-relajantes.png" alt="imagen 5" style={{ width: '100%' }} />
//         </div>
//         <div style={{ width: '33.33%' }}>
//           <img src="masajes-relajantes.png" alt="imagen 6" style={{ width: '100%' }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SixImages;

import React from "react";
import "./ImgContainer.css";

function ImageGrid() {
  return (
    <div className="grid-container">
      <div className="grid-item big">
        <img src="masajes-relajantes.png" alt="image1" />
      </div>
      <div className="grid-item small">
        <img src="masajes-con-piedras-clientes.png" alt="image2" />
      </div>
      <div className="grid-item small">
        <img src="reflexologia.png" alt="image3" />
      </div>
      <div className="grid-item small">
        <img src="peeling.png" alt="image4" />
      </div>
      <div className="grid-item small">
        <img src="pulido-e-hidratacion.png" alt="image5" />
      </div>
      <div className="grid-item small">
        <img src="microdermoabrasion.png" alt="image6" />
      </div>
    </div>
  );
}

export default ImageGrid;
