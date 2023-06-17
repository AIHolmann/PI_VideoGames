const Card = ({ name, image, genre, genres }) => {
  /*  const allGenres = genre
    .map((el) => {
      return el.name;
    })
    .join(", ");*/
  let genresfinal = "";
  if (genres) {
    let genresdb = [];
    genres.map((el) => genresdb.push(el.name));
    genresfinal = genresdb.join(", ");
  }
  return (
    <div>
      <img src={image} alt={name} width="200px" height="250px" />
      <h3>Name: {name}</h3>
      <h4>Genres: {genresfinal}</h4>
    </div>
  );
};

export default Card;
