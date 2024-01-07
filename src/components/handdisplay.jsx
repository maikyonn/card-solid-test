import { useGame } from "../data/context";
import { For, createSignal } from "solid-js";

export const HandDisplay = (props) => {
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

  const [currentPlayerIndex, setCurrentPlayerIndex] = createSignal(0);
  const currentPlayer = () => game.players[currentPlayerIndex()];
  return (
    <div class="hand-display">
      <For each={currentPlayer().hand}>
        {(card) => {
          return (
            <div
              class={
                card.id == currentPlayer().selected_card_id
                  ? "card-selected"
                  : "card"
              }
            >
              <h4>{card.name}</h4>
              <p>Potential: {card.potential}</p>
              <p>
                {card.ability} {card.id}
              </p>
              <button onClick={[selectCard, [currentPlayer().id, card.id]]}>
                Select
              </button>
            </div>
          );
        }}
      </For>
    </div>
  );
};
