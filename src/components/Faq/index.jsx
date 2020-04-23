import React from "react";
import questions from "./questions";
import { Collapsible, CollapsibleItem } from "react-materialize";
import "../../assets/stylesheets/faq.css";
import { withRouter } from "react-router-dom";

const Faq = () => {
  const questionElements = questions.map((question, i) => {
    return (
      <CollapsibleItem expanded={false} header={question.q} node="div" key={i}>
        {question.a}
      </CollapsibleItem>
    );
  });
  return (
    <div className="container faq-container">
      <h1 className="primary-font">Frequently Asked Questions</h1>
      <Collapsible accordion>{questionElements}</Collapsible>
    </div>
  );
};

export default withRouter(Faq);
