const newPartyReducer = (state = { partySize: 1 }, action) => {
  switch (action.type) {
  case 'INCREMENT_PARTY_SIZE':
    if (state.partySize < 8) {
      return { partySize: state.partySize + 1 }
    }
    break;
  case 'DECREMENT_PARTY_SIZE':
    if (state.partySize > 1) {
      return { partySize: state.partySize - 1 }
    }
    break;
  }
  return state;
};

export default newPartyReducer;
