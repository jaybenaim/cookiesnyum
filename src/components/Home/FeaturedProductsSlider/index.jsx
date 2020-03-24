import React, { useState, useEffect } from "react";
import cookie1 from "../../../assets/images/cookie1.jpg";
import cookie2 from "../../../assets/images/cookie2.jpg";
import cookie3 from "../../../assets/images/cookie3.jpg";
import "../../../assets/stylesheets/featuredSlider.css";

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
        <img
          className="card-image"
          src={src}
          alt={alt}
          height={320}
          width={"80%"}
        />
        <div class="card-body">
          <h3>{text}</h3>
          <p class="card-text">
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
        {displayCard()}hello
        <span className="" onClick={() => getCard("prev")}>
          Previous
        </span>
        <span className="" onClick={() => getCard("next")}>
          Next
        </span>
      </div>
    </>
  );
};
export default FeaturedSlider;
