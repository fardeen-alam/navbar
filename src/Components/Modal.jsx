import React, { useState } from "react";
import Backdrop from "./Backdrop";
import "./Modal.css";

function Modal(props) {
    function handleClick() {
        props.hideModal();
        props.delNotifyApp();
    }

    return (
        <div className="modal-container">
            <div className="modal-backdrop" onClick={props.hideModal}></div>
            <div className="modal-box">
                <div className="modal-text">
                    <h2>User will be deleted!</h2>
                    <p>User will be permanently deleted.</p>
                    <br/>
                    <p>Are you sure you want to delete this?</p>
                </div>
                <div className="modal-button">
                    <button onClick={handleClick} className="btn-yes">
                        Yes
                    </button>
                    <button onClick={props.hideModal} className="btn-no">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
