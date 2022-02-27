import React from "react";
import "../Pages/Styles/Modal.css";

const Modal = ({children}) => {
  return (
    <div className="modal">
      <div className="modal__Container">
        <button className="close_modal"></button>
        <div className="content">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
