import React from "react";
import "../../../assets/stylesheets/aboutUs.css";
import profile from "../../../assets/images/aboutUs/profile.png";
import xoxo from "../../../assets/images/xoxo.png";

const AboutUs = () => {
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
            DolceNadaa Began in early 2020 with mother daughter duo Nada {"&"}
            Ashley Aceto. Baking has always been a passion of ours since I can
            remember! Our favourite thing to make together was warm gooey
            chocolate chip cookies and then it came to us STUFFED COOKIES. We
            decided that everyone loves cookies and warm cookies always manage
            to bring you back to your childhood, so we wanted to provide
            customers with an experience. This experience is to bring you back
            to when you were little a kid and walked into the kitchen to smell
            the baking aromas and you quickly tried to look into the oven to see
            what was baking. We decided to mainly focus on a wide variety of
            stuffed cookies with our brown butter chocolate chip cookie dough
            base and then we decided to  stuff our cookies with some of our
            favourite chocolate bars, baked goods and so much more. Our cookies
            are crunchy on the outside and warm and gooey on the inside. Some of
            our favourite stuffed creations include Oreo Birthday Cake, Peanut
            Butter Dream Cup, Nutella goddess and Double Dolce Delight! Aside
            from our stuffed cookies we have Mary Neves who specializes in our
            amazingly soft and fluffy scones. Our scones are uniquely hand
            crafted and simply delicious, we offer Blueberry, Cinnamon bun,
            Orange Cranberry and Chocolate chip. We can't wait for you to
            experience DolceNadaa for yourself {"<3"} - XOXO Your Favourite
            Dolce Girls{" "}
          </p>
          <img src={xoxo} alt="slogan" height={80} width={"40%"} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
