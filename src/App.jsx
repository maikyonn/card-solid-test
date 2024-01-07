import { For, createSignal } from "solid-js";

import "./App.css";

import { useGame } from "./data/context";
import { PlayerInfo } from "./components/playerinfo";
import { AllianceDisplay } from "./components/alliancedisplay";
import { ShopDisplay } from "./components/shopdisplay";
import { ActionsDisplay } from "./components/actionsdisplay";
import { ProductionDisplay } from "./components/productiondisplay";
import { CombatDisplay } from "./components/combatdisplay";
import { HandDisplay } from "./components/handdisplay";

function App(props) {
  const [
    game,
    {
      addCard,
      shuffleDiscard,
      drawCardsFromDeck,
      deployCard,
      cleanUp,
      selectCard,
    },
  ] = useGame();
  console.log(game);

  const [currentPlayerIndex, setCurrentPlayerIndex] = createSignal(0);
  const currentPlayer = () => game.players[currentPlayerIndex()];

  return (
    <>
      <div class="container">
        <PlayerInfo></PlayerInfo>
        <AllianceDisplay></AllianceDisplay>
        <ShopDisplay></ShopDisplay>
        <ActionsDisplay> </ActionsDisplay>
        <ProductionDisplay></ProductionDisplay>
        <CombatDisplay></CombatDisplay>
        <HandDisplay></HandDisplay>
      </div>
    </>
  );
}

export default App;
