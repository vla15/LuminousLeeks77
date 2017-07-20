const queueReducer = (state = { isOpen: true, isEmpty: true }, action) => {
  switch (action.type) {
  case 'GET_QUEUE_INFO':
    state = action.payload;
  case 'UPDATE_QUEUE_INFO_CUSTOMER':
    state = action.payload;
  case 'UPDATE_QUEUE_INFO_HOST':
    state = action.payload;
    break;
  }
  return state;
};

export default queueReducer;
