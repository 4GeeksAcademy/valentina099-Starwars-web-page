import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            <Link to="/" className="navbar-brand mb-0  mx-5 h1">
            <img 
                src="https://pngimg.com/d/star_wars_logo_PNG5.png" 
                style={{ height: '100px', maxHeight: '50px' }} 
                id="starwarslogo"
            />

            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button 
                        className="btn btn-warning dropdown-toggle mx-5" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Favorites({store.favorites ? store.favorites.length : 0})
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((fav, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#">
                                    {fav.properties.name}
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => actions.removeCharacterFavorites(fav.uid)}
                                    >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </a>
                            </li>
                        ))
                    ) : (
                        <li><span className="dropdown-item">No favorites yet</span></li>
                    )}
                </ul>
                </div>
            </div>
        </nav>
    );
};