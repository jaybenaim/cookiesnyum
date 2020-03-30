import React from "react";
import "../../assets/stylesheets/errorPage.css";
const ErrorPage = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can't be found!</h2>

        <a href="/dolcenadaa">
          <span class="arrow"></span>Return To Homepage
        </a>
      </div>
      {/* <!-- This templates was made by Colorlib (https://colorlib.com) --> */}
    </div>
  );
};

export default ErrorPage;
