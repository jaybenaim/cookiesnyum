import React from "react";
import "../../assets/stylesheets/home.css";

const Home = ({ fade }) => {
  return (
    <main id="mainContent">
      <div className={fade}>Content</div>
    </main>
  );
};
export default Home;
