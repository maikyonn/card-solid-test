import { useGame } from "../data/context";
import { For, createSignal } from "solid-js";

export const PlayerInfo = (props) => {
  const [
    game,
    { addCard, shuffleDiscard, drawCardsFromDeck, deployCard, cleanUp },
  ] = useGame();

  const [currentPlayerIndex, setCurrentPlayerIndex] = createSignal(0);
  const currentPlayer = () => game.players[currentPlayerIndex()];
  return (
    <div class="playerinfo-display">
      <h2>
        Player: {currentPlayer().name}
        <br></br>
        Action:
        {game.action}
        <br></br>
        Money: {currentPlayer().money}
        <br></br>
        Draw: {currentPlayer().draw.length}
        <br></br>
        Discard: {currentPlayer().discard.length}
        <button>Finish Turn</button>
        <button onClick={() => console.log(game)}>Log</button>
      </h2>
    </div>
  );
};
