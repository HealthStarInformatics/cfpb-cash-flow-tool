import React from "react";
import { Icon } from "../shared/Icon";

export const StrategyCardAction = ({ text, questions, finalThought }) => (
  <div className="strategy-card-action">
    {text && <StrategyCardTip text={text} />}
    {questions && <StrategyCardQuestionList questions={questions} />}
    {finalThought && <div className="final-thought">{finalThought}</div>}
  </div>
);

export const StrategyCardTip = ({ text }) => (
  <div className="tip">
    <span>
      <Icon type="star-icon" />
    </span>
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
