import { useGame } from "../data/context";
import { For, createSignal } from "solid-js";

export const ActionsDisplay = (props) => {
  const [
    game,
    { addCard, shuffleDiscard, drawCardsFromDeck, deployCard, cleanUp },
  ] = useGame();

  const [currentPlayerIndex, setCurrentPlayerIndex] = createSignal(0);
  const currentPlayer = () => game.players[currentPlayerIndex()];
  return (
    <div class="actions-display">
      <button onClick={[addCard, currentPlayer().id]}>Add Card~</button>
      <button onClick={[shuffleDiscard, currentPlayer().id]}>
        Shuffle Discard~
      </button>
      <button onClick={[drawCardsFromDeck, currentPlayer().id]}>
        Draw Cards~
      </button>
      <button onClick={[cleanUp, currentPlayer().id]}>Clean Up~</button>
    </div>
  );
};
