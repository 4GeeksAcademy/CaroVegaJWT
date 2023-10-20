import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Form = () => {
    
    const { store, actions } = useContext(Context);

    function submitForm(e){
		e.preventDefault()
        console.log ("send")
		const formData = new FormData(e.target);
        const datauser={};

        for(const entrada of formData.entries()){
			console.log(entrada)
			datauser[entrada[0]]=entrada[1];	
		};
        
		actions.login(datauser)		
		
	}

	return (
		<form onSubmit={submitForm}>
            <div className="form-group m-2">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group m-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name = "password" placeholder="Password"/>
            </div>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary m-3">Send</button>
            </div>
        </form>
	);
};
