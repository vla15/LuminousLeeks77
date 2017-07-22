const queueReducer = (state = { is_open: false }, action) => {
  switch (action.type) {
  case 'GET_QUEUE_INFO':
    return action.payload[0].queue;
  case 'UPDATE_QUEUE_INFO':
    return action.payload;
  case 'TOGGLE_QUEUE':
    return action.payload;
    break;
  }
  return state;
};

export default queueReducer;
