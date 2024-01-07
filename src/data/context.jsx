import { createSignal, createContext, useContext } from "solid-js";
import { createStore, produce, reconcile } from "solid-js/store";
import { createStartingDeck, startingPlayerData } from "./deck";
const GameContext = createContext();

export function GameProvider(props) {
  const [game, setGame] = createStore(startingPlayerData);

  const addCard = (id) => {
    console.log("Adding Card to ID: ", id);
    setPlayers(
      (player) => player.id === id,
      "cards",
      (cards) => {
        console.log("cards: ", cards);
        return [...cards, "new card"];
      }
    );
  };

  // const deployCard = (inputs) => {
  //   const id = inputs[0];
  //   const location = inputs[1];

  //   setGame("players", id, (player) => {
  //     const hand = [...player.hand];
  //     const combat_board = [...player.combat_board];
  //     const index = hand.findIndex((c) => c.id === player.selected_card_id);
  //     combat_board[location].deployed = hand[index];
  //     if (index > -1) {
  //       hand.splice(index, 1);
  //     }
  //     return {
  //       ...player,
  //       hand: hand,
  //       combat_board: combat_board,
  //       selected_card_id: null,
  //     };
  //   });
  // };

  const deployCard = (inputs) => {
    const id = inputs[0];
    const location = inputs[1];

    setGame(
      "players",
      id,
      produce((player) => {
        player.combat_board[location].deployed = player.hand.find(
          (card) => card.id === player.selected_card_id
        );
        const index = player.hand.findIndex(
          (c) => c.id === player.selected_card_id
        );
        if (index > -1) {
          player.hand.splice(index, 1);
        }
        player.selected_card_id = undefined;
      })
    );
  };

  const selectCard = (inputs) => {
    const id = inputs[0];
    const cardId = inputs[1];
    setGame("players", id, "selected_card_id", cardId);
  };

  const cleanUp = (id) => {
    setGame("players", id, (player) => {
      let combat_cards = [
        player.combat_board.map((location) => location.cards_deployed),
      ];
      console.log(combat_cards);
      return {
        ...player,
        discard: [...player.discard, ...player.hand, ...player.combat_board],
        hand: [],
        combat_board: [],
      };
    });
  };

  const shuffleArrayHelper = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const shuffleDiscard = (id) => {
    console.log("Shuffling Discard Pile for ID: ", id);
    setGame("players", id, "discard", (discard) => {
      return shuffleArrayHelper(discard);
    });
  };

  const drawCardsFromDeck = (id) => {
    let cardsToDraw = 5;
    setGame("players", id, (player) => {
      let drawDeck = [...player.draw];
      let discardDeck = [...player.discard];
      let hand = [...player.hand];

      while (cardsToDraw > 0) {
        if (drawDeck.length === 0) {
          if (discardDeck.length === 0) {
            break; // No more cards to draw
          }
          drawDeck = shuffleArrayHelper(discardDeck);
          discardDeck = [];
        }
        const card = drawDeck.pop();
        if (card) {
          hand.push(card);
          cardsToDraw--;
        }
      }
      return {
        ...player,
        draw: drawDeck,
        discard: discardDeck,
        hand: hand,
      };
    });
  };

  const gameExport = [
    game,
    {
      addCard,
      shuffleDiscard,
      drawCardsFromDeck,
      deployCard,
      cleanUp,
      selectCard,
    },
  ];

  return (
    <GameContext.Provider value={gameExport}>
      {props.children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
