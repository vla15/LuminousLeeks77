let initial = { is_open: false, parties: [] };

const queueReducer = (state = initial, action) => {

  switch (action.type) {

    case 'GET_QUEUE_INFO_CUSTOMER':
      return action.payload;

    case 'GET_QUEUE_INFO_HOST':
      return action.payload;

    case 'TOGGLE_QUEUE':
      return {
        ...state,
        is_open: action.payload.is_open
      };
  };

  return state;
};

export default queueReducer;
