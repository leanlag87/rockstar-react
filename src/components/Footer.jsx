import React from "react";
import BtnFooter from "../subComponent/BtnFooter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer_container-top">
          <div className="footer__container-user">
            <BtnFooter content={"Contact"} styleClass={"contact-btn-style"} />
            <BtnFooter content={"Careers"} styleClass={"contact-btn-style"} />
            <BtnFooter content={"Subscribe"} styleClass={"contact-btn-style"} />
          </div>
          <div className="footer__container-idioma">
            <i className="bi bi-globe2"></i>
            <BtnFooter content={"English"} styleClass={"footer__idioma-link"} />
            <i className="bi bi-caret-down"></i>
          </div>
        </div>

        <div className="footer__container-redes">
          <i className="bi bi-twitch"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-facebook"></i>
        </div>

        <div className="footer__container-legal">
          <BtnFooter content={"Corporate"} styleClass={"footer__legal-link"} />
          <BtnFooter content={"Privacy"} styleClass={"footer__legal-link"} />
          <BtnFooter
            content={"Cookie Settings"}
            styleClass={"footer__legal-link"}
          />
          <BtnFooter
            content={"Cookie Policy"}
            styleClass={"footer__legal-link"}
          />
          <BtnFooter content={"Legal"} styleClass={"footer__legal-link"} />
          <BtnFooter
            content={"Do Not Sell My Personal Information"}
            styleClass={"footer__legal-link"}
          />
        </div>

        <div className="footer__bottom-ubication">
          <div className="footer__container-ubication">
            <BtnFooter
              content={"RockstarGames"}
              styleClass={"footer__ubication-link"}
            />
          </div>

          <div className="footer__container-ubication">
            <BtnFooter
              content={"NewYork"}
              styleClass={"footer__capitals-link"}
            />
            <BtnFooter
              content={"London"}
              styleClass={"footer__capitals-link"}
            />
            <BtnFooter content={"Paris"} styleClass={"footer__capitals-link"} />
            <BtnFooter
              content={"Bogota"}
              styleClass={"footer__capitals-link"}
            />
          </div>

          <div className="footer__container-ubication">
            <BtnFooter
              content={"MCMXCVIII"}
              styleClass={"footer__numbers-link"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
