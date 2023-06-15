const Card = ({ name, image, genre, genres }) => {
  const allGenres = genre.join(", ");
  const allGenresDB = genre.join(", ");
  return (
    <div>
      {console.log(image)}
      <img src={image} alt={name} width="200px" height="250px" />
      <h3>Name: {name}</h3>
      {genre ? <h4>Genres: {allGenres}</h4> : <h4>Genres: {allGenresDB}</h4>}
    </div>
  );
};

export default Card;
