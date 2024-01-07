let card_id_counter = 0;
export const createCard = (name, type, combat, production, ability) => {
  return {
    id: card_id_counter++,
    type: type,
    name: name,
    combat: combat,
    production: production,
    ability: ability,
    selected: false,
  };
};

export const createStartingDeck = () => {
  return [
    createCard("Swordsman", "unit", 2, 0, "none"),
    createCard("Swordsman", "unit", 2, 0, "none"),
    createCard("Swordsman", "unit", 2, 0, "none"),
    createCard("Fighter", "unit", 1, 1, "none"),
    createCard("Fighter", "unit", 1, 1, "none"),
    createCard("Fighter", "unit", 1, 1, "none"),
    createCard("Villager", "unit", 0, 2, "none"),
    createCard("Villager", "unit", 0, 2, "none"),
    createCard("Drug Dealer", "unit", 0, 0, "none"),
    createCard("Beast", "quest", 5, 0, "none"),
  ];
};
const createShop = () => {
  return [
    createCard("Elite Warrior", "unit", 4, 0, "none"),
    createCard("Elf Maiden", "unit", 3, 3, "none"),
    createCard("Mega Knight", "unit", 4, 1, "none"),
    createCard("King of Men", "unit", 4, 4, "none"),
    createCard("Black Swordsman", "unit", 3, -1, "none"),
    createCard("Fallen Fighter", "unit", 1, 0, "none"),
    createCard("Drug Empire", "unit", 0, 4, "none"),
  ];
};

const createCombatBoard = () => {
  return [
    {
      location: 0,
      type: "boss",
      deployed: null,
    },
    {
      location: 1,
      type: "normal",
      deployed: null,
    },
    {
      location: 2,
      type: "normal",
      deployed: null,
    },
    {
      type: "normal",
      location: 3,
      deployed: null,
    },
    {
      location: 4,
      type: "normal",
      deployed: null,
    },
  ];
};

const createAllianceBoard = () => {
  return [
    {
      location: 0,
      name: "Amaterasu",
      cards_deployed: [],
      player_influence: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
      },
    },
    {
      location: 1,
      name: "Band of Traitors",
      cards_deployed: [],
      player_influence: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
      },
    },
    {
      location: 2,
      name: "Eastern Coalition",
      cards_deployed: [],
      player_influence: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
      },
    },
    {
      type: "Birds of the North",
      name: "Amaterasu",
      cards_deployed: [],
      player_influence: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
      },
    },
  ];
};
const createProductionBoard = () => {
  return [
    {
      name: "Primitive Farm",
      ability: "Gaining Money",
      cards: [],
      progress: 0,
    },
    {
      name: "Barracks",
      ability: "Improve Combat",
      cards: [],
      progress: 0,
    },
    {
      name: "Research Lab",
      ability: "Improve Hand",
      cards: [],
      progress: 0,
    },
  ];
};

const createPlayer = (id, name) => {
  return {
    id: id,
    name: name,
    money: 3,
    victory_points: 0,
    combat_board: createCombatBoard(),
    production_board: createProductionBoard(),
    hand: [],
    discard: createStartingDeck(),
    draw: [],
    selected_card_id: null,
  };
};
export const startingPlayerData = {
  GameName: "game 1",
  action: 0,
  turn: 0,
  round: 0,
  phase: 0,
  shop: createShop(),
  alliance_board: createAllianceBoard(),
  players: [
    createPlayer(0, "bob"),
    createPlayer(1, "mikko"),
    createPlayer(2, "saya"),
    createPlayer(3, "moon"),
  ],
};
