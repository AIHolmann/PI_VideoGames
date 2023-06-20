import React from "react";
import { Link } from "react-router-dom";
import style from "./landingpage.module.css";
import box from "../../assets/imagenes-gif/Box.gif";

const LandingPage = () => {
  return (
    <div className={style.backgound}>
      <div className={style.container}>
        <h1>Welcome to your video game journey!</h1>
        <div className={style.containerbox}>
          <img src={box} alt="" className={style.box} />
          <Link to="/home" className={style.link}>
            <button className={style.buton}>Let's go!</button>
          </Link>
        </div>
        <h5 className={style.footer}>Discover your favorite games and more!</h5>
      </div>
    </div>
  );
};

export default LandingPage;
