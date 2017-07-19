const queueReducer = (state = null, action) => {
  switch (action.type) {
  case 'GET_QUEUE_INFO':
    state = action.payload;
    break;
  }
  return state;
};

export default queueReducer;
