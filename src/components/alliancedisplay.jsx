import { useGame } from "../data/context";
import { For, createSignal } from "solid-js";

export const AllianceDisplay = (props) => {
  const [
    game,
    { addCard, shuffleDiscard, drawCardsFromDeck, deployCard, cleanUp },
  ] = useGame();

  const [currentPlayerIndex, setCurrentPlayerIndex] = createSignal(0);
  const currentPlayer = () => game.players[currentPlayerIndex()];
  return (
    <div class="alliance-display">
      <For each={game.alliance_board}>
        {(card) => {
          return (
            <div class="alliance-card">
              <h4>{card.name}</h4>
              <p>Potential: {card.potential}</p>
              <p>{card.ability}</p>
              <button onClick={[deployCard, [currentPlayer().id, card]]}>
                Select
              </button>
            </div>
          );
        }}
      </For>
    </div>
  );
};
