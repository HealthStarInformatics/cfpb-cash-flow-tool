import React from "react";
import starImage from "../../assets/gold-star-icon.png";

export const StrategyCardAction = ({ text, questions, finalThought }) => (
  <div className="strategy-card-action">
    {text && <StrategyCardTip text={text} />}
    {questions && <StrategyCardQuestionList questions={questions} />}
    {finalThought && <div className="final-thought">{finalThought}</div>}
  </div>
);

export const StrategyCardTip = ({ text }) => (
  <div className="tip">
    <img className="star-icon" src={starImage} alt="gold star" />
    {text}
  </div>
);

export const StrategyCardQuestionList = ({ questions }) => (
  <ul className="question-list">
    {questions.map((question, idx) => (
      <li className="item" key={idx}>
        {question}
      </li>
    ))}
  </ul>
);
