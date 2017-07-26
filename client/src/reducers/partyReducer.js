let initial = { party_size: 1, first_name: '', phone_number: '' };

const partyReducer = (state = initial, action) => {

  switch (action.type) {

  case 'GET_PARTY_INFO':
    return action.payload;

  case 'UPDATE_PARTY_INFO':
    return action.payload;

  case 'ENQUEUE_CUSTOMER':
    return action.payload;

  case 'DEQUEUE_CUSTOMER':
    return { party_size: 1, first_name: '', phone_number: '' };

  case 'UPDATE_PARTY_SIZE':
    return {...state, party_size: action.payload };

  case 'UPDATE_FIRST_NAME':
    return {...state, first_name: action.payload };

  case 'UPDATE_PHONE_NUMBER':
    return {...state, phone_number: action.payload };

  case 'CLEAR_PARTY':
    return { party_size: 1, first_name: '', phone_number: '' };
  }

  return state;
};

export default partyReducer;
