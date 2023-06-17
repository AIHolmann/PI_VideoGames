import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <button onClick={props.handleReload}>Reload videogames</button>
      <Link to="/videogame">Create videogame!</Link>
      <h2>Hola, soy la barra de navegacion</h2>
      <SearchBar />
    </div>
  );
};

export default NavBar;
