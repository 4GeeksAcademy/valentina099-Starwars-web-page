import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CardPersonajes } from "../component/cardPersonajes.js";
import { Planets } from "../component/planets.js";
export const Home = () => { 
const {store} = useContext(Context)

	
	return (

		<>
			<div className="container mt-2">
				<h2 className="text-danger">Characters</h2>
				<hr/>
			</div>
			<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">
					{store.people == null ? <h1>Cargando personajes...</h1> :
					store.people == false ? <h1 className="text-danger">Error al cargar los personajes</h1>:
					store.people && store.people.length > 0 && store.people.map(character => {
						return(
							<CardPersonajes key={`character-${character.url.split("/")[5]}`} uid={character.url.split("/")[5]} type="characters" name={character.name} gender={character.gender} hair_color={character.hair_color} eye_color={character.eye_color}/>
						)
					})}
						</div>
			</div>

				<div className="container mt-2">
				<h2 className="text-danger">Planetas</h2>
				<hr/>
				</div>
				<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">

					{store.planets == null ? <h1>Cargando planetas...</h1> :
					store.planets == false ? <h1 className="text-danger">Error al cargar los planetas</h1>:
					store.planets && store.planets.length > 0 && store.planets.map(planets => {
						return(
							<Planets key={`planets-${planets.url.split("/")[5]}`} uid={planets.url.split("/")[5]} type="planets" name={planets.name} population={planets.population} diameterr={planets.diameter}/>
						)
					})}
				</div>
			</div>
	
		</>
		
	


);

}
