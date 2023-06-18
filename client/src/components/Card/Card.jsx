import { Link, useParams } from "react-router-dom";

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
    <div>
      <img src={image} alt={name} width="200px" height="250px" />
      <Link to={`/videogame/${id}`}>
        <h3>Name: {name}</h3>
      </Link>
      <h4>Genres: {genresfinal}</h4>
    </div>
  );
};

export default Card;
