import React from 'react';
import ImageComponent from './ImageComponent';
import '../styles/Modal.css';

function ModalComponent(props: any) {
  const { gif, closeModal } = props;
  console.log(gif);
  return (
    <div className="modalBox">
      <div className="modalContent">
        <button
          className="modalClose"
          type="button"
          onClick={() => {
            closeModal(false);
          }}
        >
          Close
        </button>
        <div className="modalTitle">
          <p className="modalGifTitle">{gif.title}</p>
        </div>
        <div className="modalFrame">
          <ImageComponent item={gif?.images?.original} />
        </div>
        <div className="modalFooter">original view</div>
      </div>
    </div>
  );
}
export default ModalComponent;
