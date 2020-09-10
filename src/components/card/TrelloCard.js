import React from "react";
import "./trelloCard.scss";
export const TrelloCard = ({}) => {
  return (
    <div className="card-container">
      <input className="text-input" type="text" />
      <button className="save-button">save</button>
    </div>
  );
};
