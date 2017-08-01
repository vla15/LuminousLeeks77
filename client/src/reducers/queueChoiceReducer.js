const queueChoiceReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_QUEUE_CHOICE_LIST':
    return [...state, action.payload];
  }
  return state;
};

export default queueChoiceReducer;