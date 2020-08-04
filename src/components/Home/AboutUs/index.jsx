import React, { useState } from "react";
import "../../../assets/stylesheets/aboutUs.css";
import xoxo from "../../../assets/images/xoxo.png";
import { Button } from "react-materialize";

const AboutUs = () => {
  const [more, showMore] = useState(false);
  return (
    <>
      <div className="about-us-grid desktop-grid mobile-grid">
        <div className="right-side top">
          <img
            src="https://via.placeholder.com/250"
            alt="profile"
            height={330}
            width={"100%"}
          />
        </div>
        <div className="left-side bottom secondary-font">
          <h3>
            Your favourite cookie girls <br />
            Lisa + Laney
          </h3>

          <p>
            {!more ? (
              <>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta sint dicta iusto? Commodi ipsam, aliquam quia
                  dignissimos repudiandae quae aspernatur unde facilis dolore
                  laudantium error voluptates magni dolorum temporibus
                  doloribus.
                </span>
                <Button node="button" onClick={() => showMore(!more)}>
                  Show More
                </Button>
              </>
            ) : (
              <>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio, ducimus esse. Esse quasi asperiores officia rerum eos
                  voluptatibus sed magni, similique illum optio explicabo illo
                  ipsa ducimus dignissimos in veritatis!
                </span>
                <Button node="button" onClick={() => showMore(!more)}>
                  Show Less
                </Button>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
