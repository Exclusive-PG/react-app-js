const ORDERED_CARD = "ORDERED_CARD";

let initialState = {
  cardUser: [
    { userId: 3, ordered: false },
  ]
};

const ReducerOrderCard = (state = initialState, action) => {

  switch (action.type) {
    case ORDERED_CARD: {
      let objAction = {
        userId: action.userId,
        ordered: action.ordered,
      };

      let copyState = { ...state };
      copyState.cardUser = [ ...state.cardUser ];
      copyState.cardUser.push(objAction);

      return copyState;
    }
    default:
      return state;
  }
};

export let orderedCardAC = (ordered, userId) => ({
  type: ORDERED_CARD,
  ordered,
  userId,
});

export default ReducerOrderCard;
