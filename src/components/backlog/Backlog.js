import React, { useState } from "react";
import "./backlog.scss";
import { TrelloCard } from "../card/TrelloCard";

export const Backlog = ({ title }) => {
  const [showCard, setCard] = useState(false);
  return (
    <div className="main-body">
      <div className="backlog-container">
        <span className="title">{title}</span>
        <i className="icon fas fa-plus" onClick={() => setCard(!showCard)} />
      </div>
      {showCard ? <TrelloCard /> : null}
    </div>
  );
};
