import React from "react";
import CARDS_1 from "../img/card1.jpg";
import CARDS_2 from "../img/card2.jpg";
import CARDS_3 from "../img/card3.png";
import CARDS_4 from "../img/card4.jpg";
import CARDS_5 from "../img/card5.jpg";
import CARDS_6 from "../img/card6.jpg";
import Card from "../subComponent/Card";

const Cards = () => {
  return (
    <section className="cards">
      <div className="cards__container-title">
        <h2 className="cards__title-main">Newswire</h2>
      </div>

      <div className="cards__container-cards">
        <Card
          img={CARDS_1}
          title={"Red Dead Redemption"}
          description={
            "Bounty Hunters Rewarded with a Range of Bonuses and Benefits in Red Dead Online"
          }
          span={"September 5, 2023"}
        />
        <Card
          img={CARDS_2}
          title={"GTA Online"}
          description={
            "Los Santos Nightclubs Thrive as Sell Missions Deliver Extra and Daily Income Triples"
          }
          span={"August 31, 2023"}
        />
        <Card
          img={CARDS_3}
          title={"Rockstar Games"}
          description={
            "CircoLoco Records Presents Jealous from Mochakk — Available Now"
          }
          span={"August 25, 2023"}
        />
        <Card
          img={CARDS_4}
          title={"GTA Online"}
          description={
            "Cultivate Chaos on Two Wheels With Bonuses for Biker Businesses and MC Activities"
          }
          span={"August 24, 2023"}
        />
        <Card
          img={CARDS_5}
          title={"GTA Online"}
          description={
            "Claim the Apocalypse ZR380 and Fight to the Top of the Heap in the Arena War Series with GTA+ Membership"
          }
          span={"August 17, 2023"}
        />
        <Card
          img={CARDS_6}
          title={"GTA Online"}
          description={"Suit Up for Executive Bonuses This Week in GTA Online"}
          span={"August 17, 2023"}
        />
      </div>

      <div className="cards__cards-btn">
        <button className="cards__btn">View More</button>
      </div>
    </section>
  );
};

export default Cards;
