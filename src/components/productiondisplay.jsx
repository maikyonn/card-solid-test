import { useGame } from "../data/context";
import { For, createSignal } from "solid-js";

export const ProductionDisplay = (props) => {
  const [
    game,
    { addCard, shuffleDiscard, drawCardsFromDeck, deployCard, cleanUp },
  ] = useGame();

  const [currentPlayerIndex, setCurrentPlayerIndex] = createSignal(0);
  const currentPlayer = () => game.players[currentPlayerIndex()];
  return (
    <div class="production-display">
      <For each={currentPlayer().production_board}>
        {(card) => {
          return (
            <div class="production-card">
              <h4>{card.name}</h4>
              <p>Progress: {card.potential}</p>
              <p>{card.ability}</p>
              <button onClick={[deployCard, [currentPlayer().id, card]]}>
                Deploy
              </button>
            </div>
          );
        }}
      </For>
    </div>
  );
};
