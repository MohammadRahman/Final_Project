import React from "react";
import "./homepage.scss";
import { Backlog } from "../backlog/Backlog";
export const Homepage = () => {
  return (
    <div className="homepage-container">
      <Backlog title="Todo" />
      <Backlog title="Doing" />
      <Backlog title="Done" />
    </div>
  );
};
