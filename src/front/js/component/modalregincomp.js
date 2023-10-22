import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const ModalRegincomp = ( ) => {
    const { store, actions } = useContext(Context);
return (
        <div className= "modal" tabIndex={1} role="dialog" style={{display:store.openMregister}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Registered User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                    </button>
                
            </div>
            <div className="modal-body">
                <p>Please fill out the form completely.</p>
            </div>
            <div className="modal-footer">
            
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            
            </div>
            </div>
        </div>
        </div>
);
};