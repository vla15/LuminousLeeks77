const newPartyReducer = (state = {
  partySize: 1,
  firstName: '',
  phoneNumber: ''
}, action) => {
  switch (action.type) {
  case 'CHANGE_PARTY_SIZE':
    if (0 < action.payload && action.payload < 9) {
      return {
        ...state,
        partySize: action.payload
      }
    }
  case 'CHANGE_FIRST_NAME':
    return {
      ...state,
      firstName: action.payload
    }
  case 'CHANGE_PHONE_NUMBER':
    return {
      ...state,
      phoneNumber: action.payload
    }
  }
  return state;
};

export default newPartyReducer;
