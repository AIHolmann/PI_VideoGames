import style from "./pager.module.css";

const Pager = ({ gamesPerPage, allGames, paginado }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className={style.ul}>
        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <li
                onClick={() => paginado(number)}
                key={number}
                className={style.li}
              >
                {number}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Pager;
