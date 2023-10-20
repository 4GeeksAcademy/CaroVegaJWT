import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-end">
				
				<div className="buttonlogOut ">
					{store.session === true ?
					<>
						<Link to="/">
						<button className="btn btn-danger">Log Out </button>
						</Link>
					</>
					:<span></span>
					}
				</div>
			</div>
		</nav>
	);
};
