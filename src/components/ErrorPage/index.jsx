import React from "react";
import "../../assets/stylesheets/errorPage.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="heading">OOPS!</div>
        <div className="text">Something went wrong!</div>
        <a href="/">Return back to greatness</a>
      </div>
    </div>
  );
};

export default ErrorPage;
