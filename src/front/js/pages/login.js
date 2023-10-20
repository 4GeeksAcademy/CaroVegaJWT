import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Form } from "../component/form";
import "../../styles/home.css";
import { Link } from 'react-router-dom';

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="text-center mt-5">
				<h1 className = "m-3">LOGIN</h1>
			</div>
			<div className = "col-md-7 mx-auto" >
				<Form/>

			</div>
			<div className="text-center">
				<Link to="/signup">
					<span>Do you want to register</span>
				</Link>
			</div>
		</div>
	);
};
