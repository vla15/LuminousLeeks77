let initial = 'Queue Info';

const viewReducer = (state = initial, action) => {
  switch (action.type) {
  case 'SET_VIEW_HOST':
    return action.payload;

  case 'SET_VIEW_QUEUE_CHOICE':
    return {
      ...state,
      queueList: action.payload
    };

  case 'SET_VIEW_CUSTOMER':
    return action.payload;

  }

  return state;
};

export default viewReducer;
