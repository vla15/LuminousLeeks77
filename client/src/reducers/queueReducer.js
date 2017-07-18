const queueReducer = (state = {
  queueId: 0,
  partyCount: null,
  nextWaitDuration: null,
  nextWaitTime: null,
}, action) => {
  switch (action.type) {
  case 'GET_QUEUE_INFO':
    state = action.payload;
    break;
  }
  return state;
};

export default queueReducer;
