import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  filterVideogames,
  filterOrigin,
  Order,
} from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import Pager from "../Pager/Pager";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  const allGames = useSelector((state) => state.videogames);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const indexOfLastGame = currentPage * gamesPerPage; //15, pero deberia ser 14
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 0
  let currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(getVideogames());
  };

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterGenre = (e) => {
    let valor = e.target.value;
    e.preventDefault();
    dispatch(filterVideogames(valor));
  };

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(Order(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  return (
    <div>
      <NavBar handleReload={handleReload} />
      <div className={style.containerhome}>
        <aside className={style.aside}>
          <label htmlFor="">Filter by gender</label>
          <select onChange={handleFilterGenre} className={style.select}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Racing">Racing</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
          </select>
          <label htmlFor="">Filter by origin</label>
          <select onChange={handleFilterOrigin} className={style.select}>
            <option value="All">All</option>
            <option value="Api">From the API</option>
            <option value="DB">Created by you</option>
          </select>
          <label htmlFor="">Order the games</label>
          <select onChange={handleOrder} className={style.select}>
            <option value="All">Restart order</option>
            <option value="ascAlf">Ascending alphabetically</option>
            <option value="descAlf">Descending alphabetically</option>
            <option value="ascRat">Highest rating</option>
            <option value="descRat">Lower rating</option>
          </select>
        </aside>
        <article className={style.article}>
          {currentGames &&
            currentGames.map((vg) => (
              <Card
                key={vg?.id}
                name={vg?.name}
                image={vg?.image}
                genre={vg?.genre}
                genres={vg?.genres}
                id={vg?.id}
              />
            ))}
          <Pager
            gamesPerPage={gamesPerPage}
            allGames={allGames.length}
            paginado={paginado}
          />
        </article>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
