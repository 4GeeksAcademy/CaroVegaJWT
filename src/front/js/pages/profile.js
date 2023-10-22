import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	const formatBirthdate = (birthdate) => {
        const date = new Date(birthdate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // El mes es de 0 a 11, sumamos 1 para obtener el mes correcto
        const year = date.getFullYear();

        // Formateamos la fecha como "dd/mm/yyyy"
        return `${day}/${month}/${year}`;
    };
	
	return (
		<div className="container">
			<h1>{store.user.email}</h1>
			<h1>{formatBirthdate(store.user.birthdate)}</h1>
				
		</div>
	);
};
