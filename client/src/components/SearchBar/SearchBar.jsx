import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleImputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameVideogames(name));
    setName("");
  };

  return (
    <div>
      <label htmlFor="">🔎</label>
      <input
        type="text"
        placeholder="Ecribe aquí"
        value={name}
        onChange={handleImputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
