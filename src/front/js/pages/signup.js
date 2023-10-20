import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Formsignup } from "../component/formsignup";

export const Signup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div >
			<div className="text-center mt-5">
			<h1 className="m-3"> Signup</h1>
			</div>
			<div className="col-md-7 mx-auto">
				<Formsignup/>
			</div>
		</div>
	);
};

