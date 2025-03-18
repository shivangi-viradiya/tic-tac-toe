import { useState } from "react";
import  Players  from "./components/Players";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Player 1" symbol="X" />
          <Players name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
