import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Pager from "../Pager/Pager";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

const Home = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const indexOfLastGame = currentPage * gamesPerPage; //15, pero deberia ser 14
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 0
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <aside>
          <select>
            <option value="">Todos</option>
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
          <select name="" id="">
            <option value="Api">Origen api</option>
            <option value="DB">Origen db</option>
          </select>
          <select>
            <option value="ascAlf">Ascendente Alfabeticamente</option>
            <option value="descAlf">Descendente Alfabeticamente</option>
            <option value="ascRat">Ascendente Rating</option>
            <option value="descRat">Descendente Rating</option>
          </select>
        </aside>
        <article>
          <Pager
            gamesPerPage={gamesPerPage}
            allGames={allGames.length}
            paginado={paginado}
          />
          {currentGames &&
            currentGames.map((vg) => (
              <Card
                key={vg?.id}
                name={vg?.name}
                image={vg?.image}
                genre={vg?.genre}
                genres={vg?.genres}
              />
            ))}
        </article>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
