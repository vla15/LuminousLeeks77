let initial = { party_size: 1, first_name: '', phone_number: '' }

const partyReducer = (state = initial, action) => {

  switch (action.type) {

    case 'GET_PARTY_INFO':
      return action.payload;

    case 'UPDATE_PARTY_INFO':
      return action.payload;

    case 'ENQUEUE':
      return action.payload;

    case 'DEQUEUE':
      return action.payload;

    case 'UPDATE_PARTY_SIZE':
      return { ...state, party_size: action.payload };

    case 'UPDATE_FIRST_NAME':
      return { ...state, first_name: action.payload };

    case 'UPDATE_PHONE_NUMBER':
      return { ...state, phone_number: action.payload };
  };

  return state;
};

export default partyReducer;
