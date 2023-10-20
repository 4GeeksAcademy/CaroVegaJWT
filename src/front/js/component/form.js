import React from "react";



export const Form = () => {
	return (
		<form>
            <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group m-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <button type="submit" className="btn btn-primary m-3">Submit</button>
        </form>
	);
};
