import React from "react";
import "../Pages/Styles/Modal.css";

const Modal = ({ children, onClose }) => {
  setTimeout(onClose, 3000);
  return (
    <div className="modal">
      <div className="modal__Container">
        <div className="modal_Header">
          <p>Adicionado com Sucesso</p>
        </div>
        <div className="modal_content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
