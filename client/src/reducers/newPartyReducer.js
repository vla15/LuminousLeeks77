const newPartyReducer = (state = { partySize: 1 }, action) => {
  switch (action.type) {
  case 'CHANGE_PARTY_SIZE':
    if (0 < action.payload && action.payload < 9) {
      return { partySize: action.payload };
    }
    break;
  }
  return state;
};

export default newPartyReducer;
