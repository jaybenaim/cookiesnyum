import React, { useState } from "react";
import "../../../assets/stylesheets/aboutUs.css";
import profile from "../../../assets/images/aboutUs/profile.png";
import xoxo from "../../../assets/images/xoxo.png";
import { Button } from "react-materialize";

const AboutUs = () => {
  const [more, showMore] = useState(false);
  return (
    <>
      <div className="about-us-grid desktop-grid mobile-grid">
        <div className="right-side top">
          <img src={profile} alt="profile" height={330} width={"100%"} />
        </div>
        <div className="left-side bottom secondary-font">
          <h3>
            Your favourite dolce girls <br />
            Nada + Ashley
          </h3>

          <p>
            {!more ? (
              <>
                <span>
                  DolceNadaa Began in early 2020 with mother daughter duo Nada &
                  Ashley Aceto. Baking has always been a passion of ours since I
                  can remember! Our favourite thing to make together was warm
                  gooey chocolate chip cookies and then it came to us...stuffed
                  cookies! We figured that everyone loves cookies and they
                  somehow always manage to bring you back to your childhood, so
                  we wanted to give our customers that experience.
                </span>
                <Button node="button" onClick={() => showMore(!more)}>
                  Show More
                </Button>
              </>
            ) : (
              <>
                <span>
                  Our goal is to bring you back to when you were a little kid,
                  walking into the kitchen as you smell the wonderful aromas,
                  with your eyes peering through the oven trying to see what was
                  baking. We decided to enhance mom’s brown butter chocolate
                  chip cookie by stuffing it with some of our favourite
                  chocolate bars and baked goods resulting in a world of
                  flavour! Our cookies are crunchy on the outside and warm and
                  gooey on the inside. Some of our favourite stuffed creations
                  include Oreo Birthday Cake, Peanut Butter Dream Cup, Nutella
                  goddess and Double Dolce Delight!  In addition to our stuffed
                  cookies, we have Mary Neves who specializes in our wonderfully
                  soft and fluffy scones. These scones are uniquely hand crafted
                  and simply delicious. These baked goods are offered in the
                  following flavours: Blueberry, Cinnamon-bun, Orange Cranberry
                  and Chocolate Chip.
                </span>
                <Button node="button" onClick={() => showMore(!more)}>
                  Show Less
                </Button>
              </>
            )}
          </p>
          <img src={xoxo} alt="slogan" height={80} width={"40%"} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
