import React, { useState } from 'react';

function Modal({ title, img }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{title}</h2>
            <img src={img} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
