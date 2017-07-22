let initial = { is_open: false };

const queueReducer = (state = initial, action) => {

  switch (action.type) {

    case 'GET_QUEUE_INFO':
      return action.payload;

    case 'UPDATE_QUEUE_INFO':
      return action.payload;

    case 'TOGGLE_QUEUE':
      return { ...state, is_open: !state.is_open };
  };

  return state;
};

export default queueReducer;
