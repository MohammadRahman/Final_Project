import React from "react";
import "./App.css";
import { TrelloList } from "./components/list/TrelloList";
import { Backlog } from "./components/backlog/Backlog";
import { Homepage } from "./components/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
