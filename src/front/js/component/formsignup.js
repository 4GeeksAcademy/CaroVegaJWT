import React from "react";



export const Formsignup = () => {
	return (
		<form>
            <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1"> Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group m-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            
            <div className="form-group m-2">
                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" className="form-control" id="birthdate" placeholder="Birthdate"/>
            </div>
            <div className="form-group m-2">
                <label htmlFor="hobbies">Hobbies</label>
                <input type="text" className="form-control" id="hobbies" placeholder="Hobbies"/>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary m-3">Send</button>
            </div>
        </form>
	);
};
