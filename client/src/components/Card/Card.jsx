import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = ({ name, image, genres, id }) => {
  let genresfinal = "";
  if (Array.isArray(genres)) {
    let genresdb = [];
    genres.map((el) => genresdb.push(el.name));
    genresfinal = genresdb.join(", ");
  } else {
    return (genresfinal = genres);
  }
  return (
    <div className={style.container}>
      <img src={image} alt={name} width="200px" height="250px" />
      <div className={style.info}>
        <Link to={`/videogame/${id}`} className={style.link}>
          <h3 className={style.title}>Name: {name}</h3>
        </Link>
        <h4 className={style.genre}>Genres: {genresfinal}</h4>
      </div>
    </div>
  );
};

export default Card;
