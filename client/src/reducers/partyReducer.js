const partyReducer = (state = null, action) => {
  switch (action.type) {
  case 'GET_PARTY_INFO':
    state = action.payload;
    break;
  }
  return state;
};

export default partyReducer;