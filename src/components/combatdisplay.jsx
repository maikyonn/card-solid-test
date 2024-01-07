import { useGame } from "../data/context";
import { For, createMemo } from "solid-js";

export const CombatDisplay = () => {
  const [game, { deployCard }] = useGame();

  const currentPlayerIndex = 0;
  const currentPlayerCombatBoard = createMemo(() => {
    return game.players[currentPlayerIndex].combat_board;
  });

  return (
    <div class="combat-display">
      <For each={currentPlayerCombatBoard()}>
        {(location) => {
          const card = location.deployed;
          console.log("rendering");
          return (
            <div class="card">
              <h4>{card ? card.name : "Empty"}</h4>
              <p>{location.type}</p>
              {card ? (
                <button
                  onClick={[
                    deployCard,
                    [currentPlayerIndex, location.location],
                  ]}
                >
                  Action
                </button>
              ) : (
                <button
                  onClick={[
                    deployCard,
                    [currentPlayerIndex, location.location],
                  ]}
                >
                  Deploy
                </button>
              )}
            </div>
          );
        }}
      </For>
    </div>
  );
};
