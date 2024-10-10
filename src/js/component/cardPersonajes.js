import React from "react";


import { Link } from "react-router-dom";

export const CardPersonajes = ({uid, type, name, gender, hair_color, eye_color}) => {
	return (
	
        <>
       
        <div className="card mx-1" style={{ minWidth: "18rem" }}>
			<img src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {name}</h5>
				<p className="card-text">{gender}</p>
				<p className="card-text">{hair_color}</p>
				<p className="card-text">{eye_color}</p>
				<Link to={`/details/${type}/${uid}`} className="btn btn-primary">Learn more!</Link>
				
			</div>
		</div>
        
        
        </>
        
        
        
		
	);
};