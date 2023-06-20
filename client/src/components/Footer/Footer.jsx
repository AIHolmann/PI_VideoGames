import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h5 className={style.h5}>© 2023 All rights reserved.</h5>
      <h5 className={style.h5}>
        Design and development:
        <Link to="mailto:alejoholmann99@gmail.com" className={style.link}>
          alejoholmann99@gmail.com
        </Link>
      </h5>
      <h5 className={style.h5}>
        Linkedin:{" "}
        <Link
          to="https://www.linkedin.com/in/alejo-holmann-a51262221/"
          target="_blank"
          className={style.link}
        >
          @Alejo Holmann
        </Link>
      </h5>
      <h5 className={style.h5}>
        GitHub:{" "}
        <Link
          to="https://github.com/AIHolmann "
          target="_blank"
          className={style.link}
        >
          @AIHolmann
        </Link>
      </h5>
    </footer>
  );
};

export default Footer;
