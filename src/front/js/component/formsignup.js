import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Formsignup = () => {

    const { store, actions } = useContext(Context);

    function submitForm(e){
		e.preventDefault()
        console.log ("send signup")
		const formData = new FormData(e.target);
        const datasignup ={};
        for(const entrada of formData.entries()){
			console.log(entrada)
            datasignup[entrada[0]]=entrada[1];
					
		};
        actions.userRegister(datasignup);
        }

	return (
		<form onSubmit={submitForm}>
            <div className="form-group m-2">
                <label htmlFor="email"> Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group m-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
            </div>
            
            <div className="form-group m-2">
                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" className="form-control" id="birthdate"  name= "birthdate" placeholder="Birthdate"/>
            </div>
            <div className="form-group m-2">
                <label htmlFor="hobbies">Hobbies</label>
                <input type="text" className="form-control" id="hobbies" name= "hobbies" placeholder="Hobbies"/>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary m-3">Send</button>
            </div>
        </form>
	);
};
