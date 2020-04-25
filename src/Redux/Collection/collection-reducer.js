const INITIAL_STATE = {
  collection: [
    {
      id: 1,
      title: "Popular",
      start: 0,
      end: 10
    },
    {
      id: 2,
      title: "Os mais votados",
      start: 10,
      end: 20
    },
    {
      id: 3,
      title: "Maior bilheteria",
      start: 20,
      end: 30
    },
    {
      id: 4,
      title: "Lançamentos",
      start: 30,
      end: 40
    },
    {
      id: 5,
      title: "Os mais curtidos",
      start: 40,
      end: 50
    },
    {
      id: 6,
      title: "Tendências",
      start: 50,
      end: 60
    }
  ]
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
