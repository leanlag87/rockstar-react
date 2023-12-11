import React from "react";
import IMGMAIN from "../img/Main-IMG.png";

const Main = () => {
  return (
    <main className="main">
      <div className="main__img">
        <img src={IMGMAIN} alt="IMG-Main" />
      </div>
      <div className="main__title-name">
        <h3 className="main__title">Red Dead Redemption</h3>
      </div>
      <div className="main__description">
        <h1 className="main__container-description">
          Now on Nintendo Switch and PS4
        </h1>
        <div className="main__btn">
          <button className="main__container-btn">Watch Now</button>
        </div>
      </div>
      <div className="main__container-dash">
        <div className="main__dash">
          <i className="bi bi-dash-lg"></i>
        </div>
        <div className="main__dash-g">
          <i className="bi bi-dash-lg"></i>
        </div>
        <div className="main__dash-g">
          <i className="bi bi-dash-lg"></i>
        </div>
        <div className="main__dash-g">
          <i className="bi bi-dash-lg"></i>
        </div>
      </div>
    </main>
  );
};

export default Main;
