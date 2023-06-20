import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const NavBar = (props) => {
  return (
    <div className={style.container}>
      <h2 className={style.welcome}>Welcome!</h2>
      <button onClick={props.handleReload} className={style.reload}>
        Reload videogames
      </button>
      <Link to="/videogame" className={style.link}>
        <button className={style.reload}>Create a videogame!</button>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
