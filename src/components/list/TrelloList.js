import React from "react";
import "./trello.scss";

export const TrelloList = ({ title }) => {
  return (
    <div className="drag-container">
      <ul className="drag-list">
        <li className="drag-column backlog-column">
          <span className="header">{title}</span>
        </li>
      </ul>
      <div className="backlog-content">
        <ul className="drag-item-list">
          <li className="drag-item">testing</li>
          <li className="drag-item">testing</li>
          <li className="drag-item">testing</li>
        </ul>
      </div>
      <div className="add-button-group">
        <div className="add-btn">
          <span className="plus-sign">+</span>
        </div>
      </div>
    </div>
  );
};
