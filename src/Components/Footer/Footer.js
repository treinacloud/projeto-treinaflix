import React from "react";
import "./Footer.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tmdb from "../../Assets/tmdb.png";
import github from "../../Assets/github.png";
import Thanos from "react-thanos";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
         <div className="footer__center">
          <img
            src={tmdb}
            alt="tmdb"
            className="footer__logo-tmdb"
            onClick={() =>
              window.open(` https://www.themoviedb.org/en`, "_blank")
            }
          />

          <h1 className="footer__text footer__text--2">
            Copyright©2019, <span className="react"> ReactJS is
            <FontAwesomeIcon
              icon={faHeart}
              className="footer__icon-heart-o footer__icon-heart-off"
              aria-hidden="true"
            /></span>
          </h1>
        </div>

        <div
          className="footer__end"
          onClick={() =>
            window.open(`https://github.com/treinacloud/treinaflix`, "_blank")
          }
        >
          <img src={github} alt="github" className="footer__logo-github" />

          <h1 className="footer__text footer__link">Abrir no Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
