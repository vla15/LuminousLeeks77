const partyReducer = (state = null, action) => {
  switch (action.type) {
  case 'GET_PARTY_INFO':
    state = action.payload;
  case 'UPDATE_PARTY_INFO_CUSTOMER':
    state = action.payload;
    break;
  }
  return state;
};

export default partyReducer;