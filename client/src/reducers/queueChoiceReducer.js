const queueChoiceReducer = (state = {queueList: [], isEnqueued: null}, action) => {
  switch (action.type) {
  case 'GET_QUEUE_CHOICE_LIST':
    return {
      ...state, 
      queueslist: action.payload
    };

  case 'SET_HAS_PARTY':
    return {
      ...state, 
      isEnqueued: action.payload
    };
  }

  return state;
};

export default queueChoiceReducer;