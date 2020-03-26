import React, { useState } from "react";
import cookieBox from "../../../assets/images/cookieBox.png";
import scones from "../../../assets/images/scones.png";
import biscotti from "../../../assets/images/biscotti.png";
import "../../../assets/stylesheets/featuredProductsSlider.css";

const FeaturedSlider = ({ fade }) => {
  const defaultDisplay = [
    {
      cookies: {
        text: "cookies",
        src: cookieBox,
        alt: "cookies"
      },
      scones: {
        text: "scones",
        src: scones,
        alt: "scones"
      },
      biscotti: {
        text: "biscotti",
        src: biscotti,
        alt: "biscotti"
      }
    }
  ];
  const [showCardValue, setShowCardValue] = useState(0);
  const getCard = direction => {
    if (direction === "next") {
      setShowCardValue(showCardValue + 1);
      if (showCardValue >= 2) {
        setShowCardValue(0);
      }
    }
    if (direction === "prev") {
      setShowCardValue(showCardValue - 1);
      if (showCardValue === 0) {
        setShowCardValue(2);
      }
    }
  };
  const displayAllCards = keyValue => {
    return defaultDisplay.map((card, i) => {
      const key = {
        0: "cookies",
        1: "scones",
        2: "biscotti"
      };
      const keyCode = key[keyValue];

      return (
        <div className="card" key={i}>
          <img
            className="card-img"
            src={card[keyCode].src}
            alt={card[keyCode].alt}
            height={220}
            width={120}
          />
          <div className="card-body">
            <h3>{card[keyCode].text}</h3>
            <p className="card-text">From $33.00</p>
          </div>
        </div>
      );
    });
  };
  const displayCard = () => {
    const key = {
      0: "cookies",
      1: "scones",
      2: "biscotti"
    };
    const keyCode = key[showCardValue];
    const { text, src, alt } = defaultDisplay[0][keyCode];
    return (
      <div className="card">
        <span className="prev round" onClick={() => getCard("prev")}>
          &#8249;
        </span>
        <img
          className="card-img"
          src={src}
          alt={alt}
          height={320}
          width={"80%"}
        />
        <span className="next round" onClick={() => getCard("next")}>
          &#8250;
        </span>

        <div className="card-body">
          <h3>{text}</h3>
          <p className="card-text">From $33.00</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <div className="show-for-mobile">{displayCard()}</div>
        <div className="show-for-desktop">
          {displayAllCards(0)}
          {displayAllCards(1)}
          {displayAllCards(2)}
        </div>
      </div>
    </>
  );
};
export default FeaturedSlider;
