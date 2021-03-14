import React, { useState } from "react";
import "./TinderCards.css";
import TinderCards from "react-tinder-card";

function TinderCards() {
  const [people, usePeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
    },
    {
      name: "Jeff Bezoz",
      url:
        "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
  ]);
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCards></TinderCards>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
