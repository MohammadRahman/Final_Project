import React from "react";
import "./App.css";
import { TrelloList } from "./components/list/TrelloList";

function App() {
  return (
    <div className="App">
      <TrelloList title="Backlog" />
    </div>
  );
}

export default App;
