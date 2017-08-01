let initial = 'Queue Info';

const viewReducer = (state = {host: initial, queueList: 1}, action) => {
  switch (action.type) {
  case 'SET_VIEW_HOST':
    return {
      ...state,
      host: action.payload
    };

  case 'SET_VIEW_QUEUE_CHOICE':
    return {
      ...state,
      queueList: action.payload
    };

  }

  return state;
};

export default viewReducer;
