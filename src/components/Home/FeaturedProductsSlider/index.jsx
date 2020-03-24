import React, { useState, useEffect } from "react";
import cookie1 from "../../../assets/images/cookie1.jpg";
import cookie2 from "../../../assets/images/cookie2.jpg";
import cookie3 from "../../../assets/images/cookie3.jpg";
import "../../../assets/stylesheets/featuredProductsSlider.css";

const FeaturedSlider = () => {
  const defaultDisplay = [
    {
      cookies: {
        text: "cookies",
        src: cookie1,
        alt: "cookies"
      },
      scones: {
        text: "scones",
        src: cookie2,
        alt: "scones"
      },
      biscotti: {
        text: "biscotti",
        src: cookie3,
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
      if (showCardValue == 0) {
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
        <div class="card" key={i}>
          <img
            className="card-img"
            src={card[keyCode].src}
            alt={card[keyCode].alt}
            height={220}
            width={120}
          />
          <div className="card-body">
            <h3>{card[keyCode].text}</h3>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
      <div class="card">
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
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
