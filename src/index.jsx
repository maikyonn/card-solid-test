/* @refresh reload */
import { render } from "solid-js/web";
import { GameProvider } from "./data/context";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

render(
  () => (
    <GameProvider name={"new game"}>
      <App />
    </GameProvider>
  ),
  root
);
